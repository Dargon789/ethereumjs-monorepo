[**@ethereumjs/tx**](../README.md)

***

[@ethereumjs/tx](../README.md) / FeeMarketEIP1559TxData

# Interface: FeeMarketEIP1559TxData

<<<<<<< HEAD
Defined in: [types.ts:381](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L381)
=======
Defined in: [types.ts:377](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L377)
>>>>>>> b7777441e (ethereumjs-monoepo)

[FeeMarket1559Tx](../classes/FeeMarket1559Tx.md) data.

## Extends

- [`AccessList2930TxData`](AccessList2930TxData.md)

## Extended by

- [`BlobEIP4844TxData`](BlobEIP4844TxData.md)
- [`EOACode7702TxData`](EOACode7702TxData.md)

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

[`AccessList2930TxData`](AccessList2930TxData.md).[`accessList`](AccessList2930TxData.md#accesslist)

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

[`AccessList2930TxData`](AccessList2930TxData.md).[`chainId`](AccessList2930TxData.md#chainid)

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

[`AccessList2930TxData`](AccessList2930TxData.md).[`data`](AccessList2930TxData.md#data)

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

[`AccessList2930TxData`](AccessList2930TxData.md).[`gasLimit`](AccessList2930TxData.md#gaslimit)

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

#### Overrides

[`AccessList2930TxData`](AccessList2930TxData.md).[`gasPrice`](AccessList2930TxData.md#gasprice)

***

### maxFeePerGas?

> `optional` **maxFeePerGas**: `BigIntLike`

<<<<<<< HEAD
Defined in: [types.ts:394](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L394)
=======
Defined in: [types.ts:390](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L390)
>>>>>>> b7777441e (ethereumjs-monoepo)

The maximum total fee

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: `BigIntLike`

<<<<<<< HEAD
Defined in: [types.ts:390](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L390)
=======
Defined in: [types.ts:386](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L386)
>>>>>>> b7777441e (ethereumjs-monoepo)

The maximum inclusion fee per gas (this fee is given to the miner)

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

[`AccessList2930TxData`](AccessList2930TxData.md).[`nonce`](AccessList2930TxData.md#nonce)

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

[`AccessList2930TxData`](AccessList2930TxData.md).[`r`](AccessList2930TxData.md#r)

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

[`AccessList2930TxData`](AccessList2930TxData.md).[`s`](AccessList2930TxData.md#s)

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

[`AccessList2930TxData`](AccessList2930TxData.md).[`to`](AccessList2930TxData.md#to)

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

[`AccessList2930TxData`](AccessList2930TxData.md).[`type`](AccessList2930TxData.md#type)

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

[`AccessList2930TxData`](AccessList2930TxData.md).[`v`](AccessList2930TxData.md#v)

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

[`AccessList2930TxData`](AccessList2930TxData.md).[`value`](AccessList2930TxData.md#value)
