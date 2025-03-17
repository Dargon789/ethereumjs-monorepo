[**@ethereumjs/tx**](../README.md)

***

[@ethereumjs/tx](../README.md) / BlobEIP4844TxData

# Interface: BlobEIP4844TxData

<<<<<<< HEAD
Defined in: [types.ts:400](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L400)
=======
Defined in: [types.ts:396](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L396)
>>>>>>> b7777441e (ethereumjs-monoepo)

[Blob4844Tx](../classes/Blob4844Tx.md) data.

## Extends

- [`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md)

## Properties

### accessList?

> `optional` **accessList**: `null` \| [`AccessListBytes`](../type-aliases/AccessListBytes.md) \| [`AccessList`](../type-aliases/AccessList.md)

<<<<<<< HEAD
Defined in: [types.ts:375](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L375)
=======
Defined in: [types.ts:371](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L371)
>>>>>>> b7777441e (ethereumjs-monoepo)

The access list which contains the addresses/storage slots which the transaction wishes to access

#### Inherited from

[`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md).[`accessList`](FeeMarketEIP1559TxData.md#accesslist)

***

### blobs?

> `optional` **blobs**: `BytesLike`[]

<<<<<<< HEAD
Defined in: [types.ts:412](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L412)
=======
Defined in: [types.ts:408](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L408)
>>>>>>> b7777441e (ethereumjs-monoepo)

The blobs associated with a transaction

***

### blobsData?

> `optional` **blobsData**: `string`[]

<<<<<<< HEAD
Defined in: [types.ts:424](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L424)
=======
Defined in: [types.ts:420](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L420)
>>>>>>> b7777441e (ethereumjs-monoepo)

An array of arbitrary strings that blobs are to be constructed from

***

### blobVersionedHashes?

> `optional` **blobVersionedHashes**: `BytesLike`[]

<<<<<<< HEAD
Defined in: [types.ts:404](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L404)
=======
Defined in: [types.ts:400](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L400)
>>>>>>> b7777441e (ethereumjs-monoepo)

The versioned hashes used to validate the blobs attached to a transaction

***

### chainId?

> `optional` **chainId**: `BigIntLike`

<<<<<<< HEAD
Defined in: [types.ts:370](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L370)
=======
Defined in: [types.ts:366](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L366)
>>>>>>> b7777441e (ethereumjs-monoepo)

The transaction's chain ID

#### Inherited from

[`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md).[`chainId`](FeeMarketEIP1559TxData.md#chainid)

***

### data?

> `optional` **data**: `""` \| `BytesLike`

<<<<<<< HEAD
Defined in: [types.ts:339](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L339)
=======
Defined in: [types.ts:335](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L335)
>>>>>>> b7777441e (ethereumjs-monoepo)

This will contain the data of the message or the init of a contract.

#### Inherited from

[`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md).[`data`](FeeMarketEIP1559TxData.md#data)

***

### gasLimit?

> `optional` **gasLimit**: `BigIntLike`

<<<<<<< HEAD
Defined in: [types.ts:324](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L324)
=======
Defined in: [types.ts:320](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L320)
>>>>>>> b7777441e (ethereumjs-monoepo)

The transaction's gas limit.

#### Inherited from

[`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md).[`gasLimit`](FeeMarketEIP1559TxData.md#gaslimit)

***

### gasPrice?

> `optional` **gasPrice**: `null`

<<<<<<< HEAD
Defined in: [types.ts:386](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L386)
=======
Defined in: [types.ts:382](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L382)
>>>>>>> b7777441e (ethereumjs-monoepo)

The transaction's gas price, inherited from [Transaction](Transaction.md).  This property is not used for EIP1559
transactions and should always be undefined for this specific transaction type.

#### Inherited from

[`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md).[`gasPrice`](FeeMarketEIP1559TxData.md#gasprice)

***

### kzgCommitments?

> `optional` **kzgCommitments**: `BytesLike`[]

<<<<<<< HEAD
Defined in: [types.ts:416](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L416)
=======
Defined in: [types.ts:412](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L412)
>>>>>>> b7777441e (ethereumjs-monoepo)

The KZG commitments corresponding to the versioned hashes for each blob

***

### kzgProofs?

> `optional` **kzgProofs**: `BytesLike`[]

<<<<<<< HEAD
Defined in: [types.ts:420](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L420)
=======
Defined in: [types.ts:416](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L416)
>>>>>>> b7777441e (ethereumjs-monoepo)

The KZG proofs associated with the transaction

***

### maxFeePerBlobGas?

> `optional` **maxFeePerBlobGas**: `BigIntLike`

<<<<<<< HEAD
Defined in: [types.ts:408](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L408)
=======
Defined in: [types.ts:404](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L404)
>>>>>>> b7777441e (ethereumjs-monoepo)

The maximum fee per blob gas paid for the transaction

***

### maxFeePerGas?

> `optional` **maxFeePerGas**: `BigIntLike`

<<<<<<< HEAD
Defined in: [types.ts:394](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L394)
=======
Defined in: [types.ts:390](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L390)
>>>>>>> b7777441e (ethereumjs-monoepo)

The maximum total fee

#### Inherited from

[`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md).[`maxFeePerGas`](FeeMarketEIP1559TxData.md#maxfeepergas)

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: `BigIntLike`

<<<<<<< HEAD
Defined in: [types.ts:390](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L390)
=======
Defined in: [types.ts:386](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L386)
>>>>>>> b7777441e (ethereumjs-monoepo)

The maximum inclusion fee per gas (this fee is given to the miner)

#### Inherited from

[`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md).[`maxPriorityFeePerGas`](FeeMarketEIP1559TxData.md#maxpriorityfeepergas)

***

### nonce?

> `optional` **nonce**: `BigIntLike`

<<<<<<< HEAD
Defined in: [types.ts:314](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L314)
=======
Defined in: [types.ts:310](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L310)
>>>>>>> b7777441e (ethereumjs-monoepo)

The transaction's nonce.

#### Inherited from

[`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md).[`nonce`](FeeMarketEIP1559TxData.md#nonce)

***

### r?

> `optional` **r**: `BigIntLike`

<<<<<<< HEAD
Defined in: [types.ts:349](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L349)
=======
Defined in: [types.ts:345](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L345)
>>>>>>> b7777441e (ethereumjs-monoepo)

EC signature parameter.

#### Inherited from

[`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md).[`r`](FeeMarketEIP1559TxData.md#r)

***

### s?

> `optional` **s**: `BigIntLike`

<<<<<<< HEAD
Defined in: [types.ts:354](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L354)
=======
Defined in: [types.ts:350](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L350)
>>>>>>> b7777441e (ethereumjs-monoepo)

EC signature parameter.

#### Inherited from

[`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md).[`s`](FeeMarketEIP1559TxData.md#s)

***

### to?

> `optional` **to**: `""` \| `AddressLike`

<<<<<<< HEAD
Defined in: [types.ts:329](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L329)
=======
Defined in: [types.ts:325](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L325)
>>>>>>> b7777441e (ethereumjs-monoepo)

The transaction's the address is sent to.

#### Inherited from

[`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md).[`to`](FeeMarketEIP1559TxData.md#to)

***

### type?

> `optional` **type**: `BigIntLike`

<<<<<<< HEAD
Defined in: [types.ts:360](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L360)
=======
Defined in: [types.ts:356](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L356)
>>>>>>> b7777441e (ethereumjs-monoepo)

The transaction type

#### Inherited from

[`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md).[`type`](FeeMarketEIP1559TxData.md#type)

***

### v?

> `optional` **v**: `BigIntLike`

<<<<<<< HEAD
Defined in: [types.ts:344](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L344)
=======
Defined in: [types.ts:340](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L340)
>>>>>>> b7777441e (ethereumjs-monoepo)

EC recovery ID.

#### Inherited from

[`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md).[`v`](FeeMarketEIP1559TxData.md#v)

***

### value?

> `optional` **value**: `BigIntLike`

<<<<<<< HEAD
Defined in: [types.ts:334](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L334)
=======
Defined in: [types.ts:330](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L330)
>>>>>>> b7777441e (ethereumjs-monoepo)

The amount of Ether sent.

#### Inherited from

[`FeeMarketEIP1559TxData`](FeeMarketEIP1559TxData.md).[`value`](FeeMarketEIP1559TxData.md#value)
