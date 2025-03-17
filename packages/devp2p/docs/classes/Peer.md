[**@ethereumjs/devp2p**](../README.md)

***

[@ethereumjs/devp2p](../README.md) / Peer

# Class: Peer

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:77](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L77)

## Constructors

### Constructor

> **new Peer**(`options`): `Peer`

Defined in: [packages/devp2p/src/rlpx/peer.ts:111](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L111)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:65](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L65)

## Constructors

### new Peer()

> **new Peer**(`options`): `Peer`

Defined in: [packages/devp2p/src/rlpx/peer.ts:99](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L99)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### options

[`PeerOptions`](../interfaces/PeerOptions.md)

#### Returns

`Peer`

## Properties

### \_protocols

> **\_protocols**: `ProtocolDescriptor`[]

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:109](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L109)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:97](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L97)
>>>>>>> b7777441e (ethereumjs-monoepo)

Subprotocols (e.g. `ETH`) derived from the exchange on
capabilities

***

### clientId

> `readonly` **clientId**: `Uint8Array`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:79](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L79)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:67](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L67)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### common

> **common**: `Common`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:81](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L81)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:69](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L69)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### events

> **events**: `EventEmitter`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:78](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L78)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:66](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L66)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### id

> `readonly` **id**: `Uint8Array`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:83](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L83)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:71](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L71)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Methods

### \_addFirstPeerDebugger()

> **\_addFirstPeerDebugger**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:720](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L720)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:707](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L707)
>>>>>>> b7777441e (ethereumjs-monoepo)

Called once from the subprotocol (e.g. `ETH`) on the peer
where a first successful `STATUS` msg exchange could be achieved.

Can be used together with the `devp2p:FIRST_PEER` debugger.

#### Returns

`void`

***

### \_getProtocol()

> **\_getProtocol**(`code`): `undefined` \| `ProtocolDescriptor`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:682](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L682)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:669](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L669)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns either a protocol object with a `protocol` parameter
reference to this Peer instance or to a subprotocol instance (e.g. `ETH`)
(depending on the `code` provided)

#### Parameters

##### code

`number`

#### Returns

`undefined` \| `ProtocolDescriptor`

***

### \_handleAck()

> **\_handleAck**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:350](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L350)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:338](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L338)
>>>>>>> b7777441e (ethereumjs-monoepo)

ACK message received

#### Returns

`void`

***

### \_handleAuth()

> **\_handleAuth**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:327](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L327)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:315](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L315)
>>>>>>> b7777441e (ethereumjs-monoepo)

AUTH message received

#### Returns

`void`

***

### \_handleBody()

> **\_handleBody**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:544](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L544)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:531](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L531)
>>>>>>> b7777441e (ethereumjs-monoepo)

Handle message body

#### Returns

`void`

***

### \_handleDisconnect()

> **\_handleDisconnect**(`payload`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:464](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L464)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:452](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L452)
>>>>>>> b7777441e (ethereumjs-monoepo)

DISCONNECT message received

#### Parameters

##### payload

`any`

#### Returns

`void`

***

### \_handleHeader()

> **\_handleHeader**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:524](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L524)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:511](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L511)
>>>>>>> b7777441e (ethereumjs-monoepo)

Handle message header

#### Returns

`void`

***

### \_handleHello()

> **\_handleHello**(`payload`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:381](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L381)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:369](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L369)
>>>>>>> b7777441e (ethereumjs-monoepo)

HELLO message received

#### Parameters

##### payload

`any`

#### Returns

`void`

***

### \_handleMessage()

> **\_handleMessage**(`code`, `msg`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:504](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L504)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:491](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L491)
>>>>>>> b7777441e (ethereumjs-monoepo)

Message handling, called from a SubProtocol context

#### Parameters

##### code

<<<<<<< HEAD
[`PREFIXES`](../type-aliases/PREFIXES.md)
=======
`PREFIXES`
>>>>>>> b7777441e (ethereumjs-monoepo)

##### msg

`Uint8Array`

#### Returns

`void`

***

### \_handlePing()

> **\_handlePing**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:488](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L488)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:475](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L475)
>>>>>>> b7777441e (ethereumjs-monoepo)

PING message received

#### Returns

`void`

***

### \_handlePong()

