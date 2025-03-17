[**@ethereumjs/devp2p**](../README.md)

***

[@ethereumjs/devp2p](../README.md) / DPTOptions

# Interface: DPTOptions

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:113](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L113)
=======
Defined in: [packages/devp2p/src/types.ts:99](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L99)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Properties

### common?

> `optional` **common**: `Common`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:192](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L192)
=======
Defined in: [packages/devp2p/src/types.ts:178](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L178)
>>>>>>> b7777441e (ethereumjs-monoepo)

Common instance to allow for crypto primitive (e.g. keccak) replacement

***

### createSocket?

> `optional` **createSocket**: `Function`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:133](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L133)
=======
Defined in: [packages/devp2p/src/types.ts:119](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L119)
>>>>>>> b7777441e (ethereumjs-monoepo)

Function for socket creation

Default: dgram-created socket

***

### dnsAddr?

> `optional` **dnsAddr**: `string`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:187](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L187)
=======
Defined in: [packages/devp2p/src/types.ts:173](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L173)
>>>>>>> b7777441e (ethereumjs-monoepo)

DNS server to query DNS TXT records from for peer discovery

***

### dnsNetworks?

> `optional` **dnsNetworks**: `string`[]

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:182](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L182)
=======
Defined in: [packages/devp2p/src/types.ts:168](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L168)
>>>>>>> b7777441e (ethereumjs-monoepo)

EIP-1459 ENR tree urls to query for peer discovery

Default: (network dependent)

***

### dnsRefreshQuantity?

> `optional` **dnsRefreshQuantity**: `number`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:175](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L175)
=======
Defined in: [packages/devp2p/src/types.ts:161](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L161)
>>>>>>> b7777441e (ethereumjs-monoepo)

Max number of candidate peers to retrieve from DNS records when
attempting to discover new nodes

Default: 25

***

### endpoint?

> `optional` **endpoint**: [`PeerInfo`](PeerInfo.md)

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:126](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L126)
=======
Defined in: [packages/devp2p/src/types.ts:112](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L112)
>>>>>>> b7777441e (ethereumjs-monoepo)

Network info to send a long a request

Default: 0.0.0.0, no UDP or TCP port provided

***

### onlyConfirmed?

> `optional` **onlyConfirmed**: `boolean`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:160](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L160)
=======
Defined in: [packages/devp2p/src/types.ts:146](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L146)
>>>>>>> b7777441e (ethereumjs-monoepo)

Send findNeighbour requests to and only answer with respective peers
being confirmed by calling the `confirmPeer()` method

(allows for a more selective and noise reduced discovery)

Note: Bootstrap nodes are confirmed by default.

Default: false

***

### refreshInterval?

> `optional` **refreshInterval**: `number`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:140](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L140)
=======
Defined in: [packages/devp2p/src/types.ts:126](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L126)
>>>>>>> b7777441e (ethereumjs-monoepo)

Interval for peer table refresh

Default: 60s

***

### shouldFindNeighbours?

> `optional` **shouldFindNeighbours**: `boolean`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:148](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L148)
=======
Defined in: [packages/devp2p/src/types.ts:134](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L134)
>>>>>>> b7777441e (ethereumjs-monoepo)

Toggles whether or not peers should be queried with 'findNeighbours'
to discover more peers

Default: true

***

### shouldGetDnsPeers?

> `optional` **shouldGetDnsPeers**: `boolean`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:167](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L167)
=======
Defined in: [packages/devp2p/src/types.ts:153](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L153)
>>>>>>> b7777441e (ethereumjs-monoepo)

Toggles whether or not peers should be discovered by querying EIP-1459 DNS lists

Default: false

***

### timeout?

> `optional` **timeout**: `number`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/types.ts:119](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L119)
=======
Defined in: [packages/devp2p/src/types.ts:105](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/types.ts#L105)
>>>>>>> b7777441e (ethereumjs-monoepo)

Timeout for peer requests

Default: 10s
