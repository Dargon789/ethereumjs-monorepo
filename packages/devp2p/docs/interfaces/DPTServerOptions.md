[**@ethereumjs/devp2p**](../README.md)

***

[@ethereumjs/devp2p](../README.md) / DPTServerOptions

# Interface: DPTServerOptions

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:195](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L195)
=======
Defined in: [packages/devp2p/src/types.ts:181](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L181)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Properties

### common?

> `optional` **common**: `Common`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:220](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L220)
=======
Defined in: [packages/devp2p/src/types.ts:206](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L206)
>>>>>>> b7777441e (ethereumjs-monoepo)

Common instance to allow for crypto primitive (e.g. keccak) replacement

***

### createSocket?

> `optional` **createSocket**: `Function`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:215](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L215)
=======
Defined in: [packages/devp2p/src/types.ts:201](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L201)
>>>>>>> b7777441e (ethereumjs-monoepo)

Function for socket creation

Default: dgram-created socket

***

### endpoint?

> `optional` **endpoint**: [`PeerInfo`](PeerInfo.md)

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:208](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L208)
=======
Defined in: [packages/devp2p/src/types.ts:194](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L194)
>>>>>>> b7777441e (ethereumjs-monoepo)

Network info to send a long a request

Default: 0.0.0.0, no UDP or TCP port provided

***

### timeout?

> `optional` **timeout**: `number`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:201](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L201)
=======
Defined in: [packages/devp2p/src/types.ts:187](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L187)
>>>>>>> b7777441e (ethereumjs-monoepo)

Timeout for peer requests

Default: 10s
