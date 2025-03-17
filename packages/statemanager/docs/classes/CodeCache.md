[**@ethereumjs/statemanager**](../README.md)

***

[@ethereumjs/statemanager](../README.md) / CodeCache

# Class: CodeCache

<<<<<<< HEAD
Defined in: [cache/code.ts:19](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L19)
=======
Defined in: [cache/code.ts:19](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L19)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Extends

- `Cache`

## Constructors

<<<<<<< HEAD
### Constructor

> **new CodeCache**(`opts`): `CodeCache`

Defined in: [cache/code.ts:34](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L34)
=======
### new CodeCache()

> **new CodeCache**(`opts`): `CodeCache`

Defined in: [cache/code.ts:34](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L34)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### opts

[`CacheOpts`](../interfaces/CacheOpts.md)

#### Returns

`CodeCache`

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

> **\_diffCache**: `Map`\<`string`, `undefined` \| `CodeCacheElement`\>[] = `[]`

<<<<<<< HEAD
Defined in: [cache/code.ts:32](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L32)
=======
Defined in: [cache/code.ts:32](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L32)
>>>>>>> b7777441e (ethereumjs-monoepo)

Diff cache collecting the state of the cache
at the beginning of checkpoint height
(respectively: before a first modification)

If the whole cache element is undefined (in contrast
to the code), the element didn't exist in the cache
before.

***

### \_lruCache

> **\_lruCache**: `undefined` \| `LRUCache`\<`string`, `CodeCacheElement`, `unknown`\>

<<<<<<< HEAD
Defined in: [cache/code.ts:20](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L20)
=======
Defined in: [cache/code.ts:20](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L20)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### \_orderedMapCache

> **\_orderedMapCache**: `undefined` \| `OrderedMap`\<`string`, `CodeCacheElement`\>

<<<<<<< HEAD
Defined in: [cache/code.ts:21](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L21)
=======
Defined in: [cache/code.ts:21](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L21)
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

> **\_saveCachePreState**(`cacheKeyHex`): `void`

<<<<<<< HEAD
Defined in: [cache/code.ts:54](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L54)
=======
Defined in: [cache/code.ts:54](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L54)
>>>>>>> b7777441e (ethereumjs-monoepo)

Saves the state of the code cache before making changes to it.

#### Parameters

##### cacheKeyHex

`string`

Account key for which code is being modified.

#### Returns

`void`

***

### checkpoint()

> **checkpoint**(): `void`

<<<<<<< HEAD
Defined in: [cache/code.ts:220](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L220)
=======
Defined in: [cache/code.ts:220](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L220)
>>>>>>> b7777441e (ethereumjs-monoepo)

Marks the current state of the cache as a checkpoint, which can
later be reverted or committed.

#### Returns

`void`

***

### clear()

> **clear**(): `void`

<<<<<<< HEAD
Defined in: [cache/code.ts:264](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L264)
=======
Defined in: [cache/code.ts:264](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L264)
>>>>>>> b7777441e (ethereumjs-monoepo)

Clears the cache.

#### Returns

`void`

***

### commit()

> **commit**(): `void`

<<<<<<< HEAD
Defined in: [cache/code.ts:200](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L200)
=======
Defined in: [cache/code.ts:200](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L200)
>>>>>>> b7777441e (ethereumjs-monoepo)

Commits the current state of the cache (no effect on trie).

#### Returns

`void`

***

### del()

> **del**(`address`): `void`

<<<<<<< HEAD
Defined in: [cache/code.ts:120](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L120)
=======
Defined in: [cache/code.ts:120](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L120)
>>>>>>> b7777441e (ethereumjs-monoepo)

Marks code as deleted in the cache.

#### Parameters

##### address

`Address`

Account address for which code is being fetched.

#### Returns

`void`

***

### flush()

> **flush**(): \[`string`, `CodeCacheElement`\][]

<<<<<<< HEAD
Defined in: [cache/code.ts:143](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L143)
=======
Defined in: [cache/code.ts:143](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L143)
>>>>>>> b7777441e (ethereumjs-monoepo)

Flushes the cache by returning codes that have been modified
or deleted and resetting the diff cache (at checkpoint height).

#### Returns

\[`string`, `CodeCacheElement`\][]

***

### get()

> **get**(`address`): `undefined` \| `CodeCacheElement`

<<<<<<< HEAD
Defined in: [cache/code.ts:96](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L96)
=======
Defined in: [cache/code.ts:96](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L96)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the queried code or undefined if it doesn't exist.

#### Parameters

##### address

`Address`

Account address for which code is being fetched.

#### Returns

`undefined` \| `CodeCacheElement`

***

### put()

> **put**(`address`, `code`): `void`

<<<<<<< HEAD
Defined in: [cache/code.ts:73](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L73)
=======
Defined in: [cache/code.ts:73](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L73)
>>>>>>> b7777441e (ethereumjs-monoepo)

Puts code into the cache under its hash.

#### Parameters

##### address

`Address`

Address of account code is being modified for.

##### code

Bytecode or undefined if code doesn't exist.

`undefined` | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`void`

***

### revert()

> **revert**(): `void`

<<<<<<< HEAD
Defined in: [cache/code.ts:172](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L172)
=======
Defined in: [cache/code.ts:172](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L172)
>>>>>>> b7777441e (ethereumjs-monoepo)

Revert changes to the cache to the last checkpoint (no effect on trie).

#### Returns

`void`

***

### size()

> **size**(): `number`

<<<<<<< HEAD
Defined in: [cache/code.ts:232](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L232)
=======
Defined in: [cache/code.ts:232](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L232)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the size of the cache

#### Returns

`number`

***

### stats()

> **stats**(`reset`): `any`

<<<<<<< HEAD
Defined in: [cache/code.ts:246](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L246)
=======
Defined in: [cache/code.ts:246](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/code.ts#L246)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns a dictionary with cache statistics.

#### Parameters

##### reset

`boolean` = `true`

Whether to reset statistics after retrieval.

#### Returns

`any`

A dictionary with cache statistics.
