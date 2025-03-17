[**@ethereumjs/blockchain**](../README.md)

***

[@ethereumjs/blockchain](../README.md) / EthashConsensus

# Class: EthashConsensus

<<<<<<< HEAD
Defined in: [consensus/ethash.ts:18](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L18)
=======
Defined in: [consensus/ethash.ts:18](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L18)
>>>>>>> b7777441e (ethereumjs-monoepo)

This class encapsulates Ethash-related consensus functionality when used with the Blockchain class.

## Implements

- [`Consensus`](../interfaces/Consensus.md)

## Constructors

<<<<<<< HEAD
### Constructor

> **new EthashConsensus**(`ethash`): `EthashConsensus`

Defined in: [consensus/ethash.ts:26](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L26)
=======
### new EthashConsensus()

> **new EthashConsensus**(`ethash`): `EthashConsensus`

Defined in: [consensus/ethash.ts:26](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L26)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### ethash

`MinimalEthashInterface`

#### Returns

`EthashConsensus`

## Properties

### \_ethash

> **\_ethash**: `MinimalEthashInterface`

<<<<<<< HEAD
Defined in: [consensus/ethash.ts:21](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L21)
=======
Defined in: [consensus/ethash.ts:21](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L21)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### algorithm

> **algorithm**: `ConsensusAlgorithm`

<<<<<<< HEAD
Defined in: [consensus/ethash.ts:20](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L20)
=======
Defined in: [consensus/ethash.ts:20](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L20)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Implementation of

[`Consensus`](../interfaces/Consensus.md).[`algorithm`](../interfaces/Consensus.md#algorithm)

***

### blockchain

> **blockchain**: `undefined` \| [`Blockchain`](Blockchain.md)

<<<<<<< HEAD
Defined in: [consensus/ethash.ts:19](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L19)
=======
Defined in: [consensus/ethash.ts:19](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L19)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Methods

### genesisInit()

> **genesisInit**(): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [consensus/ethash.ts:64](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L64)
=======
Defined in: [consensus/ethash.ts:64](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L64)
>>>>>>> b7777441e (ethereumjs-monoepo)

Initialize genesis for consensus mechanism

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Consensus`](../interfaces/Consensus.md).[`genesisInit`](../interfaces/Consensus.md#genesisinit)

***

### newBlock()

> **newBlock**(): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [consensus/ethash.ts:69](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L69)
=======
Defined in: [consensus/ethash.ts:69](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L69)
>>>>>>> b7777441e (ethereumjs-monoepo)

Update consensus on new block

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Consensus`](../interfaces/Consensus.md).[`newBlock`](../interfaces/Consensus.md#newblock)

***

### setup()

> **setup**(`__namedParameters`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [consensus/ethash.ts:65](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L65)
=======
Defined in: [consensus/ethash.ts:65](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L65)
>>>>>>> b7777441e (ethereumjs-monoepo)

Set up consensus mechanism

#### Parameters

##### \_\_namedParameters

[`ConsensusOptions`](../interfaces/ConsensusOptions.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Consensus`](../interfaces/Consensus.md).[`setup`](../interfaces/Consensus.md#setup)

***

### validateConsensus()

> **validateConsensus**(`block`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [consensus/ethash.ts:35](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L35)
=======
Defined in: [consensus/ethash.ts:35](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L35)
>>>>>>> b7777441e (ethereumjs-monoepo)

Validate block consensus parameters

#### Parameters

##### block

`Block`

block to be validated

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Consensus`](../interfaces/Consensus.md).[`validateConsensus`](../interfaces/Consensus.md#validateconsensus)

***

### validateDifficulty()

> **validateDifficulty**(`header`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [consensus/ethash.ts:50](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L50)
=======
Defined in: [consensus/ethash.ts:50](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/ethash.ts#L50)
>>>>>>> b7777441e (ethereumjs-monoepo)

Checks that the block's `difficulty` matches the canonical difficulty of the parent header.

#### Parameters

##### header

`BlockHeader`

header of block to be checked

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Consensus`](../interfaces/Consensus.md).[`validateDifficulty`](../interfaces/Consensus.md#validatedifficulty)
