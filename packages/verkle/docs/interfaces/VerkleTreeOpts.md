[**@ethereumjs/verkle**](../README.md)

***

[@ethereumjs/verkle](../README.md) / VerkleTreeOpts

# Interface: VerkleTreeOpts

<<<<<<< HEAD
Defined in: [types.ts:10](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/types.ts#L10)
=======
Defined in: [types.ts:10](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/types.ts#L10)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Properties

### cacheSize

> **cacheSize**: `number`

<<<<<<< HEAD
Defined in: [types.ts:35](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/types.ts#L35)
=======
Defined in: [types.ts:35](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/types.ts#L35)
>>>>>>> b7777441e (ethereumjs-monoepo)

LRU cache for tree nodes to allow for faster node retrieval.

Default: 0 (deactivated)

***

### db

> **db**: `DB`\<`Uint8Array`\<`ArrayBufferLike`\>, `Uint8Array`\<`ArrayBufferLike`\>\>

<<<<<<< HEAD
Defined in: [types.ts:18](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/types.ts#L18)
=======
Defined in: [types.ts:18](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/types.ts#L18)
>>>>>>> b7777441e (ethereumjs-monoepo)

A database instance.

***

### root?

> `optional` **root**: `Uint8Array`\<`ArrayBufferLike`\>

<<<<<<< HEAD
Defined in: [types.ts:23](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/types.ts#L23)
=======
Defined in: [types.ts:23](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/types.ts#L23)
>>>>>>> b7777441e (ethereumjs-monoepo)

A `Uint8Array` for the root of a previously stored tree

***

### useRootPersistence

> **useRootPersistence**: `boolean`

<<<<<<< HEAD
Defined in: [types.ts:28](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/types.ts#L28)
=======
Defined in: [types.ts:28](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/types.ts#L28)
>>>>>>> b7777441e (ethereumjs-monoepo)

Store the root inside the database after every `write` operation

***

### verkleCrypto

> **verkleCrypto**: `VerkleCrypto`

<<<<<<< HEAD
Defined in: [types.ts:14](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/types.ts#L14)
=======
Defined in: [types.ts:14](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/types.ts#L14)
>>>>>>> b7777441e (ethereumjs-monoepo)

An instantiated Verkle Cryptography interface
