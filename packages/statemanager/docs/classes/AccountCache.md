[**@ethereumjs/statemanager**](../README.md)

***

[@ethereumjs/statemanager](../README.md) / AccountCache

# Class: AccountCache

<<<<<<< HEAD
Defined in: [cache/account.ts:21](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L21)
=======
Defined in: [cache/account.ts:21](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L21)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Extends

- `Cache`

## Constructors

<<<<<<< HEAD
### Constructor

> **new AccountCache**(`opts`): `AccountCache`

Defined in: [cache/account.ts:35](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L35)
=======
### new AccountCache()

> **new AccountCache**(`opts`): `AccountCache`

Defined in: [cache/account.ts:35](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L35)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### opts

[`CacheOpts`](../interfaces/CacheOpts.md)

#### Returns

`AccountCache`

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

> **\_diffCache**: `Map`\<`string`, `undefined` \| `AccountCacheElement`\>[] = `[]`

<<<<<<< HEAD
Defined in: [cache/account.ts:34](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L34)
=======
Defined in: [cache/account.ts:34](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L34)
>>>>>>> b7777441e (ethereumjs-monoepo)

Diff cache collecting the state of the cache
at the beginning of checkpoint height
(respectively: before a first modification)

If the whole cache element is undefined (in contrast
to the account), the element didn't exist in the cache
before.

***

### \_lruCache

> **\_lruCache**: `undefined` \| `LRUCache`\<`string`, `AccountCacheElement`, `unknown`\>

<<<<<<< HEAD
Defined in: [cache/account.ts:22](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L22)
=======
Defined in: [cache/account.ts:22](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L22)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### \_orderedMapCache

> **\_orderedMapCache**: `undefined` \| `OrderedMap`\<`string`, `AccountCacheElement`\>

<<<<<<< HEAD
Defined in: [cache/account.ts:23](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L23)
=======
Defined in: [cache/account.ts:23](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L23)
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
Defined in: [cache/account.ts:50](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L50)
=======
Defined in: [cache/account.ts:50](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L50)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### cacheKeyHex

`string`

#### Returns

`void`

***

### checkpoint()

> **checkpoint**(): `void`

<<<<<<< HEAD
Defined in: [cache/account.ts:222](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L222)
=======
Defined in: [cache/account.ts:222](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L222)
>>>>>>> b7777441e (ethereumjs-monoepo)

Marks current state of cache as checkpoint, which can
later on be reverted or committed.

#### Returns

`void`

***

### clear()

> **clear**(): `void`

<<<<<<< HEAD
Defined in: [cache/account.ts:264](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L264)
=======
Defined in: [cache/account.ts:264](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L264)
>>>>>>> b7777441e (ethereumjs-monoepo)

Clears cache.

#### Returns

`void`

***

### commit()

> **commit**(): `void`

<<<<<<< HEAD
Defined in: [cache/account.ts:202](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L202)
=======
Defined in: [cache/account.ts:202](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L202)
>>>>>>> b7777441e (ethereumjs-monoepo)

Commits to current state of cache (no effect on trie).

#### Returns

`void`

***

### del()

> **del**(`address`): `void`

<<<<<<< HEAD
Defined in: [cache/account.ts:122](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L122)
=======
Defined in: [cache/account.ts:122](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L122)
>>>>>>> b7777441e (ethereumjs-monoepo)

Marks address as deleted in cache.

#### Parameters

##### address

`Address`

Address

#### Returns

`void`

***

### flush()

> **flush**(): \[`string`, `AccountCacheElement`\][]

<<<<<<< HEAD
Defined in: [cache/account.ts:145](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L145)
=======
Defined in: [cache/account.ts:145](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L145)
>>>>>>> b7777441e (ethereumjs-monoepo)

Flushes cache by returning accounts that have been modified
or deleted and resetting the diff cache (at checkpoint height).

#### Returns

\[`string`, `AccountCacheElement`\][]

***

### get()

> **get**(`address`): `undefined` \| `AccountCacheElement`

<<<<<<< HEAD
Defined in: [cache/account.ts:99](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L99)
=======
Defined in: [cache/account.ts:99](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L99)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the queried account or undefined if account doesn't exist

#### Parameters

##### address

`Address`

Address of account

#### Returns

`undefined` \| `AccountCacheElement`

***

### put()

> **put**(`address`, `account`, `couldBePartialAccount`): `void`

<<<<<<< HEAD
Defined in: [cache/account.ts:68](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L68)
=======
Defined in: [cache/account.ts:68](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L68)
>>>>>>> b7777441e (ethereumjs-monoepo)

Puts account to cache under its address.

#### Parameters

##### address

`Address`

Address of account

##### account

Account or undefined if account doesn't exist in the trie

`undefined` | `Account`

##### couldBePartialAccount

`boolean` = `false`

#### Returns

`void`

***

### revert()

> **revert**(): `void`

<<<<<<< HEAD
Defined in: [cache/account.ts:174](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L174)
=======
Defined in: [cache/account.ts:174](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L174)
>>>>>>> b7777441e (ethereumjs-monoepo)

Revert changes to cache last checkpoint (no effect on trie).

#### Returns

`void`

***

### size()

> **size**(): `number`

<<<<<<< HEAD
Defined in: [cache/account.ts:234](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L234)
=======
Defined in: [cache/account.ts:234](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L234)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the size of the cache

#### Returns

`number`

***

### stats()

> **stats**(`reset`): `object`

<<<<<<< HEAD
Defined in: [cache/account.ts:246](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L246)
=======
Defined in: [cache/account.ts:246](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/account.ts#L246)
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
