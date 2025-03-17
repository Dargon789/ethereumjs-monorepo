[**@ethereumjs/common**](../README.md)

***

[@ethereumjs/common](../README.md) / Common

# Class: Common

<<<<<<< HEAD
Defined in: [common.ts:45](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L45)
=======
Defined in: [common.ts:44](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L44)
>>>>>>> b7777441e (ethereumjs-monoepo)

Common class to access chain and hardfork parameters and to provide
a unified and shared view on the network and hardfork state.

Use the Common.custom static constructor for creating simple
custom chain Common objects (more complete custom chain setups
can be created via the main constructor).

## Constructors

<<<<<<< HEAD
### Constructor

> **new Common**(`opts`): `Common`

Defined in: [common.ts:62](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L62)
=======
### new Common()

> **new Common**(`opts`): `Common`

Defined in: [common.ts:61](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L61)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### opts

[`CommonOpts`](../interfaces/CommonOpts.md)

#### Returns

`Common`

## Properties

### customCrypto

> `readonly` **customCrypto**: [`CustomCrypto`](../interfaces/CustomCrypto.md)

<<<<<<< HEAD
Defined in: [common.ts:53](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L53)
=======
Defined in: [common.ts:52](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L52)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### DEFAULT\_HARDFORK

> `readonly` **DEFAULT\_HARDFORK**: `string`

<<<<<<< HEAD
Defined in: [common.ts:46](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L46)
=======
Defined in: [common.ts:45](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L45)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### events

> **events**: `EventEmitter`\<[`CommonEvent`](../interfaces/CommonEvent.md)\>

<<<<<<< HEAD
Defined in: [common.ts:60](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L60)
=======
Defined in: [common.ts:59](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L59)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Methods

### activeOnBlock()

> **activeOnBlock**(`blockNumber`): `boolean`

<<<<<<< HEAD
Defined in: [common.ts:472](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L472)
=======
Defined in: [common.ts:469](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L469)
>>>>>>> b7777441e (ethereumjs-monoepo)

Alias to hardforkIsActiveOnBlock when hardfork is set

#### Parameters

##### blockNumber

`BigIntLike`

#### Returns

`boolean`

True if HF is active on block number

***

### bootstrapNodes()

> **bootstrapNodes**(): [`BootstrapNodeConfig`](../interfaces/BootstrapNodeConfig.md)[]

<<<<<<< HEAD
Defined in: [common.ts:729](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L729)
=======
Defined in: [common.ts:725](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L725)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns bootstrap nodes for the current chain

#### Returns

[`BootstrapNodeConfig`](../interfaces/BootstrapNodeConfig.md)[]

Dict with bootstrap nodes

***

### chainId()

> **chainId**(): `bigint`

<<<<<<< HEAD
Defined in: [common.ts:753](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L753)
=======
Defined in: [common.ts:749](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L749)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the Id of current chain

#### Returns

`bigint`

chain Id

***

### chainName()

> **chainName**(): `string`

<<<<<<< HEAD
Defined in: [common.ts:761](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L761)
=======
Defined in: [common.ts:757](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L757)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the name of current chain

#### Returns

`string`

chain name (lower case)

***

### consensusAlgorithm()

> **consensusAlgorithm**(): `string`

<<<<<<< HEAD
Defined in: [common.ts:802](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L802)
=======
Defined in: [common.ts:798](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L798)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the concrete consensus implementation
algorithm or protocol for the network
e.g. "ethash" for "pow" consensus type,
"clique" for "poa" consensus type or
"casper" for "pos" consensus type.

Note: This value can update along a Hardfork.

#### Returns

`string`

***

### consensusConfig()

> **consensusConfig**(): `object`

<<<<<<< HEAD
Defined in: [common.ts:828](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L828)
=======
Defined in: [common.ts:824](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L824)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns a dictionary with consensus configuration
parameters based on the consensus algorithm

Expected returns (parameters must be present in
the respective chain JSON files):

ethash: empty object
clique: period, epoch
casper: empty object

Note: This value can update along a Hardfork.

#### Returns

`object`

***

### consensusType()

> **consensusType**(): `string`

<<<<<<< HEAD
Defined in: [common.ts:780](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L780)
=======
Defined in: [common.ts:776](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L776)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the consensus type of the network
Possible values: "pow"|"poa"|"pos"

Note: This value can update along a Hardfork.

#### Returns

`string`

***

### copy()

> **copy**(): `Common`

