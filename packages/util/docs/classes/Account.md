[**@ethereumjs/util**](../README.md)

***

[@ethereumjs/util](../README.md) / Account

# Class: Account

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:81](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L81)
=======
Defined in: [packages/util/src/account.ts:51](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L51)
>>>>>>> b7777441e (ethereumjs-monoepo)

Account class to load and maintain the  basic account objects.
Supports partial loading and access required for verkle with null
as the placeholder.

Note: passing undefined in constructor is different from null
While undefined leads to default assignment, null is retained
to track the information not available/loaded because of partial
witness access

## Constructors

<<<<<<< HEAD
### Constructor

> **new Account**(`nonce`, `balance`, `storageRoot`, `codeHash`, `codeSize`, `version`): `Account`

Defined in: [packages/util/src/account.ts:163](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L163)

This constructor assigns and validates the values.
It is not recommended to use this constructor directly. Instead use the static
factory methods to assist in creating an Account from varying data types.
undefined get assigned with the defaults, but null args are retained as is
=======
### new Account()

> **new Account**(`nonce`, `balance`, `storageRoot`, `codeHash`, `codeSize`, `version`): `Account`

Defined in: [packages/util/src/account.ts:131](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L131)

This constructor assigns and validates the values.
Use the static factory methods to assist in creating an Account from varying data types.
undefined get assigned with the defaults present, but null args are retained as is
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### nonce

`null` | `bigint`

##### balance

`null` | `bigint`

##### storageRoot

`null` | `Uint8Array`\<`ArrayBufferLike`\>

##### codeHash

`null` | `Uint8Array`\<`ArrayBufferLike`\>

##### codeSize

`null` | `number`

##### version

`null` | `number`

#### Returns

`Account`
<<<<<<< HEAD

#### Deprecated
=======
>>>>>>> b7777441e (ethereumjs-monoepo)

## Properties

### \_balance

> **\_balance**: `null` \| `bigint` = `null`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:83](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L83)
=======
Defined in: [packages/util/src/account.ts:53](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L53)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### \_codeHash

> **\_codeHash**: `null` \| `Uint8Array`\<`ArrayBufferLike`\> = `null`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:85](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L85)
=======
Defined in: [packages/util/src/account.ts:55](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L55)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### \_codeSize

> **\_codeSize**: `null` \| `number` = `null`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:87](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L87)
=======
Defined in: [packages/util/src/account.ts:57](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L57)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### \_nonce

> **\_nonce**: `null` \| `bigint` = `null`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:82](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L82)
=======
Defined in: [packages/util/src/account.ts:52](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L52)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### \_storageRoot

> **\_storageRoot**: `null` \| `Uint8Array`\<`ArrayBufferLike`\> = `null`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:84](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L84)
=======
Defined in: [packages/util/src/account.ts:54](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L54)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### \_version

> **\_version**: `null` \| `number` = `null`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:88](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L88)
=======
Defined in: [packages/util/src/account.ts:58](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L58)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Accessors

### balance

#### Get Signature

> **get** **balance**(): `bigint`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:112](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L112)
=======
Defined in: [packages/util/src/account.ts:82](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L82)
>>>>>>> b7777441e (ethereumjs-monoepo)

##### Returns

`bigint`

#### Set Signature

> **set** **balance**(`_balance`): `void`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:119](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L119)
=======
Defined in: [packages/util/src/account.ts:89](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L89)
>>>>>>> b7777441e (ethereumjs-monoepo)

##### Parameters

###### \_balance

`bigint`

##### Returns

`void`

***

### codeHash

#### Get Signature

