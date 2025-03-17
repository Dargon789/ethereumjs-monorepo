[**@ethereumjs/statemanager**](../README.md)

***

[@ethereumjs/statemanager](../README.md) / StatelessVerkleStateManager

# Class: StatelessVerkleStateManager

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:69](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L69)
=======
Defined in: [statelessVerkleStateManager.ts:69](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L69)
>>>>>>> b7777441e (ethereumjs-monoepo)

Stateless Verkle StateManager implementation for the VM.

Experimental.

This State Manager enables stateless block execution by building a
temporary (1-block) state from the verkle block witness.
The Stateless Verkle State Manager then uses that populated state
to fetch data requested by the the VM.

## Implements

- `StateManagerInterface`

## Constructors

<<<<<<< HEAD
### Constructor

> **new StatelessVerkleStateManager**(`opts`): `StatelessVerkleStateManager`

Defined in: [statelessVerkleStateManager.ts:113](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L113)
=======
### new StatelessVerkleStateManager()

> **new StatelessVerkleStateManager**(`opts`): `StatelessVerkleStateManager`

Defined in: [statelessVerkleStateManager.ts:113](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L113)
>>>>>>> b7777441e (ethereumjs-monoepo)

Instantiate the StateManager interface.

#### Parameters

##### opts

[`StatelessVerkleStateManagerOpts`](../interfaces/StatelessVerkleStateManagerOpts.md)

#### Returns

`StatelessVerkleStateManager`

## Properties

### \_cachedStateRoot?

