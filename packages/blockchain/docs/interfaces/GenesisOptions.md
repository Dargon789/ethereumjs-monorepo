[**@ethereumjs/blockchain**](../README.md)

***

[@ethereumjs/blockchain](../README.md) / GenesisOptions

# Interface: GenesisOptions

<<<<<<< HEAD
Defined in: [types.ts:94](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L94)
=======
Defined in: [types.ts:94](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L94)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Extended by

- [`BlockchainOptions`](BlockchainOptions.md)

## Properties

### genesisBlock?

> `optional` **genesisBlock**: `Block`

<<<<<<< HEAD
Defined in: [types.ts:102](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L102)
=======
Defined in: [types.ts:102](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L102)
>>>>>>> b7777441e (ethereumjs-monoepo)

The blockchain only initializes successfully if it has a genesis block. If
there is no block available in the DB and a `genesisBlock` is provided,
then the provided `genesisBlock` will be used as genesis. If no block is
present in the DB and no block is provided, then the genesis block as
provided from the `common` will be used.

***

### genesisState?

> `optional` **genesisState**: `GenesisState`

<<<<<<< HEAD
Defined in: [types.ts:128](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L128)
=======
Defined in: [types.ts:128](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L128)
>>>>>>> b7777441e (ethereumjs-monoepo)

If you are using a custom chain Common, pass the genesis state.

Pattern 1 (with genesis state see GenesisState for format):

```javascript
{
  '0x0...01': '0x100', // For EoA
}
```

Pattern 2 (with complex genesis state, containing contract accounts and storage).
Note that in AccountState there are two
accepted types. This allows to easily insert accounts in the genesis state:

A complex genesis state with Contract and EoA states would have the following format:

```javascript
{
  '0x0...01': '0x100', // For EoA
  '0x0...02': ['0x1', '0xRUNTIME_BYTECODE', [[storageKey1, storageValue1], [storageKey2, storageValue2]]] // For contracts
}
```

***

### genesisStateRoot?

> `optional` **genesisStateRoot**: `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [types.ts:133](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L133)
=======
Defined in: [types.ts:133](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L133)
>>>>>>> b7777441e (ethereumjs-monoepo)

State root of the genesis state
