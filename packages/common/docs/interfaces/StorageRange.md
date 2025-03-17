[**@ethereumjs/common**](../README.md)

***

[@ethereumjs/common](../README.md) / StorageRange

# Interface: StorageRange

<<<<<<< HEAD
Defined in: [interfaces.ts:20](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L20)
=======
Defined in: [interfaces.ts:14](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L14)
>>>>>>> b7777441e (ethereumjs-monoepo)

Object that can contain a set of storage keys associated with an account.

## Properties

### nextKey

> **nextKey**: `null` \| `string`

<<<<<<< HEAD
Defined in: [interfaces.ts:37](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L37)
=======
Defined in: [interfaces.ts:31](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L31)
>>>>>>> b7777441e (ethereumjs-monoepo)

The next (hashed) storage key after the greatest storage key
contained in `storage`.

***

### storage

> **storage**: `object`

<<<<<<< HEAD
Defined in: [interfaces.ts:27](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L27)
=======
Defined in: [interfaces.ts:21](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/common/src/interfaces.ts#L21)
>>>>>>> b7777441e (ethereumjs-monoepo)

A dictionary where the keys are hashed storage keys, and the values are
objects containing the preimage of the hashed key (in `key`) and the
storage key (in `value`). Currently, there is no way to retrieve preimages,
so they are always `null`.

#### Index Signature

\[`key`: `string`\]: `object`
