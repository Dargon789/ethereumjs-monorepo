[**@ethereumjs/util**](../README.md)

***

[@ethereumjs/util](../README.md) / DB

# Interface: DB\<TKey, TValue\>

<<<<<<< HEAD
Defined in: [packages/util/src/db.ts:45](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L45)
=======
Defined in: [packages/util/src/db.ts:41](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L41)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Type Parameters

### TKey

`TKey` *extends* `Uint8Array` \| `string` \| `number` = `Uint8Array`

### TValue

`TValue` *extends* `Uint8Array` \| `string` \| [`DBObject`](../type-aliases/DBObject.md) = `Uint8Array`

## Methods

### batch()

> **batch**(`opStack`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [packages/util/src/db.ts:73](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L73)
=======
Defined in: [packages/util/src/db.ts:69](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L69)
>>>>>>> b7777441e (ethereumjs-monoepo)

Performs a batch operation on db.

#### Parameters

##### opStack

[`BatchDBOp`](../type-aliases/BatchDBOp.md)\<`TKey`, `TValue`\>[]

A stack of levelup operations

#### Returns

`Promise`\<`void`\>

***

### del()

<<<<<<< HEAD
> **del**(`key`, `opts?`): `Promise`\<`void`\>

Defined in: [packages/util/src/db.ts:67](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L67)
=======
> **del**(`key`, `opts`?): `Promise`\<`void`\>

Defined in: [packages/util/src/db.ts:63](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L63)
>>>>>>> b7777441e (ethereumjs-monoepo)

Removes a raw value in the underlying db.

#### Parameters

##### key

`TKey`

##### opts?

[`EncodingOpts`](../type-aliases/EncodingOpts.md)

#### Returns

`Promise`\<`void`\>

***

### get()

<<<<<<< HEAD
> **get**(`key`, `opts?`): `Promise`\<`undefined` \| `TValue`\>

Defined in: [packages/util/src/db.ts:54](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L54)
=======
> **get**(`key`, `opts`?): `Promise`\<`undefined` \| `TValue`\>

Defined in: [packages/util/src/db.ts:50](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L50)
>>>>>>> b7777441e (ethereumjs-monoepo)

Retrieves a raw value from db.

#### Parameters

##### key

`TKey`

##### opts?

[`EncodingOpts`](../type-aliases/EncodingOpts.md)

#### Returns

`Promise`\<`undefined` \| `TValue`\>

A Promise that resolves to `Uint8Array` if a value is found or `undefined` if no value is found.

***

### open()

> **open**(): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [packages/util/src/db.ts:84](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L84)
=======
Defined in: [packages/util/src/db.ts:80](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L80)
>>>>>>> b7777441e (ethereumjs-monoepo)

Opens the database -- if applicable

#### Returns

`Promise`\<`void`\>

***

### put()

<<<<<<< HEAD
> **put**(`key`, `val`, `opts?`): `Promise`\<`void`\>

Defined in: [packages/util/src/db.ts:61](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L61)
=======
> **put**(`key`, `val`, `opts`?): `Promise`\<`void`\>

Defined in: [packages/util/src/db.ts:57](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L57)
>>>>>>> b7777441e (ethereumjs-monoepo)

Writes a value directly to db.

#### Parameters

##### key

`TKey`

The key as a `TValue`

##### val

`TValue`

##### opts?

[`EncodingOpts`](../type-aliases/EncodingOpts.md)

#### Returns

`Promise`\<`void`\>

***

### shallowCopy()

> **shallowCopy**(): `DB`\<`TKey`, `TValue`\>

<<<<<<< HEAD
Defined in: [packages/util/src/db.ts:79](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L79)
=======
Defined in: [packages/util/src/db.ts:75](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L75)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns a copy of the DB instance, with a reference
to the **same** underlying db instance.

#### Returns

`DB`\<`TKey`, `TValue`\>
