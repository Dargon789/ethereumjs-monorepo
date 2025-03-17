[**@ethereumjs/blockchain**](../README.md)

***

[@ethereumjs/blockchain](../README.md) / Consensus

# Interface: Consensus

<<<<<<< HEAD
Defined in: [types.ts:217](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L217)
=======
Defined in: [types.ts:217](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L217)
>>>>>>> b7777441e (ethereumjs-monoepo)

Interface that a consensus class needs to implement.

## Properties

### algorithm

> **algorithm**: `string`

<<<<<<< HEAD
Defined in: [types.ts:218](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L218)
=======
Defined in: [types.ts:218](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L218)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Methods

### genesisInit()

> **genesisInit**(`genesisBlock`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [types.ts:223](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L223)
=======
Defined in: [types.ts:223](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L223)
>>>>>>> b7777441e (ethereumjs-monoepo)

Initialize genesis for consensus mechanism

#### Parameters

##### genesisBlock

`Block`

genesis block

#### Returns

`Promise`\<`void`\>

***

### newBlock()

<<<<<<< HEAD
> **newBlock**(`block`, `commonAncestor?`, `ancientHeaders?`): `Promise`\<`void`\>

Defined in: [types.ts:244](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L244)
=======
> **newBlock**(`block`, `commonAncestor`?, `ancientHeaders`?): `Promise`\<`void`\>

Defined in: [types.ts:244](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L244)
>>>>>>> b7777441e (ethereumjs-monoepo)

Update consensus on new block

#### Parameters

##### block

`Block`

new block

##### commonAncestor?

`BlockHeader`

common ancestor block header (optional)

##### ancientHeaders?

`BlockHeader`[]

array of ancestor block headers (optional)

#### Returns

`Promise`\<`void`\>

***

### setup()

> **setup**(`__namedParameters`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [types.ts:228](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L228)
=======
Defined in: [types.ts:228](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L228)
>>>>>>> b7777441e (ethereumjs-monoepo)

Set up consensus mechanism

#### Parameters

##### \_\_namedParameters

[`ConsensusOptions`](ConsensusOptions.md)

#### Returns

`Promise`\<`void`\>

***

### validateConsensus()

> **validateConsensus**(`block`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [types.ts:234](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L234)
=======
Defined in: [types.ts:234](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L234)
>>>>>>> b7777441e (ethereumjs-monoepo)

Validate block consensus parameters

#### Parameters

##### block

`Block`

block to be validated

#### Returns

`Promise`\<`void`\>

***

### validateDifficulty()

> **validateDifficulty**(`header`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [types.ts:236](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L236)
=======
Defined in: [types.ts:236](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/blockchain/src/types.ts#L236)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### header

`BlockHeader`

#### Returns

`Promise`\<`void`\>
