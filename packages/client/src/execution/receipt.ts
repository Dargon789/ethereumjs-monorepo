import { RLP } from '@ethereumjs/rlp'
import {
  EthereumJSErrorWithoutCode,
  bigIntToBytes,
  bytesToBigInt,
  bytesToInt,
  equalsBytes,
  intToBytes,
  utf8ToBytes,
} from '@ethereumjs/util'
import { Bloom } from '@ethereumjs/vm'

import { DBKey, MetaDBManager } from '../util/metaDBManager.ts'

import type { Block } from '@ethereumjs/block'
import type { Log } from '@ethereumjs/evm'
import type { TransactionType, TypedTransaction } from '@ethereumjs/tx'
import type { PostByzantiumTxReceipt, PreByzantiumTxReceipt, TxReceipt } from '@ethereumjs/vm'
import type { TxHashIndex } from './txIndex.ts'

/**
 * TxReceiptWithType extends TxReceipt to provide:
 *  - txType: byte prefix for serializing typed tx receipts
 */
export type TxReceiptWithType = PreByzantiumTxReceiptWithType | PostByzantiumTxReceiptWithType
interface PreByzantiumTxReceiptWithType extends PreByzantiumTxReceipt {
  /* EIP-2718 Typed Transaction Envelope type */
  txType: TransactionType
}
interface PostByzantiumTxReceiptWithType extends PostByzantiumTxReceipt {
  /* EIP-2718 Typed Transaction Envelope type */
  txType: TransactionType
}

/**
 * Function return values
 */
type GetReceiptByTxHashReturn = [
  receipt: TxReceipt,
  blockHash: Uint8Array,
  txIndex: number,
  logIndex: number,
]
type GetLogsReturn = {
  log: Log
  block: Block
  tx: TypedTransaction
  txIndex: number
  logIndex: number
}[]

/**
 * Storage encodings
 */
type rlpLog = Log
type rlpReceipt = [postStateOrStatus: Uint8Array, cumulativeGasUsed: Uint8Array, logs: rlpLog[]]

export type RlpConvert = (typeof RlpConvert)[keyof typeof RlpConvert]

export const RlpConvert = {
  Encode: 'encode',
  Decode: 'decode',
} as const
export type RlpType = (typeof RlpType)[keyof typeof RlpType]

export const RlpType = {
  Receipts: 'receipts',
  Logs: 'logs',
} as const
type rlpOut = Log[] | TxReceipt[]

export class ReceiptsManager extends MetaDBManager {
  /**
   * Limit of logs to return in getLogs
   */
  GET_LOGS_LIMIT = 10000

  /**
   * Size limit for the getLogs response in megabytes
   */
  GET_LOGS_LIMIT_MEGABYTES = 150

  /**
   * Block range limit for getLogs
   */
  GET_LOGS_BLOCK_RANGE_LIMIT = 2500

  /**
   * Saves receipts to db. Also saves tx hash indexes if within txLookupLimit,
   * and removes tx hash indexes for one block past txLookupLimit.
   * @param block the block to save receipts for
   * @param receipts the receipts to save
   */
  async saveReceipts(block: Block, receipts: TxReceipt[]) {
    const encoded = this.rlp(RlpConvert.Encode, RlpType.Receipts, receipts)
    await this.put(DBKey.Receipts, block.hash(), encoded)
  }

  async deleteReceipts(block: Block) {
    await this.delete(DBKey.Receipts, block.hash())
  }

  /**
   * Returns receipts for given blockHash
   * @param blockHash the block hash
   * @param calcBloom whether to calculate and return the logs bloom for each receipt (default: false)
   * @param includeTxType whether to include the tx type for each receipt (default: false)
   */
  async getReceipts(
    blockHash: Uint8Array,
    calcBloom?: boolean,
    includeTxType?: true,
  ): Promise<TxReceiptWithType[]>
  async getReceipts(
    blockHash: Uint8Array,
    calcBloom?: boolean,
    includeTxType?: false,
  ): Promise<TxReceipt[]>
  async getReceipts(
    blockHash: Uint8Array,
    calcBloom = false,
    includeTxType = false,
  ): Promise<TxReceipt[] | TxReceiptWithType[]> {
    const encoded = await this.get(DBKey.Receipts, blockHash)
    if (!encoded) return []
    let receipts = this.rlp(RlpConvert.Decode, RlpType.Receipts, encoded)
    if (calcBloom) {
      receipts = receipts.map((r) => {
        r.bitvector = this.logsBloom(r.logs).bitvector
        return r
      })
    }
    if (includeTxType) {
      const block = await this.chain.getBlock(blockHash)
      receipts = (receipts as TxReceiptWithType[]).map((r, i) => {
        r.txType = block.transactions[i].type
        return r
      })
    }
    return receipts
  }

  /**
   * Returns receipt by tx hash with additional metadata for the JSON RPC response, or null if not found
   * @param txHash the tx hash
   */
  async getReceiptByTxHashIndex(
    txHashIndex: TxHashIndex,
  ): Promise<GetReceiptByTxHashReturn | null> {
    const [blockHash, txIndex] = txHashIndex
    const receipts = await this.getReceipts(blockHash)
    if (receipts.length === 0) return null
    let logIndex = 0
    receipts.slice(0, txIndex).map((r) => (logIndex += r.logs.length))
    const receipt = receipts[txIndex]
    receipt.bitvector = this.logsBloom(receipt.logs).bitvector
    return [receipt, blockHash, txIndex, logIndex]
  }

