[**@ethereumjs/blockchain**](../README.md)

***

[@ethereumjs/blockchain](../README.md) / CasperConsensus

# Class: CasperConsensus

<<<<<<< HEAD
Defined in: [consensus/casper.ts:10](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L10)
=======
Defined in: [consensus/casper.ts:10](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L10)
>>>>>>> b7777441e (ethereumjs-monoepo)

This class encapsulates Casper-related consensus functionality when used with the Blockchain class.

## Implements

- [`Consensus`](../interfaces/Consensus.md)

## Constructors

<<<<<<< HEAD
### Constructor

> **new CasperConsensus**(): `CasperConsensus`

Defined in: [consensus/casper.ts:13](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L13)
=======
### new CasperConsensus()

> **new CasperConsensus**(): `CasperConsensus`

Defined in: [consensus/casper.ts:13](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L13)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`CasperConsensus`

## Properties

### algorithm

> **algorithm**: `ConsensusAlgorithm`

<<<<<<< HEAD
Defined in: [consensus/casper.ts:11](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L11)
=======
Defined in: [consensus/casper.ts:11](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L11)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Implementation of

[`Consensus`](../interfaces/Consensus.md).[`algorithm`](../interfaces/Consensus.md#algorithm)

## Methods

### genesisInit()

> **genesisInit**(): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [consensus/casper.ts:17](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L17)
=======
Defined in: [consensus/casper.ts:17](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L17)
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
Defined in: [consensus/casper.ts:32](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L32)
=======
Defined in: [consensus/casper.ts:32](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L32)
>>>>>>> b7777441e (ethereumjs-monoepo)

Update consensus on new block

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Consensus`](../interfaces/Consensus.md).[`newBlock`](../interfaces/Consensus.md#newblock)

***

### setup()

> **setup**(): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [consensus/casper.ts:19](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L19)
=======
Defined in: [consensus/casper.ts:19](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L19)
>>>>>>> b7777441e (ethereumjs-monoepo)

Set up consensus mechanism

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Consensus`](../interfaces/Consensus.md).[`setup`](../interfaces/Consensus.md#setup)

***

### validateConsensus()

> **validateConsensus**(): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [consensus/casper.ts:21](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L21)
=======
Defined in: [consensus/casper.ts:21](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L21)
>>>>>>> b7777441e (ethereumjs-monoepo)

Validate block consensus parameters

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Consensus`](../interfaces/Consensus.md).[`validateConsensus`](../interfaces/Consensus.md#validateconsensus)

***

### validateDifficulty()

> **validateDifficulty**(`header`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [consensus/casper.ts:23](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L23)
=======
Defined in: [consensus/casper.ts:23](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/casper.ts#L23)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### header

`BlockHeader`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Consensus`](../interfaces/Consensus.md).[`validateDifficulty`](../interfaces/Consensus.md#validatedifficulty)
