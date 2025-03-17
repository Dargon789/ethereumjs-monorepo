[**@ethereumjs/devp2p**](../README.md)

***

[@ethereumjs/devp2p](../README.md) / Server

# Class: Server

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/server.ts:22](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L22)

## Constructors

### Constructor

> **new Server**(`dpt`, `privateKey`, `options`): `Server`

Defined in: [packages/devp2p/src/dpt/server.ts:37](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L37)
=======
Defined in: [packages/devp2p/src/dpt/server.ts:22](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L22)

## Constructors

### new Server()

> **new Server**(`dpt`, `privateKey`, `options`): `Server`

Defined in: [packages/devp2p/src/dpt/server.ts:37](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L37)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### dpt

[`DPT`](DPT.md)

##### privateKey

`Uint8Array`

##### options

[`DPTServerOptions`](../interfaces/DPTServerOptions.md)

#### Returns

`Server`

## Properties

### events

> **events**: `EventEmitter`\<[`ServerEvent`](../interfaces/ServerEvent.md)\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/server.ts:23](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L23)
=======
Defined in: [packages/devp2p/src/dpt/server.ts:23](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L23)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Methods

### \_handler()

> **\_handler**(`msg`, `rinfo`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/server.ts:156](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L156)
=======
Defined in: [packages/devp2p/src/dpt/server.ts:154](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L154)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### msg

`Uint8Array`

##### rinfo

`RemoteInfo`

#### Returns

`void`

***

### \_isAliveCheck()

> **\_isAliveCheck**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/server.ts:135](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L135)
=======
Defined in: [packages/devp2p/src/dpt/server.ts:133](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L133)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`void`

***

### \_send()

> **\_send**(`peer`, `typename`, `data`): `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/server.ts:139](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L139)
=======
Defined in: [packages/devp2p/src/dpt/server.ts:137](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L137)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### peer

[`PeerInfo`](../interfaces/PeerInfo.md)

##### typename

`string`

##### data

`any`

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### bind()

> **bind**(...`args`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/server.ts:69](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L69)
=======
Defined in: [packages/devp2p/src/dpt/server.ts:69](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L69)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### destroy()

> **destroy**(...`args`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/server.ts:78](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L78)
=======
Defined in: [packages/devp2p/src/dpt/server.ts:78](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L78)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### findneighbours()

> **findneighbours**(`peer`, `id`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/server.ts:130](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L130)
=======
Defined in: [packages/devp2p/src/dpt/server.ts:128](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L128)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### peer

[`PeerInfo`](../interfaces/PeerInfo.md)

##### id

`Uint8Array`

#### Returns

`void`

***

### ping()

> **ping**(`peer`): `Promise`\<`any`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dpt/server.ts:90](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L90)
=======
Defined in: [packages/devp2p/src/dpt/server.ts:90](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dpt/server.ts#L90)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### peer

[`PeerInfo`](../interfaces/PeerInfo.md)

#### Returns

`Promise`\<`any`\>