> `optional` **\_cachedStateRoot**: `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:70](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L70)
=======
Defined in: [statelessVerkleStateManager.ts:70](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L70)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### common

> `readonly` **common**: `Common`

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:80](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L80)
=======
Defined in: [statelessVerkleStateManager.ts:80](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L80)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### originalStorageCache

> **originalStorageCache**: [`OriginalStorageCache`](OriginalStorageCache.md)

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:72](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L72)
=======
Defined in: [statelessVerkleStateManager.ts:72](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L72)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Implementation of

`StateManagerInterface.originalStorageCache`

***

### verkleCrypto

> **verkleCrypto**: `VerkleCrypto`

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:74](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L74)
=======
Defined in: [statelessVerkleStateManager.ts:74](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L74)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Methods

### checkChunkWitnessPresent()

> **checkChunkWitnessPresent**(`address`, `codeOffset`): `Promise`\<`boolean`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:206](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L206)
=======
Defined in: [statelessVerkleStateManager.ts:206](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L206)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

##### codeOffset

`number`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

`StateManagerInterface.checkChunkWitnessPresent`

***

### checkpoint()

> **checkpoint**(): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:639](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L639)
=======
Defined in: [statelessVerkleStateManager.ts:637](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L637)
>>>>>>> b7777441e (ethereumjs-monoepo)

Checkpoints the current state of the StateManager instance.
State changes that follow can then be committed by calling
`commit` or `reverted` by calling rollback.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`StateManagerInterface.checkpoint`

***

### clearCaches()

> **clearCaches**(): `void`

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:698](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L698)
=======
Defined in: [statelessVerkleStateManager.ts:696](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L696)
>>>>>>> b7777441e (ethereumjs-monoepo)

Clears all underlying caches

#### Returns

`void`

#### Implementation of

`StateManagerInterface.clearCaches`

***

### clearStorage()

> **clearStorage**(`address`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:388](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L388)
=======
Defined in: [statelessVerkleStateManager.ts:387](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L387)
>>>>>>> b7777441e (ethereumjs-monoepo)

Clears all storage entries for the account corresponding to `address`.

#### Parameters

##### address

`Address`

Address to clear the storage of

#### Returns

`Promise`\<`void`\>

#### Implementation of

`StateManagerInterface.clearStorage`

***

### commit()

> **commit**(): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:648](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L648)
=======
Defined in: [statelessVerkleStateManager.ts:646](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L646)
>>>>>>> b7777441e (ethereumjs-monoepo)

Commits the current change-set to the instance since the
last call to checkpoint.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`StateManagerInterface.commit`

***

### deleteAccount()

> **deleteAccount**(`address`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:489](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L489)
=======
Defined in: [statelessVerkleStateManager.ts:488](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L488)
>>>>>>> b7777441e (ethereumjs-monoepo)

Deletes an account from state under the provided `address`.

#### Parameters

##### address

`Address`

Address of the account which should be deleted

#### Returns

`Promise`\<`void`\>

#### Implementation of

`StateManagerInterface.deleteAccount`

***

### flush()

> **flush**(): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:671](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L671)
=======
Defined in: [statelessVerkleStateManager.ts:669](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L669)
>>>>>>> b7777441e (ethereumjs-monoepo)

Writes all cache items to the trie

#### Returns

`Promise`\<`void`\>

***

### generateCanonicalGenesis()

> **generateCanonicalGenesis**(`_initState`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:706](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L706)
=======
Defined in: [statelessVerkleStateManager.ts:704](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L704)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### \_initState

`any`

#### Returns

`Promise`\<`void`\>

#### Implementation of

`StateManagerInterface.generateCanonicalGenesis`

***

### getAccount()

> **getAccount**(`address`): `Promise`\<`undefined` \| `Account`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:396](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L396)
=======
Defined in: [statelessVerkleStateManager.ts:395](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L395)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

#### Returns

`Promise`\<`undefined` \| `Account`\>

#### Implementation of

`StateManagerInterface.getAccount`

***

### getCode()

> **getCode**(`address`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:257](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L257)
=======
Defined in: [statelessVerkleStateManager.ts:257](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L257)
>>>>>>> b7777441e (ethereumjs-monoepo)

Gets the code corresponding to the provided `address`.

#### Parameters

##### address

`Address`

Address to get the `code` for

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

-  Resolves with the code corresponding to the provided address.
Returns an empty `Uint8Array` if the account has no associated code.

#### Implementation of

`StateManagerInterface.getCode`

***

### getCodeSize()

> **getCodeSize**(`address`): `Promise`\<`number`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:312](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L312)
=======
Defined in: [statelessVerkleStateManager.ts:312](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L312)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

#### Returns

`Promise`\<`number`\>

#### Implementation of

`StateManagerInterface.getCodeSize`

***

### getComputedValue()

> **getComputedValue**(`accessedState`): `null` \| `` `0x${string}` ``

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:581](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L581)
=======
Defined in: [statelessVerkleStateManager.ts:579](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L579)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### accessedState

`VerkleAccessedStateWithAddress`

#### Returns

`null` \| `` `0x${string}` ``

***

### getStateRoot()

> **getStateRoot**(): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:679](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L679)
=======
Defined in: [statelessVerkleStateManager.ts:677](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L677)
>>>>>>> b7777441e (ethereumjs-monoepo)

Gets the cache state root.
This is used to persist the stateRoot between blocks, so that blocks can retrieve the stateRoot of the parent block.
This is required to verify and prove verkle execution witnesses.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

- Returns the cached state root

#### Implementation of

`StateManagerInterface.getStateRoot`

***

### getStorage()

> **getStorage**(`address`, `key`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:342](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L342)
=======
Defined in: [statelessVerkleStateManager.ts:342](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L342)
>>>>>>> b7777441e (ethereumjs-monoepo)

Gets the storage value associated with the provided `address` and `key`. This method returns
the shortest representation of the stored value.

#### Parameters

##### address

`Address`

Address of the account to get the storage for

##### key

`Uint8Array`

Key in the account's storage to get the value for. Must be 32 bytes long.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

- The storage value for the account
corresponding to the provided address at the provided key.
If this does not exist an empty `Uint8Array` is returned.

#### Implementation of

`StateManagerInterface.getStorage`

***

### getTransitionStateRoot()

> **getTransitionStateRoot**(`_`, `__`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:138](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L138)
=======
Defined in: [statelessVerkleStateManager.ts:138](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L138)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### \_

[`MerkleStateManager`](MerkleStateManager.md)

##### \_\_

`Uint8Array`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### hasStateRoot()

> **hasStateRoot**(`_`): `Promise`\<`boolean`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:654](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L654)
=======
Defined in: [statelessVerkleStateManager.ts:652](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L652)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### \_

`Uint8Array`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

`StateManagerInterface.hasStateRoot`

***

### initVerkleExecutionWitness()

<<<<<<< HEAD
> **initVerkleExecutionWitness**(`blockNum`, `executionWitness?`): `void`

Defined in: [statelessVerkleStateManager.ts:142](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L142)
=======
> **initVerkleExecutionWitness**(`blockNum`, `executionWitness`?): `void`

Defined in: [statelessVerkleStateManager.ts:142](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L142)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### blockNum

`bigint`

##### executionWitness?

`null` | `VerkleExecutionWitness`

#### Returns

`void`

#### Implementation of

`StateManagerInterface.initVerkleExecutionWitness`

***

### modifyAccountFields()

> **modifyAccountFields**(`address`, `accountFields`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:497](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L497)
=======
Defined in: [statelessVerkleStateManager.ts:496](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L496)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

##### accountFields

`Partial`

#### Returns

`Promise`\<`void`\>

#### Implementation of

`StateManagerInterface.modifyAccountFields`

***

### putAccount()

> **putAccount**(`address`, `account`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:465](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L465)
=======
Defined in: [statelessVerkleStateManager.ts:464](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L464)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

##### account

`Account`

#### Returns

`Promise`\<`void`\>

#### Implementation of

`StateManagerInterface.putAccount`

***

### putCode()

> **putCode**(`address`, `value`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:233](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L233)
=======
Defined in: [statelessVerkleStateManager.ts:233](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L233)
>>>>>>> b7777441e (ethereumjs-monoepo)

Adds `value` to the state trie as code, and sets `codeHash` on the account
corresponding to `address` to reference this.

#### Parameters

##### address

`Address`

Address of the `account` to add the `code` for

##### value

`Uint8Array`

The value of the `code`

#### Returns

`Promise`\<`void`\>

#### Implementation of

`StateManagerInterface.putCode`

***

### putStorage()

> **putStorage**(`address`, `key`, `value`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:368](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L368)
=======
Defined in: [statelessVerkleStateManager.ts:367](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L367)
>>>>>>> b7777441e (ethereumjs-monoepo)

Adds value to the state for the `account`
corresponding to `address` at the provided `key`.

#### Parameters

##### address

`Address`

Address to set a storage value for

##### key

`Uint8Array`

Key to set the value at. Must be 32 bytes long.

##### value

`Uint8Array`

Value to set at `key` for account corresponding to `address`. Cannot be more than 32 bytes. Leading zeros are stripped. If it is a empty or filled with zeros, deletes the value.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`StateManagerInterface.putStorage`

***

### revert()

> **revert**(): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:662](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L662)
=======
Defined in: [statelessVerkleStateManager.ts:660](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L660)
>>>>>>> b7777441e (ethereumjs-monoepo)

Reverts the current change-set to the instance since the
last call to checkpoint.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`StateManagerInterface.revert`

***

### setStateRoot()

> **setStateRoot**(`stateRoot`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:691](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L691)
=======
Defined in: [statelessVerkleStateManager.ts:689](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L689)
>>>>>>> b7777441e (ethereumjs-monoepo)

Sets the cache state root.
This is used to persist the stateRoot between blocks, so that blocks can retrieve the stateRoot of the parent block.

#### Parameters

##### stateRoot

`Uint8Array`

The stateRoot to set

#### Returns

`Promise`\<`void`\>

#### Implementation of

`StateManagerInterface.setStateRoot`

***

### shallowCopy()

> **shallowCopy**(`downlevelCaches`): `StatelessVerkleStateManager`

<<<<<<< HEAD
Defined in: [statelessVerkleStateManager.ts:219](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L219)
=======
Defined in: [statelessVerkleStateManager.ts:219](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L219)
>>>>>>> b7777441e (ethereumjs-monoepo)

Copies the current instance of the `StateManager`
at the last fully committed point, i.e. as if all current
checkpoints were reverted.

#### Parameters

##### downlevelCaches

`boolean` = `true`

#### Returns

`StatelessVerkleStateManager`

#### Implementation of

`StateManagerInterface.shallowCopy`

***

<<<<<<< HEAD
### verifyVerklePostState()

> **verifyVerklePostState**(`accessWitness`): `Promise`\<`boolean`\>

Defined in: [statelessVerkleStateManager.ts:503](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L503)
=======
### verifyPostState()

> **verifyPostState**(`accessWitness`): `Promise`\<`boolean`\>

Defined in: [statelessVerkleStateManager.ts:501](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/statelessVerkleStateManager.ts#L501)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### accessWitness

`VerkleAccessWitnessInterface`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

<<<<<<< HEAD
`StateManagerInterface.verifyVerklePostState`
=======
`StateManagerInterface.verifyPostState`
>>>>>>> b7777441e (ethereumjs-monoepo)
