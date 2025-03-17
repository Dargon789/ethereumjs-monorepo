[**@ethereumjs/verkle**](../README.md)

***

[@ethereumjs/verkle](../README.md) / CheckpointDB

# Class: CheckpointDB

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:11](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L11)
=======
Defined in: [db/checkpoint.ts:11](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L11)
>>>>>>> b7777441e (ethereumjs-monoepo)

DB is a thin wrapper around the underlying levelup db,
which validates inputs and sets encoding type.

## Implements

- `DB`

## Constructors

<<<<<<< HEAD
### Constructor

> **new CheckpointDB**(`opts`): `CheckpointDB`

Defined in: [db/checkpoint.ts:43](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L43)
=======
### new CheckpointDB()

> **new CheckpointDB**(`opts`): `CheckpointDB`

Defined in: [db/checkpoint.ts:43](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L43)
>>>>>>> b7777441e (ethereumjs-monoepo)

Initialize a DB instance.

#### Parameters

##### opts

[`CheckpointDBOpts`](../interfaces/CheckpointDBOpts.md)

#### Returns

`CheckpointDB`

## Properties

### \_stats

> **\_stats**: `object`

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:27](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L27)
=======
Defined in: [db/checkpoint.ts:27](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L27)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### cache

> **cache**: `object`

##### cache.hits

> **hits**: `number` = `0`

##### cache.reads

> **reads**: `number` = `0`

##### cache.writes

> **writes**: `number` = `0`

#### db

> **db**: `object`

##### db.hits

> **hits**: `number` = `0`

##### db.reads

> **reads**: `number` = `0`

##### db.writes

> **writes**: `number` = `0`

***

### cacheSize

> `readonly` **cacheSize**: `number`

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:14](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L14)
=======
Defined in: [db/checkpoint.ts:14](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L14)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### checkpoints

> **checkpoints**: [`Checkpoint`](../type-aliases/Checkpoint.md)[]

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:12](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L12)
=======
Defined in: [db/checkpoint.ts:12](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L12)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### db

> **db**: `DB`\<`Uint8Array`\<`ArrayBufferLike`\>, `Uint8Array`\<`ArrayBufferLike`\>\>

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:13](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L13)
=======
Defined in: [db/checkpoint.ts:13](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L13)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Methods

### batch()

> **batch**(`opStack`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:217](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L217)
=======
Defined in: [db/checkpoint.ts:217](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L217)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### opStack

`BatchDBOp`[]

#### Returns

`Promise`\<`void`\>

#### Inherit Doc

#### Implementation of

`DB.batch`

***

### checkpoint()

> **checkpoint**(`root`): `void`

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:83](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L83)
=======
Defined in: [db/checkpoint.ts:83](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L83)
>>>>>>> b7777441e (ethereumjs-monoepo)

Adds a new checkpoint to the stack

#### Parameters

##### root

`Uint8Array`

#### Returns

`void`

***

### commit()

> **commit**(): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:90](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L90)
=======
Defined in: [db/checkpoint.ts:90](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L90)
>>>>>>> b7777441e (ethereumjs-monoepo)

Commits the latest checkpoint

#### Returns

`Promise`\<`void`\>

***

### del()

> **del**(`key`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:195](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L195)
=======
Defined in: [db/checkpoint.ts:195](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L195)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### key

`Uint8Array`

#### Returns

`Promise`\<`void`\>

#### Inherit Doc

#### Implementation of

`DB.del`

***

### get()

> **get**(`key`): `Promise`\<`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>\>

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:134](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L134)
=======
Defined in: [db/checkpoint.ts:134](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L134)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### key

`Uint8Array`

#### Returns

`Promise`\<`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>\>

#### Inherit Doc

#### Implementation of

`DB.get`

***

### hasCheckpoints()

> **hasCheckpoints**(): `boolean`

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:75](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L75)
=======
Defined in: [db/checkpoint.ts:75](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L75)
>>>>>>> b7777441e (ethereumjs-monoepo)

Is the DB during a checkpoint phase?

#### Returns

`boolean`

***

### open()

> **open**(): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:268](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L268)
=======
Defined in: [db/checkpoint.ts:268](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L268)
>>>>>>> b7777441e (ethereumjs-monoepo)

Opens the database -- if applicable

#### Returns

`Promise`\<`void`\>

#### Implementation of

`DB.open`

***

### put()

> **put**(`key`, `value`): `Promise`\<`void`\>

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:173](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L173)
=======
Defined in: [db/checkpoint.ts:173](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L173)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### key

`Uint8Array`

##### value

`Uint8Array`

#### Returns

`Promise`\<`void`\>

#### Inherit Doc

#### Implementation of

`DB.put`

***

### revert()

> **revert**(): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:126](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L126)
=======
Defined in: [db/checkpoint.ts:126](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L126)
>>>>>>> b7777441e (ethereumjs-monoepo)

Reverts the latest checkpoint

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### setCheckpoints()

> **setCheckpoints**(`checkpoints`): `void`

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:61](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L61)
=======
Defined in: [db/checkpoint.ts:61](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L61)
>>>>>>> b7777441e (ethereumjs-monoepo)

Flush the checkpoints and use the given checkpoints instead.

#### Parameters

##### checkpoints

[`Checkpoint`](../type-aliases/Checkpoint.md)[]

#### Returns

`void`

***

### shallowCopy()

> **shallowCopy**(): `CheckpointDB`

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:264](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L264)
=======
Defined in: [db/checkpoint.ts:264](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L264)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Returns

`CheckpointDB`

#### Inherit Doc

#### Implementation of

`DB.shallowCopy`

***

### stats()

> **stats**(`reset`): `object`

<<<<<<< HEAD
Defined in: [db/checkpoint.ts:242](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L242)
=======
Defined in: [db/checkpoint.ts:242](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/verkle/src/db/checkpoint.ts#L242)
>>>>>>> b7777441e (ethereumjs-monoepo)

#### Parameters

##### reset

`boolean` = `true`

#### Returns

`object`

##### cache

> **cache**: `object`

###### cache.hits

> **hits**: `number` = `0`

###### cache.reads

> **reads**: `number` = `0`

###### cache.writes

> **writes**: `number` = `0`

##### db

> **db**: `object`

###### db.hits

> **hits**: `number` = `0`

###### db.reads

> **reads**: `number` = `0`

###### db.writes

> **writes**: `number` = `0`

##### size

> **size**: `number`
