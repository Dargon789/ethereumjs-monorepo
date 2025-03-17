[**@ethereumjs/statemanager**](../README.md)

***

[@ethereumjs/statemanager](../README.md) / StorageCache

# Class: StorageCache

<<<<<<< HEAD
Defined in: [cache/storage.ts:20](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L20)
=======
Defined in: [cache/storage.ts:20](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L20)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Extends

- `Cache`

## Constructors

<<<<<<< HEAD
### Constructor

> **new StorageCache**(`opts`): `StorageCache`

Defined in: [cache/storage.ts:35](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L35)
=======
### new StorageCache()

> **new StorageCache**(`opts`): `StorageCache`

Defined in: [cache/storage.ts:35](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L35)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### opts

[`CacheOpts`](../interfaces/CacheOpts.md)

#### Returns

`StorageCache`

#### Overrides

`Cache.constructor`

## Properties

### \_checkpoints

> **\_checkpoints**: `number` = `0`

<<<<<<< HEAD
Defined in: [cache/cache.ts:8](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/cache.ts#L8)
=======
Defined in: [cache/cache.ts:8](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/cache.ts#L8)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

`Cache._checkpoints`

***

### \_debug

> **\_debug**: `Debugger`

<<<<<<< HEAD
Defined in: [cache/cache.ts:6](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/cache.ts#L6)
=======
Defined in: [cache/cache.ts:6](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/cache.ts#L6)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

`Cache._debug`

***

### \_diffCache

> **\_diffCache**: `Map`\<`string`, `DiffStorageCacheMap`\>[] = `[]`

<<<<<<< HEAD
Defined in: [cache/storage.ts:33](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L33)
=======
Defined in: [cache/storage.ts:33](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L33)
>>>>>>> b7777441e (ethereumjs-monoepo)

Diff cache collecting the state of the cache
at the beginning of checkpoint height
(respectively: before a first modification)

If the whole cache element is undefined (in contrast
to the account), the element didn't exist in the cache
before.

***

### \_lruCache

> **\_lruCache**: `undefined` \| `LRUCache`\<`string`, `StorageCacheMap`, `unknown`\>

<<<<<<< HEAD
Defined in: [cache/storage.ts:21](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L21)
=======
Defined in: [cache/storage.ts:21](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L21)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### \_orderedMapCache

> **\_orderedMapCache**: `undefined` \| `OrderedMap`\<`string`, `StorageCacheMap`\>

<<<<<<< HEAD
Defined in: [cache/storage.ts:22](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L22)
=======
Defined in: [cache/storage.ts:22](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L22)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### \_stats

> **\_stats**: `object`

<<<<<<< HEAD
Defined in: [cache/cache.ts:10](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/cache.ts#L10)
=======
Defined in: [cache/cache.ts:10](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/cache.ts#L10)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### deletions

> **deletions**: `number` = `0`

#### hits

> **hits**: `number` = `0`

#### reads

> **reads**: `number` = `0`

#### size

> **size**: `number` = `0`

#### writes

> **writes**: `number` = `0`

#### Inherited from

`Cache._stats`

## Methods

### \_saveCachePreState()

> **\_saveCachePreState**(`addressHex`, `keyHex`): `void`

<<<<<<< HEAD
Defined in: [cache/storage.ts:53](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L53)
=======
Defined in: [cache/storage.ts:53](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L53)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### addressHex

`string`

##### keyHex

`string`

#### Returns

`void`

***

### checkpoint()

> **checkpoint**(): `void`

<<<<<<< HEAD
Defined in: [cache/storage.ts:301](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L301)
=======
Defined in: [cache/storage.ts:299](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L299)
>>>>>>> b7777441e (ethereumjs-monoepo)

Marks current state of cache as checkpoint, which can
later on be reverted or committed.

#### Returns

`void`

***

### clear()

> **clear**(): `void`

<<<<<<< HEAD
Defined in: [cache/storage.ts:343](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L343)
=======
Defined in: [cache/storage.ts:341](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L341)
>>>>>>> b7777441e (ethereumjs-monoepo)

Clears cache.

#### Returns

`void`

***

### clearStorage()

> **clearStorage**(`address`): `void`

<<<<<<< HEAD
Defined in: [cache/storage.ts:175](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L175)
=======
Defined in: [cache/storage.ts:175](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L175)
>>>>>>> b7777441e (ethereumjs-monoepo)

Deletes all storage slots for address from the cache

#### Parameters

##### address

`Address`

#### Returns

`void`

***

### commit()

> **commit**(): `void`

<<<<<<< HEAD
Defined in: [cache/storage.ts:268](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L268)
=======
Defined in: [cache/storage.ts:266](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L266)
>>>>>>> b7777441e (ethereumjs-monoepo)

Commits to current state of cache (no effect on trie).

#### Returns

`void`

***

### del()

> **del**(`address`, `key`): `void`

<<<<<<< HEAD
Defined in: [cache/storage.ts:145](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L145)
=======
Defined in: [cache/storage.ts:145](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L145)
>>>>>>> b7777441e (ethereumjs-monoepo)

Marks storage key for address as deleted in cache.

#### Parameters

##### address

`Address`

Address

##### key

`Uint8Array`

Storage key

#### Returns

`void`

***

### dump()

> **dump**(`address`): `undefined` \| `StorageCacheMap`

<<<<<<< HEAD
Defined in: [cache/storage.ts:359](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L359)
=======
Defined in: [cache/storage.ts:357](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L357)
>>>>>>> b7777441e (ethereumjs-monoepo)

Dumps the RLP-encoded storage values for an `account` specified by `address`.

#### Parameters

##### address

`Address`

The address of the `account` to return storage for

#### Returns

`undefined` \| `StorageCacheMap`

- The storage values for the `account` or undefined if the `account` is not in the cache

***

### flush()

> **flush**(): \[`string`, `string`, `undefined` \| `Uint8Array`\<`ArrayBufferLike`\>\][]

<<<<<<< HEAD
Defined in: [cache/storage.ts:188](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L188)
=======
Defined in: [cache/storage.ts:188](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L188)
>>>>>>> b7777441e (ethereumjs-monoepo)

Flushes cache by returning storage slots that have been modified
or deleted and resetting the diff cache (at checkpoint height).

#### Returns

\[`string`, `string`, `undefined` \| `Uint8Array`\<`ArrayBufferLike`\>\][]

***

### get()

> **get**(`address`, `key`): `undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [cache/storage.ts:120](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L120)
=======
Defined in: [cache/storage.ts:120](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L120)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the queried slot as the RLP encoded storage value
hexToBytes('0x80'): slot is known to be empty
undefined: slot is not in cache

#### Parameters

##### address

`Address`

Address of account

##### key

`Uint8Array`

Storage key

#### Returns

`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

Storage value or undefined

***

### put()

> **put**(`address`, `key`, `value`): `void`

<<<<<<< HEAD
Defined in: [cache/storage.ts:82](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L82)
=======
Defined in: [cache/storage.ts:82](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L82)
>>>>>>> b7777441e (ethereumjs-monoepo)

Puts storage value to cache under address_key cache key.

#### Parameters

##### address

`Address`

Account address

##### key

`Uint8Array`

Storage key

##### value

`Uint8Array`

#### Returns

`void`

***

### revert()

> **revert**(): `void`

<<<<<<< HEAD
Defined in: [cache/storage.ts:226](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L226)
=======
Defined in: [cache/storage.ts:224](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L224)
>>>>>>> b7777441e (ethereumjs-monoepo)

Revert changes to cache last checkpoint (no effect on trie).

#### Returns

`void`

***

### size()

> **size**(): `number`

<<<<<<< HEAD
Defined in: [cache/storage.ts:313](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L313)
=======
Defined in: [cache/storage.ts:311](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L311)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the size of the cache

#### Returns

`number`

***

### stats()

> **stats**(`reset`): `object`

<<<<<<< HEAD
Defined in: [cache/storage.ts:325](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L325)
=======
Defined in: [cache/storage.ts:323](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/storage.ts#L323)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns a dict with cache stats

#### Parameters

##### reset

`boolean` = `true`

#### Returns

`object`

##### deletions

> **deletions**: `number` = `0`

##### hits

> **hits**: `number` = `0`

##### reads

> **reads**: `number` = `0`

##### size

> **size**: `number` = `0`

##### writes

> **writes**: `number` = `0`
