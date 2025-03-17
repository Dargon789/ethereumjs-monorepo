[**@ethereumjs/statemanager**](../README.md)

***

[@ethereumjs/statemanager](../README.md) / OriginalStorageCache

# Class: OriginalStorageCache

<<<<<<< HEAD
Defined in: [cache/originalStorageCache.ts:16](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/originalStorageCache.ts#L16)
=======
Defined in: [cache/originalStorageCache.ts:16](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/originalStorageCache.ts#L16)
>>>>>>> b7777441e (ethereumjs-monoepo)

Helper class to cache original storage values (so values already being present in
the pre-state of a call), mainly for correct gas cost calculation in EVM/VM.

TODO: Usage of this class is very implicit through the injected `getStorage()`
method bound to the calling state manager. It should be examined if there are alternative
designs being more transparent and direct along the next breaking release round.

## Constructors

<<<<<<< HEAD
### Constructor

> **new OriginalStorageCache**(`getStorage`): `OriginalStorageCache`

Defined in: [cache/originalStorageCache.ts:19](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/originalStorageCache.ts#L19)
=======
### new OriginalStorageCache()

> **new OriginalStorageCache**(`getStorage`): `OriginalStorageCache`

Defined in: [cache/originalStorageCache.ts:19](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/originalStorageCache.ts#L19)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### getStorage

`getStorage`

#### Returns

`OriginalStorageCache`

## Methods

### clear()

> **clear**(): `void`

<<<<<<< HEAD
Defined in: [cache/originalStorageCache.ts:52](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/originalStorageCache.ts#L52)
=======
Defined in: [cache/originalStorageCache.ts:52](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/originalStorageCache.ts#L52)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`void`

***

### get()

> **get**(`address`, `key`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

<<<<<<< HEAD
Defined in: [cache/originalStorageCache.ts:24](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/originalStorageCache.ts#L24)
=======
Defined in: [cache/originalStorageCache.ts:24](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/originalStorageCache.ts#L24)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

##### key

`Uint8Array`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### put()

> **put**(`address`, `key`, `value`): `void`

<<<<<<< HEAD
Defined in: [cache/originalStorageCache.ts:39](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/originalStorageCache.ts#L39)
=======
Defined in: [cache/originalStorageCache.ts:39](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/statemanager/src/cache/originalStorageCache.ts#L39)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### address

`Address`

##### key

`Uint8Array`

##### value

`Uint8Array`

#### Returns

`void`
