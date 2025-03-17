[**@ethereumjs/devp2p**](../README.md)

***

[@ethereumjs/devp2p](../README.md) / ECIES

# Class: ECIES

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:61](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L61)

## Constructors

### Constructor

> **new ECIES**(`privateKey`, `id`, `remoteId`, `common?`): `ECIES`

Defined in: [packages/devp2p/src/rlpx/ecies.ts:90](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L90)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:53](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L53)

## Constructors

### new ECIES()

> **new ECIES**(`privateKey`, `id`, `remoteId`, `common`?): `ECIES`

Defined in: [packages/devp2p/src/rlpx/ecies.ts:88](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L88)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### privateKey

`Uint8Array`

##### id

`Uint8Array`

##### remoteId

`Uint8Array`

##### common?

`Common`

#### Returns

`ECIES`

## Methods

### \_decryptMessage()

> **\_decryptMessage**(`data`, `sharedMacData`): `Uint8Array`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:133](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L133)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:131](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L131)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### data

`Uint8Array`

##### sharedMacData

`null` | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`Uint8Array`

***

### \_encryptMessage()

> **\_encryptMessage**(`data`, `sharedMacData`): `undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:104](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L104)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:102](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L102)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### data

`Uint8Array`

##### sharedMacData

`null` | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

***

### \_setupFrame()

> **\_setupFrame**(`remoteData`, `incoming`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:168](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L168)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:166](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L166)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### remoteData

`Uint8Array`

##### incoming

`boolean`

#### Returns

`void`

***

### createAckEIP8()

> **createAckEIP8**(): `undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:303](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L303)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:296](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L296)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

***

### createAckOld()

> **createAckOld**(): `undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:320](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L320)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:313](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L313)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

***

### createAuthEIP8()

> **createAuthEIP8**(): `undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:192](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L192)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:190](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L190)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

***

### createAuthNonEIP8()

> **createAuthNonEIP8**(): `undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:219](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L219)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:213](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L213)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

***

### createBlockHeader()

> **createBlockHeader**(`size`): `undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:366](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L366)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:359](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L359)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### size

`number`

#### Returns

`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

***

### createBody()

> **createBody**(`data`): `undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:397](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L397)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:390](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L390)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### data

`Uint8Array`

#### Returns

`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

***

### parseAckEIP8()

> **parseAckEIP8**(`data`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:360](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L360)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:353](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L353)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### data

`Uint8Array`

#### Returns

`void`

***

### parseAckPlain()

> **parseAckPlain**(`data`, `sharedMacData`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:330](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L330)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:323](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L323)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### data

`Uint8Array`

##### sharedMacData

`null` | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`void`

***

### parseAuthEIP8()

> **parseAuthEIP8**(`data`): `void`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:297](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L297)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:290](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L290)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### data

`Uint8Array`

#### Returns

`void`

***

### parseAuthPlain()

> **parseAuthPlain**(`data`, `sharedMacData`): `undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:237](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L237)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:230](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L230)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### data

`Uint8Array`

##### sharedMacData

`null` | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

***

### parseBody()

> **parseBody**(`data`): `undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:408](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L408)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:401](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L401)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### data

`Uint8Array`

#### Returns

`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>

***

### parseHeader()

> **parseHeader**(`data`): `undefined` \| `number`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/rlpx/ecies.ts:381](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L381)
=======
Defined in: [packages/devp2p/src/rlpx/ecies.ts:374](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/rlpx/ecies.ts#L374)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### data

`Uint8Array`

#### Returns

`undefined` \| `number`
