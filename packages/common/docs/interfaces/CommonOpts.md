[**@ethereumjs/common**](../README.md)

***

[@ethereumjs/common](../README.md) / CommonOpts

# Interface: CommonOpts

<<<<<<< HEAD
Defined in: [types.ts:149](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/types.ts#L149)
=======
Defined in: [types.ts:151](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/types.ts#L151)
>>>>>>> b7777441e (ethereumjs-monoepo)

Options for instantiating a [Common](../classes/Common.md) instance.

## Extends

- [`BaseOpts`](BaseOpts.md)

## Properties

### chain

> **chain**: [`ChainConfig`](ChainConfig.md)

<<<<<<< HEAD
Defined in: [types.ts:154](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/types.ts#L154)
=======
Defined in: [types.ts:156](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/types.ts#L156)
>>>>>>> b7777441e (ethereumjs-monoepo)

The chain configuration to be used. There are available configuration object for mainnet
(`Mainnet`) and the currently active testnets which can be directly used.

***

### customCrypto?

> `optional` **customCrypto**: [`CustomCrypto`](CustomCrypto.md)

<<<<<<< HEAD
Defined in: [types.ts:143](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/types.ts#L143)
=======
Defined in: [types.ts:145](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/types.ts#L145)
>>>>>>> b7777441e (ethereumjs-monoepo)

This option can be used to replace the most common crypto primitives
(keccak256 hashing e.g.) within the EthereumJS ecosystem libraries
with alternative implementations (e.g. more performant WASM libraries).

Note: please be aware that this is adding new dependencies for your
system setup to be used for sensitive/core parts of the functionality
and a choice on the libraries to add should be handled with care
and be made with eventual security implications considered.

#### Inherited from

[`BaseOpts`](BaseOpts.md).[`customCrypto`](BaseOpts.md#customcrypto)

***

### eips?

> `optional` **eips**: `number`[]

<<<<<<< HEAD
Defined in: [types.ts:114](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/types.ts#L114)
=======
Defined in: [types.ts:116](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/types.ts#L116)
>>>>>>> b7777441e (ethereumjs-monoepo)

Selected EIPs which can be activated, please use an array for instantiation
(e.g. `eips: [ 2537, ]`)

Currently supported:

- [EIP-2537](https://eips.ethereum.org/EIPS/eip-2537) - BLS12-381 precompiles

#### Inherited from

[`BaseOpts`](BaseOpts.md).[`eips`](BaseOpts.md#eips)

***

### hardfork?

> `optional` **hardfork**: `string`

<<<<<<< HEAD
Defined in: [types.ts:105](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/types.ts#L105)

String identifier ('byzantium') for hardfork or [Hardfork](../variables/Hardfork.md) enum.
=======
Defined in: [types.ts:107](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/types.ts#L107)

String identifier ('byzantium') for hardfork or [Hardfork](../enumerations/Hardfork.md) enum.
>>>>>>> b7777441e (ethereumjs-monoepo)

Default: Hardfork.London

#### Inherited from

[`BaseOpts`](BaseOpts.md).[`hardfork`](BaseOpts.md#hardfork)

***

### params?

> `optional` **params**: [`ParamsDict`](../type-aliases/ParamsDict.md)

<<<<<<< HEAD
Defined in: [types.ts:132](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/types.ts#L132)
=======
Defined in: [types.ts:134](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/types.ts#L134)
>>>>>>> b7777441e (ethereumjs-monoepo)

Optionally pass in an EIP params dictionary, see one of the
EthereumJS library `params.ts` files for an example (e.g. tx, evm).
By default parameters are set by the respective library, so this
is only relevant if you want to use EthereumJS libraries with a
custom parameter set.

Example Format:

```ts
{
  1559: {
    initialBaseFee: 1000000000,
  }
}
```

#### Inherited from

[`BaseOpts`](BaseOpts.md).[`params`](BaseOpts.md#params)