<<<<<<< HEAD
Defined in: [common.ts:849](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L849)
=======
Defined in: [common.ts:845](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L845)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns a deep copy of this Common instance.

#### Returns

`Common`

***

### dnsNetworks()

> **dnsNetworks**(): `string`[]

<<<<<<< HEAD
Defined in: [common.ts:737](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L737)
=======
Defined in: [common.ts:733](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L733)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns DNS networks for the current chain

#### Returns

`string`[]

Array of DNS ENR urls

***

### eipBlock()

> **eipBlock**(`eip`): `null` \| `bigint`

<<<<<<< HEAD
Defined in: [common.ts:535](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L535)
=======
Defined in: [common.ts:532](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L532)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the hardfork change block for eip

#### Parameters

##### eip

`number`

EIP number

#### Returns

`null` \| `bigint`

Block number or null if unscheduled

***

### eips()

> **eips**(): `number`[]

<<<<<<< HEAD
Defined in: [common.ts:770](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L770)
=======
Defined in: [common.ts:766](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L766)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the additionally activated EIPs
(by using the `eips` constructor option)

#### Returns

`number`[]

List of EIPs

***

### eipTimestamp()

> **eipTimestamp**(`eip`): `null` \| `bigint`

<<<<<<< HEAD
Defined in: [common.ts:553](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L553)
=======
Defined in: [common.ts:550](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L550)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the scheduled timestamp of the EIP (if scheduled and scheduled by timestamp)

#### Parameters

##### eip

`number`

EIP number

#### Returns

`null` \| `bigint`

Scheduled timestamp. If this EIP is unscheduled, or the EIP is scheduled by block number, then it returns `null`.

***

### forkHash()

<<<<<<< HEAD
> **forkHash**(`hardfork?`, `genesisHash?`): `` `0x${string}` ``

Defined in: [common.ts:660](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L660)
=======
> **forkHash**(`hardfork`?, `genesisHash`?): `` `0x${string}` ``

Defined in: [common.ts:657](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L657)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns an eth/64 compliant fork hash (EIP-2124)

#### Parameters

##### hardfork?

`string`

Hardfork name, optional if HF set

##### genesisHash?

`Uint8Array`\<`ArrayBufferLike`\>

Genesis block hash of the network, optional if already defined and not needed to be calculated

#### Returns

`` `0x${string}` ``

***

### genesis()

> **genesis**(): [`GenesisBlockConfig`](../interfaces/GenesisBlockConfig.md)

<<<<<<< HEAD
Defined in: [common.ts:709](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L709)
=======
Defined in: [common.ts:705](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L705)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the Genesis parameters of the current chain

#### Returns

[`GenesisBlockConfig`](../interfaces/GenesisBlockConfig.md)

Genesis dictionary

***

### getHardforkBy()

> **getHardforkBy**(`opts`): `string`

<<<<<<< HEAD
Defined in: [common.ts:169](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L169)
=======
Defined in: [common.ts:168](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L168)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the hardfork either based on block number (older HFs) or
timestamp (Shanghai upwards).

#### Parameters

##### opts

[`HardforkByOpts`](../interfaces/HardforkByOpts.md)

#### Returns

`string`

The name of the HF

***

### gteHardfork()

> **gteHardfork**(`hardfork`): `boolean`

<<<<<<< HEAD
Defined in: [common.ts:503](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L503)
=======
Defined in: [common.ts:500](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L500)
>>>>>>> b7777441e (ethereumjs-monoepo)

Alias to hardforkGteHardfork when hardfork is set

#### Parameters

##### hardfork

`string`

Hardfork name

#### Returns

`boolean`

True if hardfork set is greater than hardfork provided

***

### hardfork()

> **hardfork**(): `string`

<<<<<<< HEAD
Defined in: [common.ts:745](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L745)
=======
Defined in: [common.ts:741](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L741)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the hardfork set

#### Returns

`string`

Hardfork name

***

### hardforkBlock()

<<<<<<< HEAD
> **hardforkBlock**(`hardfork?`): `null` \| `bigint`

Defined in: [common.ts:512](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L512)
=======
> **hardforkBlock**(`hardfork`?): `null` \| `bigint`

Defined in: [common.ts:509](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L509)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the hardfork change block for hardfork provided or set

#### Parameters

##### hardfork?

`string`

Hardfork name, optional if HF set

#### Returns

`null` \| `bigint`

Block number or null if unscheduled

***

### hardforkForForkHash()

