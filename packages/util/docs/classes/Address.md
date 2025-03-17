[**@ethereumjs/util**](../README.md)

***

[@ethereumjs/util](../README.md) / Address

# Class: Address

<<<<<<< HEAD
Defined in: [packages/util/src/address.ts:24](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L24)
=======
Defined in: [packages/util/src/address.ts:23](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L23)
>>>>>>> b7777441e (ethereumjs-monoepo)

Handling and generating Ethereum addresses

## Constructors

<<<<<<< HEAD
### Constructor

> **new Address**(`bytes`): `Address`

Defined in: [packages/util/src/address.ts:27](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L27)
=======
### new Address()

> **new Address**(`bytes`): `Address`

Defined in: [packages/util/src/address.ts:26](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L26)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Address`

## Properties

### bytes

> `readonly` **bytes**: `Uint8Array`

<<<<<<< HEAD
Defined in: [packages/util/src/address.ts:25](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L25)
=======
Defined in: [packages/util/src/address.ts:24](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L24)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Methods

### equals()

> **equals**(`address`): `boolean`

<<<<<<< HEAD
Defined in: [packages/util/src/address.ts:37](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L37)
=======
Defined in: [packages/util/src/address.ts:36](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L36)
>>>>>>> b7777441e (ethereumjs-monoepo)

Is address equal to another.

#### Parameters

##### address

`Address`

#### Returns

`boolean`

***

### isPrecompileOrSystemAddress()

> **isPrecompileOrSystemAddress**(): `boolean`

<<<<<<< HEAD
Defined in: [packages/util/src/address.ts:52](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L52)
=======
Defined in: [packages/util/src/address.ts:51](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L51)
>>>>>>> b7777441e (ethereumjs-monoepo)

True if address is in the address range defined
by EIP-1352

#### Returns

`boolean`

***

### isZero()

> **isZero**(): `boolean`

<<<<<<< HEAD
Defined in: [packages/util/src/address.ts:44](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L44)
=======
Defined in: [packages/util/src/address.ts:43](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L43)
>>>>>>> b7777441e (ethereumjs-monoepo)

Is address zero.

#### Returns

`boolean`

***

### toBytes()

> **toBytes**(): `Uint8Array`

<<<<<<< HEAD
Defined in: [packages/util/src/address.ts:69](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L69)
=======
Defined in: [packages/util/src/address.ts:68](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L68)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns a new Uint8Array representation of address.

#### Returns

`Uint8Array`

***

### toString()

> **toString**(): `` `0x${string}` ``

<<<<<<< HEAD
Defined in: [packages/util/src/address.ts:62](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L62)
=======
Defined in: [packages/util/src/address.ts:61](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/address.ts#L61)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns hex encoding of address.

#### Returns

`` `0x${string}` ``
