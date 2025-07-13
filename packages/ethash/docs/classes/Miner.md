[**@ethereumjs/ethash**](../README.md)

***

[@ethereumjs/ethash](../README.md) / Miner

# Class: Miner

<<<<<<< HEAD
Defined in: [index.ts:47](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/ethash/src/index.ts#L47)

## Constructors

### Constructor

> **new Miner**(`mineObject`, `ethash`): `Miner`

Defined in: [index.ts:64](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/ethash/src/index.ts#L64)
=======
Defined in: [index.ts:46](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/ethash/src/index.ts#L46)

## Constructors

### new Miner()

> **new Miner**(`mineObject`, `ethash`): `Miner`

Defined in: [index.ts:63](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/ethash/src/index.ts#L63)
>>>>>>> b7777441e (ethereumjs-monoepo)

Create a Miner object

#### Parameters

##### mineObject

The object to mine on, either a `BlockHeader` or a `Block` object

`BlockHeader` | `Block`

##### ethash

[`Ethash`](Ethash.md)

Ethash object to use for mining

#### Returns

`Miner`

## Properties

### solution?

> `optional` **solution**: [`Solution`](../type-aliases/Solution.md)

<<<<<<< HEAD
Defined in: [index.ts:52](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/ethash/src/index.ts#L52)
=======
Defined in: [index.ts:51](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/ethash/src/index.ts#L51)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Methods

### iterate()

> **iterate**(`iterations`): `Promise`\<`undefined` \| [`Solution`](../type-aliases/Solution.md)\>

<<<<<<< HEAD
Defined in: [index.ts:114](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/ethash/src/index.ts#L114)
=======
Defined in: [index.ts:113](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/ethash/src/index.ts#L113)
>>>>>>> b7777441e (ethereumjs-monoepo)

Iterate `iterations` times over nonces to find a valid PoW. Caches solution if one is found

#### Parameters

##### iterations

`number` = `0`

Number of iterations to iterate over. If `-1` is passed, the loop runs until a solution is found

#### Returns

`Promise`\<`undefined` \| [`Solution`](../type-aliases/Solution.md)\>

- `undefined` if no solution was found, or otherwise a `Solution` object

***

### mine()

> **mine**(`iterations`): `Promise`\<`undefined` \| `BlockHeader` \| `Block`\>

<<<<<<< HEAD
Defined in: [index.ts:91](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/ethash/src/index.ts#L91)
=======
Defined in: [index.ts:90](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/ethash/src/index.ts#L90)
>>>>>>> b7777441e (ethereumjs-monoepo)

Iterate `iterations` time over nonces, returns a `BlockHeader` or `Block` if a solution is found, `undefined` otherwise

#### Parameters

##### iterations

`number` = `0`

Number of iterations to iterate over. If `-1` is passed, the loop runs until a solution is found

#### Returns

`Promise`\<`undefined` \| `BlockHeader` \| `Block`\>

- `undefined` if no solution was found within the iterations, or a `BlockHeader` or `Block`
          with valid PoW based upon what was passed in the constructor

***

### stop()

> **stop**(): `void`

<<<<<<< HEAD
Defined in: [index.ts:81](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/ethash/src/index.ts#L81)
=======
Defined in: [index.ts:80](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/ethash/src/index.ts#L80)
>>>>>>> b7777441e (ethereumjs-monoepo)

Stop the miner on the next iteration

#### Returns

`void`
