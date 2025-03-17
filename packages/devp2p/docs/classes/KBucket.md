[**@ethereumjs/devp2p**](../README.md)

***

[@ethereumjs/devp2p](../README.md) / KBucket

# Class: KBucket

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/kbucket.ts:11](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L11)

## Constructors

### Constructor

> **new KBucket**(`localNodeId`): `KBucket`

Defined in: [packages/devp2p/src/dpt/kbucket.ts:15](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L15)
=======
Defined in: [packages/devp2p/src/dpt/kbucket.ts:11](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L11)

## Constructors

### new KBucket()

> **new KBucket**(`localNodeId`): `KBucket`

Defined in: [packages/devp2p/src/dpt/kbucket.ts:15](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L15)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### localNodeId

`Uint8Array`

#### Returns

`KBucket`

## Properties

### events

> **events**: `EventEmitter`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/kbucket.ts:12](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L12)
=======
Defined in: [packages/devp2p/src/dpt/kbucket.ts:12](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L12)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Methods

### add()

> **add**(`peer`): `void` \| `KBucket`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/kbucket.ts:53](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L53)
=======
Defined in: [packages/devp2p/src/dpt/kbucket.ts:53](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L53)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### peer

[`PeerInfo`](../interfaces/PeerInfo.md)

#### Returns

`void` \| `KBucket`

***

### closest()

> **closest**(`id`): [`PeerInfo`](../interfaces/PeerInfo.md)[]

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/kbucket.ts:71](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L71)
=======
Defined in: [packages/devp2p/src/dpt/kbucket.ts:71](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L71)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### id

`Uint8Array`

#### Returns

[`PeerInfo`](../interfaces/PeerInfo.md)[]

***

### get()

> **get**(`obj`): `null` \| [`PeerInfo`](../interfaces/PeerInfo.md)

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/kbucket.ts:58](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L58)
=======
Defined in: [packages/devp2p/src/dpt/kbucket.ts:58](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L58)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### obj

`string` | [`PeerInfo`](../interfaces/PeerInfo.md) | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`null` \| [`PeerInfo`](../interfaces/PeerInfo.md)

***

### getAll()

> **getAll**(): [`PeerInfo`](../interfaces/PeerInfo.md)[]

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/kbucket.ts:67](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L67)
=======
Defined in: [packages/devp2p/src/dpt/kbucket.ts:67](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L67)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

[`PeerInfo`](../interfaces/PeerInfo.md)[]

***

### remove()

> **remove**(`obj`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/kbucket.ts:75](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L75)
=======
Defined in: [packages/devp2p/src/dpt/kbucket.ts:75](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L75)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### obj

`string` | [`PeerInfo`](../interfaces/PeerInfo.md) | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`void`

***

### getKeys()

> `static` **getKeys**(`obj`): `string`[]

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/kbucket.ts:42](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L42)
=======
Defined in: [packages/devp2p/src/dpt/kbucket.ts:42](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/kbucket.ts#L42)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### obj

`string` | [`PeerInfo`](../interfaces/PeerInfo.md) | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`string`[]