> **get** **codeHash**(): `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:134](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L134)
=======
Defined in: [packages/util/src/account.ts:104](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L104)
>>>>>>> b7777441e (ethereumjs-monoepo)

##### Returns

`Uint8Array`\<`ArrayBufferLike`\>

#### Set Signature

> **set** **codeHash**(`_codeHash`): `void`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:141](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L141)
=======
Defined in: [packages/util/src/account.ts:111](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L111)
>>>>>>> b7777441e (ethereumjs-monoepo)

##### Parameters

###### \_codeHash

`Uint8Array`

##### Returns

`void`

***

### codeSize

#### Get Signature

> **get** **codeSize**(): `number`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:145](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L145)
=======
Defined in: [packages/util/src/account.ts:115](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L115)
>>>>>>> b7777441e (ethereumjs-monoepo)

##### Returns

`number`

#### Set Signature

> **set** **codeSize**(`_codeSize`): `void`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:152](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L152)
=======
Defined in: [packages/util/src/account.ts:122](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L122)
>>>>>>> b7777441e (ethereumjs-monoepo)

##### Parameters

###### \_codeSize

`number`

##### Returns

`void`

***

### nonce

#### Get Signature

> **get** **nonce**(): `bigint`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:101](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L101)
=======
Defined in: [packages/util/src/account.ts:71](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L71)
>>>>>>> b7777441e (ethereumjs-monoepo)

##### Returns

`bigint`

#### Set Signature

> **set** **nonce**(`_nonce`): `void`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:108](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L108)
=======
Defined in: [packages/util/src/account.ts:78](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L78)
>>>>>>> b7777441e (ethereumjs-monoepo)

##### Parameters

###### \_nonce

`bigint`

##### Returns

`void`

***

### storageRoot

#### Get Signature

> **get** **storageRoot**(): `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:123](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L123)
=======
Defined in: [packages/util/src/account.ts:93](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L93)
>>>>>>> b7777441e (ethereumjs-monoepo)

##### Returns

`Uint8Array`\<`ArrayBufferLike`\>

#### Set Signature

> **set** **storageRoot**(`_storageRoot`): `void`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:130](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L130)
=======
Defined in: [packages/util/src/account.ts:100](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L100)
>>>>>>> b7777441e (ethereumjs-monoepo)

##### Parameters

###### \_storageRoot

`Uint8Array`

##### Returns

`void`

***

### version

#### Get Signature

> **get** **version**(): `number`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:90](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L90)
=======
Defined in: [packages/util/src/account.ts:60](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L60)
>>>>>>> b7777441e (ethereumjs-monoepo)

##### Returns

`number`

#### Set Signature

> **set** **version**(`_version`): `void`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:97](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L97)
=======
Defined in: [packages/util/src/account.ts:67](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L67)
>>>>>>> b7777441e (ethereumjs-monoepo)

##### Parameters

###### \_version

`number`

##### Returns

`void`

## Methods

### isContract()

> **isContract**(): `boolean`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:269](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L269)
=======
Defined in: [packages/util/src/account.ts:237](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L237)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns a `Boolean` determining if the account is a contract.

#### Returns

`boolean`

***

### isEmpty()

> **isEmpty**(): `boolean`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:284](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L284)
=======
Defined in: [packages/util/src/account.ts:252](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L252)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns a `Boolean` determining if the account is empty complying to the definition of
account emptiness in [EIP-161](https://eips.ethereum.org/EIPS/eip-161):
"An account is considered empty when it has no code and zero nonce and zero balance."

#### Returns

`boolean`

***

### raw()

> **raw**(): `Uint8Array`\<`ArrayBufferLike`\>[]

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:206](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L206)
=======
Defined in: [packages/util/src/account.ts:174](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L174)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns an array of Uint8Arrays of the raw bytes for the account, in order.

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>[]

***

### serialize()

> **serialize**(): `Uint8Array`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:218](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L218)
=======
Defined in: [packages/util/src/account.ts:186](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L186)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the RLP serialization of the account as a `Uint8Array`.

#### Returns

`Uint8Array`

***

### serializeWithPartialInfo()

> **serializeWithPartialInfo**(): `Uint8Array`

<<<<<<< HEAD
Defined in: [packages/util/src/account.ts:222](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L222)
=======
Defined in: [packages/util/src/account.ts:190](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L190)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Uint8Array`
