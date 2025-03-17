[**@ethereumjs/common**](../README.md)

***

[@ethereumjs/common](../README.md) / StateManagerInterface

# Interface: StateManagerInterface

<<<<<<< HEAD
Defined in: [interfaces.ts:177](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L177)
=======
Defined in: [interfaces.ts:124](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L124)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Properties

### originalStorageCache

> **originalStorageCache**: `object`

<<<<<<< HEAD
Defined in: [interfaces.ts:224](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L224)

#### clear()

> **clear**(): `void`

=======
Defined in: [interfaces.ts:171](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L171)

#### clear()

>>>>>>> b7777441e (ethereumjs-monoepo)
##### Returns

`void`

#### get()

<<<<<<< HEAD
> **get**(`address`, `key`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

=======
>>>>>>> b7777441e (ethereumjs-monoepo)
##### Parameters

###### address

`Address`

###### key

`Uint8Array`

##### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

## Methods

### checkChunkWitnessPresent()?

> `optional` **checkChunkWitnessPresent**(`contract`, `programCounter`): `Promise`\<`boolean`\>

<<<<<<< HEAD
Defined in: [interfaces.ts:239](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L239)
=======
Defined in: [interfaces.ts:181](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L181)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### contract

`Address`

##### programCounter

`number`

#### Returns

`Promise`\<`boolean`\>

***

### checkpoint()

> **checkpoint**(): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [interfaces.ts:200](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L200)
=======
Defined in: [interfaces.ts:147](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L147)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Promise`\<`void`\>

***

### clearCaches()

> **clearCaches**(): `void`

<<<<<<< HEAD
Defined in: [interfaces.ts:245](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L245)
=======
Defined in: [interfaces.ts:187](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L187)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`void`

***

### clearStorage()

> **clearStorage**(`address`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [interfaces.ts:195](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L195)
=======
Defined in: [interfaces.ts:142](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L142)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

#### Returns

`Promise`\<`void`\>

***

### commit()

> **commit**(): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [interfaces.ts:201](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L201)
=======
Defined in: [interfaces.ts:148](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L148)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Promise`\<`void`\>

***

### deleteAccount()

> **deleteAccount**(`address`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [interfaces.ts:184](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L184)
=======
Defined in: [interfaces.ts:131](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L131)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

#### Returns

`Promise`\<`void`\>

***

### dumpStorage()?

> `optional` **dumpStorage**(`address`): `Promise`\<[`StorageDump`](StorageDump.md)\>

<<<<<<< HEAD
Defined in: [interfaces.ts:218](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L218)
=======
Defined in: [interfaces.ts:165](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L165)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

#### Returns

`Promise`\<[`StorageDump`](StorageDump.md)\>

***

### dumpStorageRange()?

> `optional` **dumpStorageRange**(`address`, `startKey`, `limit`): `Promise`\<[`StorageRange`](StorageRange.md)\>

<<<<<<< HEAD
Defined in: [interfaces.ts:219](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L219)
=======
Defined in: [interfaces.ts:166](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L166)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

##### startKey

`bigint`

##### limit

`number`

#### Returns

`Promise`\<[`StorageRange`](StorageRange.md)\>

***

### generateCanonicalGenesis()?

> `optional` **generateCanonicalGenesis**(`initState`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [interfaces.ts:228](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L228)
=======
Defined in: [interfaces.ts:175](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L175)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### initState

`any`

#### Returns

`Promise`\<`void`\>

***

### getAccount()

> **getAccount**(`address`): `Promise`\<`undefined` \| `Account`\>

<<<<<<< HEAD
Defined in: [interfaces.ts:182](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L182)
=======
Defined in: [interfaces.ts:129](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L129)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

#### Returns

`Promise`\<`undefined` \| `Account`\>

***

### getAppliedKey()?

> `optional` **getAppliedKey**(`address`): `Uint8Array`

<<<<<<< HEAD
Defined in: [interfaces.ts:240](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L240)
=======
Defined in: [interfaces.ts:182](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L182)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Uint8Array`

#### Returns

`Uint8Array`

***

### getCode()

> **getCode**(`address`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

<<<<<<< HEAD
Defined in: [interfaces.ts:189](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L189)
=======
Defined in: [interfaces.ts:136](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L136)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### getCodeSize()

> **getCodeSize**(`address`): `Promise`\<`number`\>

<<<<<<< HEAD
Defined in: [interfaces.ts:190](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L190)
=======
Defined in: [interfaces.ts:137](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L137)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

#### Returns

`Promise`\<`number`\>

***

### getStateRoot()

> **getStateRoot**(): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

<<<<<<< HEAD
Defined in: [interfaces.ts:207](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L207)
=======
Defined in: [interfaces.ts:154](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L154)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### getStorage()

> **getStorage**(`address`, `key`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

<<<<<<< HEAD
Defined in: [interfaces.ts:193](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L193)
=======
Defined in: [interfaces.ts:140](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L140)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

##### key

`Uint8Array`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### hasStateRoot()

> **hasStateRoot**(`root`): `Promise`\<`boolean`\>

<<<<<<< HEAD
Defined in: [interfaces.ts:209](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L209)
=======
Defined in: [interfaces.ts:156](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L156)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### root

`Uint8Array`

#### Returns

`Promise`\<`boolean`\>

***

<<<<<<< HEAD
### initBinaryTreeExecutionWitness()?

> `optional` **initBinaryTreeExecutionWitness**(`blockNum`, `executionWitness?`): `void`

Defined in: [interfaces.ts:234](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L234)
=======
### initVerkleExecutionWitness()?

> `optional` **initVerkleExecutionWitness**(`blockNum`, `executionWitness`?): `void`

Defined in: [interfaces.ts:176](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L176)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### blockNum

`bigint`

##### executionWitness?

<<<<<<< HEAD
`null` | `BinaryTreeExecutionWitness`
=======
`null` | `VerkleExecutionWitness`
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`void`

***

<<<<<<< HEAD
### initVerkleExecutionWitness()?

> `optional` **initVerkleExecutionWitness**(`blockNum`, `executionWitness?`): `void`

Defined in: [interfaces.ts:229](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L229)

#### Parameters

##### blockNum

`bigint`

##### executionWitness?

`null` | `VerkleExecutionWitness`

#### Returns

`void`

***

### modifyAccountFields()

> **modifyAccountFields**(`address`, `accountFields`): `Promise`\<`void`\>

Defined in: [interfaces.ts:185](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L185)
=======
### modifyAccountFields()

> **modifyAccountFields**(`address`, `accountFields`): `Promise`\<`void`\>

Defined in: [interfaces.ts:132](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L132)

#### Parameters

##### address

`Address`

##### accountFields

`Partial`

#### Returns

`Promise`\<`void`\>

***

### putAccount()

> **putAccount**(`address`, `account`?): `Promise`\<`void`\>

Defined in: [interfaces.ts:130](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L130)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

<<<<<<< HEAD
##### accountFields

`Partial`
=======
##### account?

`Account`
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Promise`\<`void`\>

***

<<<<<<< HEAD
### putAccount()

> **putAccount**(`address`, `account?`): `Promise`\<`void`\>

Defined in: [interfaces.ts:183](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L183)
=======
### putCode()

> **putCode**(`address`, `value`): `Promise`\<`void`\>

Defined in: [interfaces.ts:135](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L135)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

<<<<<<< HEAD
##### account?

`Account`
=======
##### value

`Uint8Array`
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Promise`\<`void`\>

***

<<<<<<< HEAD
### putCode()

> **putCode**(`address`, `value`): `Promise`\<`void`\>

Defined in: [interfaces.ts:188](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L188)
=======
### putStorage()

> **putStorage**(`address`, `key`, `value`): `Promise`\<`void`\>

Defined in: [interfaces.ts:141](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L141)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

<<<<<<< HEAD
=======
##### key

`Uint8Array`

>>>>>>> b7777441e (ethereumjs-monoepo)
##### value

`Uint8Array`

#### Returns

`Promise`\<`void`\>

***

<<<<<<< HEAD
### putStorage()

> **putStorage**(`address`, `key`, `value`): `Promise`\<`void`\>

Defined in: [interfaces.ts:194](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L194)

#### Parameters

##### address

`Address`

##### key

`Uint8Array`

##### value

`Uint8Array`
=======
### revert()

> **revert**(): `Promise`\<`void`\>

Defined in: [interfaces.ts:149](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L149)

#### Returns

`Promise`\<`void`\>

***

### setStateRoot()

> **setStateRoot**(`stateRoot`, `clearCache`?): `Promise`\<`void`\>

Defined in: [interfaces.ts:155](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L155)

#### Parameters

##### stateRoot

`Uint8Array`

##### clearCache?

`boolean`
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Promise`\<`void`\>

***

<<<<<<< HEAD
### revert()

> **revert**(): `Promise`\<`void`\>

Defined in: [interfaces.ts:202](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L202)

#### Returns

`Promise`\<`void`\>

***

### setStateRoot()

> **setStateRoot**(`stateRoot`, `clearCache?`): `Promise`\<`void`\>

Defined in: [interfaces.ts:208](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L208)

#### Parameters

##### stateRoot

`Uint8Array`

##### clearCache?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### shallowCopy()

> **shallowCopy**(`downlevelCaches?`): `StateManagerInterface`

Defined in: [interfaces.ts:246](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L246)
=======
### shallowCopy()

> **shallowCopy**(`downlevelCaches`?): `StateManagerInterface`

Defined in: [interfaces.ts:188](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L188)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### downlevelCaches?

`boolean`

#### Returns

`StateManagerInterface`

***

<<<<<<< HEAD
### verifyBinaryTreePostState()?

> `optional` **verifyBinaryTreePostState**(`accessWitness`): `Promise`\<`boolean`\>

Defined in: [interfaces.ts:238](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L238)

#### Parameters

##### accessWitness

[`BinaryTreeAccessWitnessInterface`](BinaryTreeAccessWitnessInterface.md)

#### Returns

`Promise`\<`boolean`\>

***

### verifyVerklePostState()?

> `optional` **verifyVerklePostState**(`accessWitness`): `Promise`\<`boolean`\>

Defined in: [interfaces.ts:233](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L233)
=======
### verifyPostState()?

> `optional` **verifyPostState**(`accessWitness`): `Promise`\<`boolean`\>

Defined in: [interfaces.ts:180](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L180)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### accessWitness

[`VerkleAccessWitnessInterface`](VerkleAccessWitnessInterface.md)

#### Returns

`Promise`\<`boolean`\>
