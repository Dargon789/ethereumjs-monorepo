[**@ethereumjs/util**](../README.md)

***

[@ethereumjs/util](../README.md) / Withdrawal

# Class: Withdrawal

<<<<<<< HEAD
Defined in: [packages/util/src/withdrawal.ts:59](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L59)
=======
Defined in: [packages/util/src/withdrawal.ts:59](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L59)
>>>>>>> b7777441e (ethereumjs-monoepo)

Representation of EIP-4895 withdrawal data

## Constructors

<<<<<<< HEAD
### Constructor

> **new Withdrawal**(`index`, `validatorIndex`, `address`, `amount`): `Withdrawal`

Defined in: [packages/util/src/withdrawal.ts:70](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L70)
=======
### new Withdrawal()

> **new Withdrawal**(`index`, `validatorIndex`, `address`, `amount`): `Withdrawal`

Defined in: [packages/util/src/withdrawal.ts:65](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L65)
>>>>>>> b7777441e (ethereumjs-monoepo)

This constructor assigns and validates the values.
Use the static factory methods to assist in creating a Withdrawal object from varying data types.
Its amount is in Gwei to match CL representation and for eventual ssz withdrawalsRoot

#### Parameters

##### index

`bigint`

##### validatorIndex

`bigint`

##### address

[`Address`](Address.md)

##### amount

`bigint`

<<<<<<< HEAD
=======
withdrawal amount in Gwei to match the CL representation and eventually ssz withdrawalsRoot

>>>>>>> b7777441e (ethereumjs-monoepo)
#### Returns

`Withdrawal`

## Properties

### address

> `readonly` **address**: [`Address`](Address.md)

<<<<<<< HEAD
Defined in: [packages/util/src/withdrawal.ts:62](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L62)
=======
Defined in: [packages/util/src/withdrawal.ts:68](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L68)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### amount

> `readonly` **amount**: `bigint`

<<<<<<< HEAD
Defined in: [packages/util/src/withdrawal.ts:63](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L63)

=======
Defined in: [packages/util/src/withdrawal.ts:72](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L72)

withdrawal amount in Gwei to match the CL representation and eventually ssz withdrawalsRoot

>>>>>>> b7777441e (ethereumjs-monoepo)
***

### index

> `readonly` **index**: `bigint`

<<<<<<< HEAD
Defined in: [packages/util/src/withdrawal.ts:60](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L60)
=======
Defined in: [packages/util/src/withdrawal.ts:66](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L66)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### validatorIndex

> `readonly` **validatorIndex**: `bigint`

<<<<<<< HEAD
Defined in: [packages/util/src/withdrawal.ts:61](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L61)
=======
Defined in: [packages/util/src/withdrawal.ts:67](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L67)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Methods

### raw()

> **raw**(): [`WithdrawalBytes`](../type-aliases/WithdrawalBytes.md)

<<<<<<< HEAD
Defined in: [packages/util/src/withdrawal.ts:77](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L77)
=======
Defined in: [packages/util/src/withdrawal.ts:75](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L75)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

[`WithdrawalBytes`](../type-aliases/WithdrawalBytes.md)

***

### toJSON()

> **toJSON**(): `object`

<<<<<<< HEAD
Defined in: [packages/util/src/withdrawal.ts:90](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L90)
=======
Defined in: [packages/util/src/withdrawal.ts:88](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L88)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`object`

##### address

> **address**: `` `0x${string}` ``

##### amount

> **amount**: `` `0x${string}` ``

##### index

> **index**: `` `0x${string}` ``

##### validatorIndex

> **validatorIndex**: `` `0x${string}` ``

***

### toValue()

> **toValue**(): `object`

<<<<<<< HEAD
Defined in: [packages/util/src/withdrawal.ts:81](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L81)
=======
Defined in: [packages/util/src/withdrawal.ts:79](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L79)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`object`

##### address

> **address**: `Uint8Array`\<`ArrayBufferLike`\>

##### amount

> **amount**: `bigint`

##### index

> **index**: `bigint`

##### validatorIndex

> **validatorIndex**: `bigint`