> **\_handlePong**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:495](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L495)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:482](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L482)
>>>>>>> b7777441e (ethereumjs-monoepo)

PONG message received

#### Returns

`void`

***

### \_onSocketClose()

> **\_onSocketClose**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:669](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L669)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:656](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L656)
>>>>>>> b7777441e (ethereumjs-monoepo)

React to socket being closed

#### Returns

`void`

***

### \_onSocketData()

> **\_onSocketData**(`data`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:639](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L639)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:626](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L626)
>>>>>>> b7777441e (ethereumjs-monoepo)

Process socket data

#### Parameters

##### data

`Uint8Array`

#### Returns

`void`

***

### \_sendAck()

> **\_sendAck**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:186](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L186)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:174](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L174)
>>>>>>> b7777441e (ethereumjs-monoepo)

Send ACK message

#### Returns

`void`

***

### \_sendAuth()

> **\_sendAuth**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:164](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L164)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:152](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L152)
>>>>>>> b7777441e (ethereumjs-monoepo)

Send AUTH message

#### Returns

`void`

***

### \_sendDisconnect()

> **\_sendDisconnect**(`reason`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:271](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L271)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:259](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L259)
>>>>>>> b7777441e (ethereumjs-monoepo)

Send DISCONNECT message

#### Parameters

##### reason

<<<<<<< HEAD
[`DISCONNECT_REASON`](../type-aliases/DISCONNECT_REASON.md)
=======
[`DISCONNECT_REASON`](../enumerations/DISCONNECT_REASON.md)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`void`

***

### \_sendHello()

> **\_sendHello**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:233](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L233)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:221](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L221)
>>>>>>> b7777441e (ethereumjs-monoepo)

Send HELLO message

#### Returns

`void`

***

### \_sendMessage()

> **\_sendMessage**(`code`, `data`): `undefined` \| `boolean`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:213](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L213)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:201](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L201)
>>>>>>> b7777441e (ethereumjs-monoepo)

Create message HEADER and BODY and send to socket
Also called from SubProtocol context

#### Parameters

##### code

`number`

##### data

`Uint8Array`

#### Returns

`undefined` \| `boolean`

***

### \_sendPing()

> **\_sendPing**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:292](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L292)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:280](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L280)
>>>>>>> b7777441e (ethereumjs-monoepo)

Send PING message

#### Returns

`void`

***

### \_sendPong()

> **\_sendPong**(): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:312](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L312)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:300](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L300)
>>>>>>> b7777441e (ethereumjs-monoepo)

Send PONG message

#### Returns

`void`

***

### disconnect()

> **disconnect**(`reason`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:710](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L710)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:697](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L697)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### reason

<<<<<<< HEAD
[`DISCONNECT_REASON`](../type-aliases/DISCONNECT_REASON.md) = `DISCONNECT_REASON.DISCONNECT_REQUESTED`
=======
[`DISCONNECT_REASON`](../enumerations/DISCONNECT_REASON.md) = `DISCONNECT_REASON.DISCONNECT_REQUESTED`
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`void`

***

### getDisconnectPrefix()

> **getDisconnectPrefix**(`code`): `string`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:706](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L706)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:693](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L693)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### code

<<<<<<< HEAD
[`DISCONNECT_REASON`](../type-aliases/DISCONNECT_REASON.md)
=======
[`DISCONNECT_REASON`](../enumerations/DISCONNECT_REASON.md)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`string`

***

### getHelloMessage()

> **getHelloMessage**(): `null` \| `Hello`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:694](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L694)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:681](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L681)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`null` \| `Hello`

***

### getId()

> **getId**(): `null` \| `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:689](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L689)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:676](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L676)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`null` \| `Uint8Array`\<`ArrayBufferLike`\>

***

### getMsgPrefix()

> **getMsgPrefix**(`code`): `string`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:702](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L702)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:689](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L689)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### code

<<<<<<< HEAD
[`PREFIXES`](../type-aliases/PREFIXES.md)
=======
`PREFIXES`
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`string`

***

### getProtocols()

> **getProtocols**(): `Protocol`[]

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/peer.ts:698](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L698)
=======
Defined in: [packages/devp2p/src/rlpx/peer.ts:685](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/peer.ts#L685)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Protocol`[]
