[**@ethereumjs/devp2p**](../README.md)

***

[@ethereumjs/devp2p](../README.md) / DPT

# Class: DPT

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:23](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L23)

## Constructors

### Constructor

> **new DPT**(`privateKey`, `options`): `DPT`

Defined in: [packages/devp2p/src/dpt/dpt.ts:48](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L48)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:18](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L18)

## Constructors

### new DPT()

> **new DPT**(`privateKey`, `options`): `DPT`

Defined in: [packages/devp2p/src/dpt/dpt.ts:43](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L43)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### privateKey

`Uint8Array`

##### options

[`DPTOptions`](../interfaces/DPTOptions.md)

#### Returns

`DPT`

## Properties

### events

> **events**: `EventEmitter`\<[`DPTEvent`](../interfaces/DPTEvent.md)\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:24](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L24)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:19](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L19)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### id

> `readonly` **id**: `undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:30](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L30)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:25](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L25)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Methods

### \_addPeerBatch()

> **\_addPeerBatch**(`peers`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:128](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L128)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:123](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L123)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### peers

[`PeerInfo`](../interfaces/PeerInfo.md)[]

#### Returns

`void`

***

### \_onKBucketPing()

> **\_onKBucketPing**(`oldPeers`, `newPeer`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:106](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L106)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:101](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L101)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### oldPeers

[`PeerInfo`](../interfaces/PeerInfo.md)[]

##### newPeer

[`PeerInfo`](../interfaces/PeerInfo.md)

#### Returns

`void`

***

### addPeer()

> **addPeer**(`obj`): `Promise`\<[`PeerInfo`](../interfaces/PeerInfo.md)\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:157](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L157)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:152](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L152)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### obj

[`PeerInfo`](../interfaces/PeerInfo.md)

#### Returns

`Promise`\<[`PeerInfo`](../interfaces/PeerInfo.md)\>

***

### banPeer()

<<<<<<< HEAD
> **banPeer**(`obj`, `maxAge?`): `void`

Defined in: [packages/devp2p/src/dpt/dpt.ts:223](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L223)
=======
> **banPeer**(`obj`, `maxAge`?): `void`

Defined in: [packages/devp2p/src/dpt/dpt.ts:218](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L218)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### obj

`string` | [`PeerInfo`](../interfaces/PeerInfo.md) | `Uint8Array`\<`ArrayBufferLike`\>

##### maxAge?

`number`

#### Returns

`void`

***

### bind()

> **bind**(...`args`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:97](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L97)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:92](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L92)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### bootstrap()

> **bootstrap**(`peer`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:141](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L141)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:136](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L136)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### peer

[`PeerInfo`](../interfaces/PeerInfo.md)

#### Returns

`Promise`\<`void`\>

***

### confirmPeer()

> **confirmPeer**(`id`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:187](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L187)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:182](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L182)
>>>>>>> b7777441e (ethereumjs-monoepo)

Add peer to a confirmed list of peers (peers meeting some
level of quality, e.g. being on the same network) to allow
for a more selective findNeighbours request and sending
(with activated `onlyConfirmed` setting)

#### Parameters

##### id

`string`

Unprefixed hex id

#### Returns

`void`

***

### destroy()

> **destroy**(...`args`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:101](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L101)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:96](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L96)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### getClosestPeers()

> **getClosestPeers**(`id`): [`PeerInfo`](../interfaces/PeerInfo.md)[]

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:205](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L205)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:200](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L200)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### id

`Uint8Array`

#### Returns

[`PeerInfo`](../interfaces/PeerInfo.md)[]

***

### getDnsPeers()

> **getDnsPeers**(): `Promise`\<[`PeerInfo`](../interfaces/PeerInfo.md)[]\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:228](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L228)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:223](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L223)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Promise`\<[`PeerInfo`](../interfaces/PeerInfo.md)[]\>

***

### getPeer()

> **getPeer**(`obj`): `null` \| [`PeerInfo`](../interfaces/PeerInfo.md)

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:193](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L193)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:188](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L188)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### obj

`string` | [`PeerInfo`](../interfaces/PeerInfo.md) | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`null` \| [`PeerInfo`](../interfaces/PeerInfo.md)

***

### getPeers()

> **getPeers**(): [`PeerInfo`](../interfaces/PeerInfo.md)[]

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:197](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L197)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:192](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L192)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

[`PeerInfo`](../interfaces/PeerInfo.md)[]

***

### numPeers()

> **numPeers**(): `number`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:201](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L201)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:196](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L196)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`number`

***

### refresh()

> **refresh**(): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:232](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L232)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:227](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L227)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Promise`\<`void`\>

***

### removePeer()

> **removePeer**(`obj`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/dpt.ts:215](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L215)
=======
Defined in: [packages/devp2p/src/dpt/dpt.ts:210](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/dpt.ts#L210)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### obj

`string` | [`PeerInfo`](../interfaces/PeerInfo.md) | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`void`