  /**
   * Returns logs as specified by the eth_getLogs JSON RPC query parameters
   */
  async getLogs(
    from: Block,
    to: Block,
    addresses?: Uint8Array[],
    topics: (Uint8Array | Uint8Array[] | null)[] = [],
  ): Promise<GetLogsReturn> {
    const returnedLogs: GetLogsReturn = []
    let returnedLogsSize = 0
    for (let i = from.header.number; i <= to.header.number; i++) {
      const block = await this.chain.getBlock(i)
      const receipts = await this.getReceipts(block.hash())
      if (receipts.length === 0) continue
      let logs: GetLogsReturn = []
      let logIndex = 0
      for (const [receiptIndex, receipt] of receipts.entries()) {
        logs.push(
          ...receipt.logs.map((log) => ({
            log,
            block,
            tx: block.transactions[receiptIndex],
            txIndex: receiptIndex,
            logIndex: logIndex++,
          })),
        )
      }
      if (addresses && addresses.length > 0) {
        logs = logs.filter((l) => addresses.some((a) => equalsBytes(a, l.log[0])))
      }
      if (topics.length > 0) {
        // From https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter/:
        // Topics are order-dependent. A transaction with a log with topics
        // [A, B] will be matched by the following topic filters:
        //  * [] - anything
        //  * [A] - A in first position (and anything after)
        //  * [null, B] - anything in first position AND B in second position (and anything after)
        //  * [A, B] - A in first position AND B in second position (and anything after)
        //  * [[A, B], [A, B]] - (A OR B) in first position AND (A OR B) in second position (and anything after)
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        logs = logs.filter((l) => {
          for (const [i, topic] of topics.entries()) {
            if (Array.isArray(topic)) {
              // Can match any items in this array
              if (!topic.find((t) => equalsBytes(t, l.log[1][i]))) return false
            } else if (!topic) {
              // If null then can match any
            } else {
              // If a value is specified then it must match
              if (!equalsBytes(topic, l.log[1][i])) return false
            }
            return true
          }
        })
      }
      returnedLogs.push(...logs)
      returnedLogsSize += utf8ToBytes(JSON.stringify(logs)).byteLength
      if (
        returnedLogs.length >= this.GET_LOGS_LIMIT ||
        returnedLogsSize >= this.GET_LOGS_LIMIT_MEGABYTES * 1048576
      ) {
        break
      }
    }
    return returnedLogs
  }

  /**
   * RLP encodes or decodes the specified data type for storage or retrieval from the metaDB
   * @param conversion {@link RlpConvert.Encode} or {@link RlpConvert.Decode}
   * @param type one of {@link RlpType}
   * @param value the value to encode or decode
   */
  private rlp(conversion: typeof RlpConvert.Encode, type: RlpType, value: rlpOut): Uint8Array
  private rlp(
    conversion: typeof RlpConvert.Decode,
    type: typeof RlpType.Receipts,
    values: Uint8Array,
  ): TxReceipt[]
  private rlp(
    conversion: typeof RlpConvert.Decode,
    type: typeof RlpType.Logs,
    value: rlpLog[],
  ): Log[]
  private rlp(
    conversion: RlpConvert,
    type: RlpType,
    value: Uint8Array | rlpOut,
  ): Uint8Array | rlpOut {
    switch (type) {
      case RlpType.Receipts:
        if (conversion === RlpConvert.Encode) {
          value = value as TxReceipt[]
          return RLP.encode(
            value.map((r) => [
              (r as PreByzantiumTxReceipt).stateRoot ??
                intToBytes((r as PostByzantiumTxReceipt).status),
              bigIntToBytes(r.cumulativeBlockGasUsed),
              this.rlp(RlpConvert.Encode, RlpType.Logs, r.logs),
            ]),
          )
        } else {
          const decoded = RLP.decode(value as Uint8Array) as unknown as rlpReceipt[]
          return decoded.map((r) => {
            const gasUsed = r[1]
            const logs = this.rlp(RlpConvert.Decode, RlpType.Logs, r[2])
            if (r[0].length === 32) {
              // Pre-Byzantium Receipt
              return {
                stateRoot: r[0],
                cumulativeBlockGasUsed: bytesToBigInt(gasUsed),
                logs,
              } as PreByzantiumTxReceipt
            } else {
              // Post-Byzantium Receipt
              return {
                status: bytesToInt(r[0]),
                cumulativeBlockGasUsed: bytesToBigInt(gasUsed),
                logs,
              } as PostByzantiumTxReceipt
            }
          })
        }
      case RlpType.Logs:
        if (conversion === RlpConvert.Encode) {
          return RLP.encode(value as Log[])
        } else {
          return RLP.decode(value as Uint8Array) as Log[]
        }
      default:
        throw EthereumJSErrorWithoutCode('Unknown rlp conversion')
    }
  }

  /**
   * Returns the logs bloom for a receipt's logs
   * @param logs
   */
  private logsBloom(logs: rlpLog[]) {
    const bloom = new Bloom()
    for (let i = 0; i < logs.length; i++) {
      const log = logs[i]
      // add the address
      bloom.add(log[0])
      // add the topics
      const topics = log[1]
      for (let q = 0; q < topics.length; q++) {
        bloom.add(topics[q])
      }
    }
    return bloom
  }
}
