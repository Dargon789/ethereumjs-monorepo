[**@ethereumjs/devp2p**](../README.md)

***

[@ethereumjs/devp2p](../README.md) / RLPx

# Class: RLPx

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:32](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L32)

## Constructors

### Constructor

> **new RLPx**(`privateKey`, `options`): `RLPx`

Defined in: [packages/devp2p/src/rlpx/rlpx.ts:58](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L58)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:31](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L31)

## Constructors

### new RLPx()

> **new RLPx**(`privateKey`, `options`): `RLPx`

Defined in: [packages/devp2p/src/rlpx/rlpx.ts:57](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L57)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### privateKey

`Uint8Array`

##### options

[`RLPxOptions`](../interfaces/RLPxOptions.md)

#### Returns

`RLPx`

## Properties

### clientId

> `readonly` **clientId**: `Uint8Array`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:39](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L39)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:38](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L38)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### events

> **events**: `EventEmitter`\<[`RLPxEvent`](../interfaces/RLPxEvent.md)\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:33](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L33)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:32](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L32)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### id

> `readonly` **id**: `Uint8Array`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:35](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L35)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:34](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L34)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Methods

### \_connectToPeer()

> **\_connectToPeer**(`peer`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:210](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L210)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:207](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L207)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### peer

[`PeerInfo`](../interfaces/PeerInfo.md)

#### Returns

`void`

***

### \_getOpenQueueSlots()

> **\_getOpenQueueSlots**(): `number`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:206](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L206)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:203](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L203)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`number`

***

### \_getOpenSlots()

> **\_getOpenSlots**(): `number`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:202](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L202)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:199](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L199)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`number`

***

### \_isAlive()

> **\_isAlive**(): `boolean`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:194](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L194)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:191](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L191)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`boolean`

***

### \_isAliveCheck()

> **\_isAliveCheck**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:198](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L198)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:195](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L195)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`void`

***

### \_onConnect()

> **\_onConnect**(`socket`, `peerId`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:219](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L219)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:216](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L216)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### socket

`Socket`

##### peerId

`null` | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`void`

***

### \_refillConnections()

> **\_refillConnections**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:306](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L306)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:303](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L303)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`void`

***

### connect()

> **connect**(`peer`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:148](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L148)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:148](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L148)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### peer

[`PeerInfo`](../interfaces/PeerInfo.md)

#### Returns

`Promise`\<`void`\>

***

### destroy()

> **destroy**(...`args`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:134](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L134)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:134](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L134)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### disconnect()

> **disconnect**(`id`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:187](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L187)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:184](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L184)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### id

`Uint8Array`

#### Returns

`void`

***

### getPeers()

> **getPeers**(): [`Peer`](Peer.md)[]

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:183](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L183)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:180](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L180)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

[`Peer`](Peer.md)[]

***

### listen()

> **listen**(...`args`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:125](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L125)
=======
Defined in: [packages/devp2p/src/rlpx/rlpx.ts:125](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/rlpx.ts#L125)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### args

...`any`[]

#### Returns

`void`
