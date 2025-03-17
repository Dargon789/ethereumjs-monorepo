[**@ethereumjs/tx**](../README.md)

***

[@ethereumjs/tx](../README.md) / EIP1559CompatibleTx

# Interface: EIP1559CompatibleTx\<T\>

<<<<<<< HEAD
Defined in: [types.ts:249](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L249)
=======
Defined in: [types.ts:245](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L245)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Extends

- [`EIP2930CompatibleTx`](EIP2930CompatibleTx.md)\<`T`\>

## Extended by

- [`EIP4844CompatibleTx`](EIP4844CompatibleTx.md)
- [`EIP7702CompatibleTx`](EIP7702CompatibleTx.md)

## Type Parameters

### T

<<<<<<< HEAD
`T` *extends* [`TransactionType`](../type-aliases/TransactionType.md) = [`TransactionType`](../type-aliases/TransactionType.md)
=======
`T` *extends* [`TransactionType`](../enumerations/TransactionType.md) = [`TransactionType`](../enumerations/TransactionType.md)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Properties

### accessList

> `readonly` **accessList**: [`AccessListBytes`](../type-aliases/AccessListBytes.md)

<<<<<<< HEAD
Defined in: [types.ts:246](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L246)
=======
Defined in: [types.ts:241](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L241)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`accessList`](EIP2930CompatibleTx.md#accesslist)

***
<<<<<<< HEAD
=======

### AccessListJSON

> `readonly` **AccessListJSON**: [`AccessList`](../type-aliases/AccessList.md)

Defined in: [types.ts:242](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L242)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`AccessListJSON`](EIP2930CompatibleTx.md#accesslistjson)

***
>>>>>>> b7777441e (ethereumjs-monoepo)

### cache

> `readonly` **cache**: [`TransactionCache`](TransactionCache.md)

<<<<<<< HEAD
Defined in: [types.ts:203](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L203)
=======
Defined in: [types.ts:198](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L198)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`cache`](EIP2930CompatibleTx.md#cache)

***

### chainId

> `readonly` **chainId**: `bigint`

<<<<<<< HEAD
Defined in: [types.ts:240](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L240)
=======
Defined in: [types.ts:235](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L235)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`chainId`](EIP2930CompatibleTx.md#chainid)

***

### common

> `readonly` **common**: `Common`

<<<<<<< HEAD
Defined in: [types.ts:194](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L194)
=======
Defined in: [types.ts:189](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L189)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`common`](EIP2930CompatibleTx.md#common)

***

### data

> `readonly` **data**: `Uint8Array`

<<<<<<< HEAD
Defined in: [types.ts:199](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L199)
=======
Defined in: [types.ts:194](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L194)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`data`](EIP2930CompatibleTx.md#data)

***

### gasLimit

> `readonly` **gasLimit**: `bigint`

<<<<<<< HEAD
Defined in: [types.ts:196](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L196)
=======
Defined in: [types.ts:191](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L191)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`gasLimit`](EIP2930CompatibleTx.md#gaslimit)

***

### maxFeePerGas

> `readonly` **maxFeePerGas**: `bigint`

<<<<<<< HEAD
Defined in: [types.ts:252](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L252)
=======
Defined in: [types.ts:248](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L248)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### maxPriorityFeePerGas

> `readonly` **maxPriorityFeePerGas**: `bigint`

<<<<<<< HEAD
Defined in: [types.ts:251](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L251)
=======
Defined in: [types.ts:247](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L247)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### nonce

> `readonly` **nonce**: `bigint`

<<<<<<< HEAD
Defined in: [types.ts:195](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L195)
=======
Defined in: [types.ts:190](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L190)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`nonce`](EIP2930CompatibleTx.md#nonce)

***

### r?

> `readonly` `optional` **r**: `bigint`

<<<<<<< HEAD
Defined in: [types.ts:201](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L201)
=======
Defined in: [types.ts:196](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L196)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`r`](EIP2930CompatibleTx.md#r)

***

### s?

> `readonly` `optional` **s**: `bigint`

<<<<<<< HEAD
Defined in: [types.ts:202](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L202)
=======
Defined in: [types.ts:197](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L197)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`s`](EIP2930CompatibleTx.md#s)

***

### to?

> `readonly` `optional` **to**: `Address`

<<<<<<< HEAD
Defined in: [types.ts:197](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L197)
=======
Defined in: [types.ts:192](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L192)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`to`](EIP2930CompatibleTx.md#to)

***

### txOptions

> **txOptions**: [`TxOptions`](TxOptions.md)

<<<<<<< HEAD
Defined in: [types.ts:206](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L206)
=======
Defined in: [types.ts:201](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L201)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`txOptions`](EIP2930CompatibleTx.md#txoptions)

***

### type

<<<<<<< HEAD
> **type**: [`TransactionType`](../type-aliases/TransactionType.md)

Defined in: [types.ts:205](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L205)
=======
> **type**: [`TransactionType`](../enumerations/TransactionType.md)

Defined in: [types.ts:200](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L200)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`type`](EIP2930CompatibleTx.md#type)

***

### v?

> `readonly` `optional` **v**: `bigint`

<<<<<<< HEAD
Defined in: [types.ts:200](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L200)
=======
Defined in: [types.ts:195](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L195)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`v`](EIP2930CompatibleTx.md#v)

***

### value

> `readonly` **value**: `bigint`

<<<<<<< HEAD
Defined in: [types.ts:198](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L198)
=======
Defined in: [types.ts:193](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L193)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`value`](EIP2930CompatibleTx.md#value)

## Methods

### addSignature()

<<<<<<< HEAD
> **addSignature**(`v`, `r`, `s`, `convertV?`): [`Transaction`](Transaction.md)\[`T`\]

Defined in: [types.ts:227](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L227)
=======
> **addSignature**(`v`, `r`, `s`, `convertV`?): [`Transaction`](Transaction.md)\[`T`\]

Defined in: [types.ts:222](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L222)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### v

`bigint`

##### r

`bigint` | `Uint8Array`\<`ArrayBufferLike`\>

##### s

`bigint` | `Uint8Array`\<`ArrayBufferLike`\>

##### convertV?

`boolean`

#### Returns

[`Transaction`](Transaction.md)\[`T`\]

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`addSignature`](EIP2930CompatibleTx.md#addsignature)

***

### errorStr()

> **errorStr**(): `string`

<<<<<<< HEAD
Defined in: [types.ts:225](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L225)
=======
Defined in: [types.ts:220](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L220)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`string`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`errorStr`](EIP2930CompatibleTx.md#errorstr)

***

### getDataGas()

> **getDataGas**(): `bigint`

<<<<<<< HEAD
Defined in: [types.ts:208](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L208)
=======
Defined in: [types.ts:203](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L203)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`bigint`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`getDataGas`](EIP2930CompatibleTx.md#getdatagas)

***

### getHashedMessageToSign()

> **getHashedMessageToSign**(): `Uint8Array`

<<<<<<< HEAD
Defined in: [types.ts:214](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L214)
=======
Defined in: [types.ts:209](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L209)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Uint8Array`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`getHashedMessageToSign`](EIP2930CompatibleTx.md#gethashedmessagetosign)

***

### getIntrinsicGas()

> **getIntrinsicGas**(): `bigint`

<<<<<<< HEAD
Defined in: [types.ts:207](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L207)
=======
Defined in: [types.ts:202](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L202)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`bigint`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`getIntrinsicGas`](EIP2930CompatibleTx.md#getintrinsicgas)

***

### getMessageToSign()

> **getMessageToSign**(): `Uint8Array`

<<<<<<< HEAD
Defined in: [types.ts:241](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L241)
=======
Defined in: [types.ts:236](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L236)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Uint8Array`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`getMessageToSign`](EIP2930CompatibleTx.md#getmessagetosign)

***

### getMessageToVerifySignature()

> **getMessageToVerifySignature**(): `Uint8Array`

<<<<<<< HEAD
Defined in: [types.ts:216](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L216)
=======
Defined in: [types.ts:211](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L211)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Uint8Array`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`getMessageToVerifySignature`](EIP2930CompatibleTx.md#getmessagetoverifysignature)

***

### getSenderAddress()

> **getSenderAddress**(): `Address`

<<<<<<< HEAD
Defined in: [types.ts:221](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L221)
=======
Defined in: [types.ts:216](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L216)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Address`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`getSenderAddress`](EIP2930CompatibleTx.md#getsenderaddress)

***

### getSenderPublicKey()

> **getSenderPublicKey**(): `Uint8Array`

<<<<<<< HEAD
Defined in: [types.ts:222](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L222)
=======
Defined in: [types.ts:217](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L217)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Uint8Array`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`getSenderPublicKey`](EIP2930CompatibleTx.md#getsenderpublickey)

***

### getUpfrontCost()

> **getUpfrontCost**(): `bigint`

<<<<<<< HEAD
Defined in: [types.ts:209](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L209)
=======
Defined in: [types.ts:204](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L204)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`bigint`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`getUpfrontCost`](EIP2930CompatibleTx.md#getupfrontcost)

***

### getValidationErrors()

> **getValidationErrors**(): `string`[]

<<<<<<< HEAD
Defined in: [types.ts:217](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L217)
=======
Defined in: [types.ts:212](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L212)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`string`[]

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`getValidationErrors`](EIP2930CompatibleTx.md#getvalidationerrors)

***

### hash()

> **hash**(): `Uint8Array`

<<<<<<< HEAD
Defined in: [types.ts:215](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L215)
=======
Defined in: [types.ts:210](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L210)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Uint8Array`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`hash`](EIP2930CompatibleTx.md#hash)

***

### isSigned()

> **isSigned**(): `boolean`

<<<<<<< HEAD
Defined in: [types.ts:218](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L218)
=======
Defined in: [types.ts:213](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L213)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`boolean`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`isSigned`](EIP2930CompatibleTx.md#issigned)

***

### isValid()

> **isValid**(): `boolean`

<<<<<<< HEAD
Defined in: [types.ts:219](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L219)
=======
Defined in: [types.ts:214](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L214)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`boolean`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`isValid`](EIP2930CompatibleTx.md#isvalid)

***

### raw()

> **raw**(): [`TxValuesArray`](TxValuesArray.md)\[`T`\]

<<<<<<< HEAD
Defined in: [types.ts:211](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L211)
=======
Defined in: [types.ts:206](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L206)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

[`TxValuesArray`](TxValuesArray.md)\[`T`\]

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`raw`](EIP2930CompatibleTx.md#raw)

***

### serialize()

> **serialize**(): `Uint8Array`

<<<<<<< HEAD
Defined in: [types.ts:212](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L212)
=======
Defined in: [types.ts:207](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L207)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`Uint8Array`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`serialize`](EIP2930CompatibleTx.md#serialize)

***

### sign()

<<<<<<< HEAD
> **sign**(`privateKey`, `extraEntropy?`): [`Transaction`](Transaction.md)\[`T`\]

Defined in: [types.ts:223](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L223)
=======
> **sign**(`privateKey`): [`Transaction`](Transaction.md)\[`T`\]

Defined in: [types.ts:218](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L218)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### privateKey

`Uint8Array`
<<<<<<< HEAD

##### extraEntropy?

`boolean` | `Uint8Array`\<`ArrayBufferLike`\>
=======
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

[`Transaction`](Transaction.md)\[`T`\]

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`sign`](EIP2930CompatibleTx.md#sign)

***

### supports()

> **supports**(`capability`): `boolean`

<<<<<<< HEAD
Defined in: [types.ts:204](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L204)
=======
Defined in: [types.ts:199](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L199)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### capability

<<<<<<< HEAD
`number`
=======
[`Capability`](../enumerations/Capability.md)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`boolean`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`supports`](EIP2930CompatibleTx.md#supports)

***

### toCreationAddress()

> **toCreationAddress**(): `boolean`

<<<<<<< HEAD
Defined in: [types.ts:210](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L210)
=======
Defined in: [types.ts:205](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L205)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`boolean`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`toCreationAddress`](EIP2930CompatibleTx.md#tocreationaddress)

***

### toJSON()

> **toJSON**(): [`JSONTx`](JSONTx.md)

<<<<<<< HEAD
Defined in: [types.ts:224](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L224)
=======
Defined in: [types.ts:219](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L219)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

[`JSONTx`](JSONTx.md)

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`toJSON`](EIP2930CompatibleTx.md#tojson)

***

### verifySignature()

> **verifySignature**(): `boolean`

<<<<<<< HEAD
Defined in: [types.ts:220](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L220)
=======
Defined in: [types.ts:215](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L215)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`boolean`

#### Inherited from

[`EIP2930CompatibleTx`](EIP2930CompatibleTx.md).[`verifySignature`](EIP2930CompatibleTx.md#verifysignature)
