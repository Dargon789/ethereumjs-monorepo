[**@ethereumjs/util**](../README.md)

***

[@ethereumjs/util](../README.md) / Lock

# Class: Lock

<<<<<<< HEAD
Defined in: [packages/util/src/lock.ts:2](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/lock.ts#L2)

## Constructors

### Constructor
=======
Defined in: [packages/util/src/lock.ts:2](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/lock.ts#L2)

## Constructors

### new Lock()
>>>>>>> b7777441e (ethereumjs-monoepo)

> **new Lock**(): `Lock`

#### Returns

`Lock`

## Methods

### acquire()

> **acquire**(): `Promise`\<`boolean`\>

<<<<<<< HEAD
Defined in: [packages/util/src/lock.ts:10](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/lock.ts#L10)
=======
Defined in: [packages/util/src/lock.ts:10](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/lock.ts#L10)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns a promise used to wait for a permit to become available. This method should be awaited on.

#### Returns

`Promise`\<`boolean`\>

A promise that gets resolved when execution is allowed to proceed.

***

### release()

> **release**(): `void`

<<<<<<< HEAD
Defined in: [packages/util/src/lock.ts:25](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/lock.ts#L25)
=======
Defined in: [packages/util/src/lock.ts:25](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/lock.ts#L25)
>>>>>>> b7777441e (ethereumjs-monoepo)

Increases the number of permits by one. If there are other functions waiting, one of them will
continue to execute in a future iteration of the event loop.

#### Returns

`void`