> **hardforkForForkHash**(`forkHash`): `null` \| [`HardforkTransitionConfig`](../interfaces/HardforkTransitionConfig.md)

<<<<<<< HEAD
Defined in: [common.ts:680](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L680)
=======
Defined in: [common.ts:676](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L676)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### forkHash

`string`

Fork hash as a hex string

#### Returns

`null` \| [`HardforkTransitionConfig`](../interfaces/HardforkTransitionConfig.md)

Array with hardfork data (name, block, forkHash)

***

### hardforkGteHardfork()

> **hardforkGteHardfork**(`hardfork1`, `hardfork2`): `boolean`

<<<<<<< HEAD
Defined in: [common.ts:483](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L483)
=======
Defined in: [common.ts:480](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L480)
>>>>>>> b7777441e (ethereumjs-monoepo)

Sequence based check if given or set HF1 is greater than or equal HF2

#### Parameters

##### hardfork1

Hardfork name or null (if set)

`null` | `string`

##### hardfork2

`string`

Hardfork name

#### Returns

`boolean`

True if HF1 gte HF2

***

### hardforkIsActiveOnBlock()

> **hardforkIsActiveOnBlock**(`hardfork`, `blockNumber`): `boolean`

<<<<<<< HEAD
Defined in: [common.ts:457](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L457)
=======
Defined in: [common.ts:454](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L454)
>>>>>>> b7777441e (ethereumjs-monoepo)

Checks if set or provided hardfork is active on block number

#### Parameters

##### hardfork

Hardfork name or null (for HF set)

`null` | `string`

##### blockNumber

`BigIntLike`

#### Returns

`boolean`

True if HF is active on block number

***

### hardforks()

> **hardforks**(): [`HardforkTransitionConfig`](../interfaces/HardforkTransitionConfig.md)[]

<<<<<<< HEAD
Defined in: [common.ts:717](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L717)
=======
Defined in: [common.ts:713](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L713)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the hardforks for current chain

#### Returns

[`HardforkTransitionConfig`](../interfaces/HardforkTransitionConfig.md)[]

Array with arrays of hardforks

***

### hardforkTimestamp()

<<<<<<< HEAD
> **hardforkTimestamp**(`hardfork?`): `null` \| `bigint`

Defined in: [common.ts:521](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L521)
=======
> **hardforkTimestamp**(`hardfork`?): `null` \| `bigint`

Defined in: [common.ts:518](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L518)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### hardfork?

`string`

#### Returns

`null` \| `bigint`

***

### isActivatedEIP()

> **isActivatedEIP**(`eip`): `boolean`

<<<<<<< HEAD
Defined in: [common.ts:444](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L444)
=======
Defined in: [common.ts:441](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L441)
>>>>>>> b7777441e (ethereumjs-monoepo)

