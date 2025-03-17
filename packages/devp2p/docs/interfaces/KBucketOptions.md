[**@ethereumjs/devp2p**](../README.md)

***

[@ethereumjs/devp2p](../README.md) / KBucketOptions

# Interface: KBucketOptions

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:230](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L230)
=======
Defined in: [packages/devp2p/src/types.ts:214](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L214)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Properties

### arbiter()?

> `optional` **arbiter**: (`incumbent`, `candidate`) => [`Contact`](Contact.md)

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:256](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L256)
=======
Defined in: [packages/devp2p/src/types.ts:240](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L240)
>>>>>>> b7777441e (ethereumjs-monoepo)

An optional arbiter function that given two `contact` objects with the same `id`,
returns the desired object to be used for updating the k-bucket.
Defaults to vectorClock arbiter function.

#### Parameters

##### incumbent

[`Contact`](Contact.md)

##### candidate

[`Contact`](Contact.md)

#### Returns

[`Contact`](Contact.md)

***

### distance()?

> `optional` **distance**: (`firstId`, `secondId`) => `number`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:250](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L250)
=======
Defined in: [packages/devp2p/src/types.ts:234](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L234)
>>>>>>> b7777441e (ethereumjs-monoepo)

An optional distance function that gets two id Uint8Arrays and return distance between them as a number.

#### Parameters

##### firstId

`Uint8Array`

##### secondId

`Uint8Array`

#### Returns

`number`

***

### localNodeId?

> `optional` **localNodeId**: `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:235](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L235)
=======
Defined in: [packages/devp2p/src/types.ts:219](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L219)
>>>>>>> b7777441e (ethereumjs-monoepo)

An optional Uint8Array representing the local node id.
If not provided, a local node id will be created via `randomBytes(20)`.

***

### metadata?

> `optional` **metadata**: `object`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:263](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L263)
=======
Defined in: [packages/devp2p/src/types.ts:247](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L247)
>>>>>>> b7777441e (ethereumjs-monoepo)

Optional satellite data to include
with the k-bucket. `metadata` property is guaranteed not be altered by,
it is provided as an explicit container for users of k-bucket to store
implementation-specific data.

***

### numberOfNodesPerKBucket?

> `optional` **numberOfNodesPerKBucket**: `number`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:240](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L240)
=======
Defined in: [packages/devp2p/src/types.ts:224](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L224)
>>>>>>> b7777441e (ethereumjs-monoepo)

The number of nodes that a k-bucket can contain before being full or split.
Defaults to 20.

***

### numberOfNodesToPing?

> `optional` **numberOfNodesToPing**: `number`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:246](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L246)
=======
Defined in: [packages/devp2p/src/types.ts:230](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L230)
>>>>>>> b7777441e (ethereumjs-monoepo)

The number of nodes to ping when a bucket that should not be split becomes full.
KBucket will emit a `ping` event that contains `numberOfNodesToPing` nodes that have not been contacted the longest.
Defaults to 3.