Checks if an EIP is activated by either being included in the EIPs
manually passed in with the [CommonOpts.eips](../interfaces/BaseOpts.md#eips) or in a
hardfork currently being active

Note: this method only works for EIPs being supported
by the [CommonOpts.eips](../interfaces/BaseOpts.md#eips) constructor option

#### Parameters

##### eip

`number`

#### Returns

`boolean`

***

### nextHardforkBlockOrTimestamp()

<<<<<<< HEAD
> **nextHardforkBlockOrTimestamp**(`hardfork?`): `null` \| `bigint`

Defined in: [common.ts:571](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L571)
=======
> **nextHardforkBlockOrTimestamp**(`hardfork`?): `null` \| `bigint`

Defined in: [common.ts:568](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L568)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the change block for the next hardfork after the hardfork provided or set

#### Parameters

##### hardfork?

`string`

Hardfork name, optional if HF set

#### Returns

`null` \| `bigint`

Block timestamp, number or null if not available

***

### param()

> **param**(`name`): `bigint`

<<<<<<< HEAD
Defined in: [common.ts:360](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L360)
=======
Defined in: [common.ts:357](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L357)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns a parameter for the current chain setup

If the parameter is present in an EIP, the EIP always takes precedence.
Otherwise the parameter is taken from the latest applied HF with
a change on the respective parameter.

#### Parameters

##### name

`string`

Parameter name (e.g. 'minGasLimit')

#### Returns

`bigint`

The value requested (throws if not found)

***

### paramByBlock()

<<<<<<< HEAD
> **paramByBlock**(`name`, `blockNumber`, `timestamp?`): `bigint`

Defined in: [common.ts:430](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L430)
=======
> **paramByBlock**(`name`, `blockNumber`, `timestamp`?): `bigint`

Defined in: [common.ts:427](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L427)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns a parameter for the hardfork active on block number or
optional provided total difficulty (Merge HF)

#### Parameters

##### name

`string`

Parameter name

##### blockNumber

`BigIntLike`

Block number
   *

##### timestamp?

`BigIntLike`

#### Returns

`bigint`

The value requested or `BigInt(0)` if not found

***

### paramByEIP()

> **paramByEIP**(`name`, `eip`): `undefined` \| `bigint`

<<<<<<< HEAD
Defined in: [common.ts:410](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L410)
=======
Defined in: [common.ts:407](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L407)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns a parameter corresponding to an EIP

#### Parameters

##### name

`string`

Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)

##### eip

`number`

Number of the EIP

#### Returns

`undefined` \| `bigint`

The value requested (throws if not found)

***

### paramByHardfork()

> **paramByHardfork**(`name`, `hardfork`): `bigint`

<<<<<<< HEAD
Defined in: [common.ts:376](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L376)
=======
Defined in: [common.ts:373](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L373)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the parameter corresponding to a hardfork

#### Parameters

##### name

`string`

Parameter name (e.g. 'minGasLimit')

##### hardfork

`string`

Hardfork name

#### Returns

`bigint`

The value requested (throws if not found)

***

### resetParams()

> **resetParams**(`params`): `void`

<<<<<<< HEAD
Defined in: [common.ts:135](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L135)
=======
Defined in: [common.ts:134](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L134)
>>>>>>> b7777441e (ethereumjs-monoepo)

Fully resets the internal Common EIP params set with the values provided.

Example Format:

```ts
{
  1559: {
    initialBaseFee: 1000000000,
  }
}
```

#### Parameters

##### params

[`ParamsDict`](../type-aliases/ParamsDict.md)

#### Returns

`void`

***

### setEIPs()

> **setEIPs**(`eips`): `void`

<<<<<<< HEAD
Defined in: [common.ts:275](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L275)
=======
Defined in: [common.ts:274](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L274)
>>>>>>> b7777441e (ethereumjs-monoepo)

Sets the active EIPs

#### Parameters

##### eips

`number`[] = `[]`

#### Returns

`void`

***

### setForkHashes()

> **setForkHashes**(`genesisHash`): `void`

<<<<<<< HEAD
Defined in: [common.ts:692](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L692)
=======
Defined in: [common.ts:688](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L688)
>>>>>>> b7777441e (ethereumjs-monoepo)

Sets any missing forkHashes on the passed-in Common instance

#### Parameters

##### genesisHash

`Uint8Array`

The genesis block hash

#### Returns

`void`

***

### setHardfork()

> **setHardfork**(`hardfork`): `void`

<<<<<<< HEAD
Defined in: [common.ts:144](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L144)
=======
Defined in: [common.ts:143](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L143)
>>>>>>> b7777441e (ethereumjs-monoepo)

Sets the hardfork to get params for

#### Parameters

##### hardfork

`string`

<<<<<<< HEAD
String identifier (e.g. 'byzantium') or [Hardfork](../variables/Hardfork.md) enum
=======
String identifier (e.g. 'byzantium') or [Hardfork](../enumerations/Hardfork.md) enum
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`void`

***

### setHardforkBy()

> **setHardforkBy**(`opts`): `string`

<<<<<<< HEAD
Defined in: [common.ts:252](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L252)
=======
Defined in: [common.ts:251](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L251)
>>>>>>> b7777441e (ethereumjs-monoepo)

Sets a new hardfork either based on block number (older HFs) or
timestamp (Shanghai upwards).

#### Parameters

##### opts

[`HardforkByOpts`](../interfaces/HardforkByOpts.md)

#### Returns

`string`

The name of the HF set

***

### updateParams()

> **updateParams**(`params`): `void`

<<<<<<< HEAD
Defined in: [common.ts:108](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L108)
=======
Defined in: [common.ts:107](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/common.ts#L107)
>>>>>>> b7777441e (ethereumjs-monoepo)

Update the internal Common EIP params set. Existing values
will get preserved unless there is a new value for a parameter
provided with params.

Example Format:

```ts
{
  1559: {
    initialBaseFee: 1000000000,
  }
}
```

#### Parameters

##### params

[`ParamsDict`](../type-aliases/ParamsDict.md)

#### Returns

`void`
