[**@ethereumjs/mpt**](../README.md)

***

[@ethereumjs/mpt](../README.md) / WalkController

# Class: WalkController

<<<<<<< HEAD
Defined in: [packages/mpt/src/util/walkController.ts:11](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L11)
=======
Defined in: [packages/mpt/src/util/walkController.ts:11](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L11)
>>>>>>> b7777441e (ethereumjs-monoepo)

WalkController is an interface to control how the trie is being traversed.

## Properties

### onNode

> `readonly` **onNode**: [`FoundNodeFunction`](../type-aliases/FoundNodeFunction.md)

<<<<<<< HEAD
Defined in: [packages/mpt/src/util/walkController.ts:12](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L12)
=======
Defined in: [packages/mpt/src/util/walkController.ts:12](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L12)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### taskExecutor

> `readonly` **taskExecutor**: `PrioritizedTaskExecutor`

<<<<<<< HEAD
Defined in: [packages/mpt/src/util/walkController.ts:13](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L13)
=======
Defined in: [packages/mpt/src/util/walkController.ts:13](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L13)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### trie

> `readonly` **trie**: [`MerklePatriciaTrie`](MerklePatriciaTrie.md)

<<<<<<< HEAD
Defined in: [packages/mpt/src/util/walkController.ts:14](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L14)
=======
Defined in: [packages/mpt/src/util/walkController.ts:14](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L14)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Methods

### allChildren()

> **allChildren**(`node`, `key`): `void`

<<<<<<< HEAD
Defined in: [packages/mpt/src/util/walkController.ts:69](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L69)
=======
Defined in: [packages/mpt/src/util/walkController.ts:69](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L69)
>>>>>>> b7777441e (ethereumjs-monoepo)

Run all children of a node. Priority of these nodes are the key length of the children.

#### Parameters

##### node

[`MPTNode`](../type-aliases/MPTNode.md)

Node to get all children of and call onNode on.

##### key

[`Nibbles`](../type-aliases/Nibbles.md) = `[]`

The current `key` which would yield the `node` when trying to get this node with a `get` operation.

#### Returns

`void`

***

### onlyBranchIndex()

<<<<<<< HEAD
> **onlyBranchIndex**(`node`, `key`, `childIndex`, `priority?`): `void`

Defined in: [packages/mpt/src/util/walkController.ts:120](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L120)
=======
> **onlyBranchIndex**(`node`, `key`, `childIndex`, `priority`?): `void`

Defined in: [packages/mpt/src/util/walkController.ts:120](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L120)
>>>>>>> b7777441e (ethereumjs-monoepo)

Push a branch of a certain BranchMPTNode to the event queue.

#### Parameters

##### node

[`BranchMPTNode`](BranchMPTNode.md)

The node to select a branch on. Should be a BranchMPTNode.

##### key

[`Nibbles`](../type-aliases/Nibbles.md) = `[]`

The current key which leads to the corresponding node.

##### childIndex

`number`

The child index to add to the event queue.

##### priority?

`number`

Optional priority of the event, defaults to the total key length.

#### Returns

`void`

***

### pushNodeToQueue()

<<<<<<< HEAD
> **pushNodeToQueue**(`nodeRef`, `key`, `priority?`): `void`

Defined in: [packages/mpt/src/util/walkController.ts:97](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L97)
=======
> **pushNodeToQueue**(`nodeRef`, `key`, `priority`?): `void`

Defined in: [packages/mpt/src/util/walkController.ts:97](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L97)
>>>>>>> b7777441e (ethereumjs-monoepo)

Push a node to the queue. If the queue has places left for tasks, the node is executed immediately, otherwise it is queued.

#### Parameters

##### nodeRef

`Uint8Array`

Push a node reference to the event queue. This reference is a 32-byte keccak hash of the value corresponding to the `key`.

##### key

[`Nibbles`](../type-aliases/Nibbles.md) = `[]`

The current key.

##### priority?

`number`

Optional priority, defaults to key length

#### Returns

`void`

***

### newWalk()

<<<<<<< HEAD
> `static` **newWalk**(`onNode`, `trie`, `root`, `poolSize?`): `Promise`\<`void`\>

Defined in: [packages/mpt/src/util/walkController.ts:39](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L39)
=======
> `static` **newWalk**(`onNode`, `trie`, `root`, `poolSize`?): `Promise`\<`void`\>

Defined in: [packages/mpt/src/util/walkController.ts:39](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/mpt/src/util/walkController.ts#L39)
>>>>>>> b7777441e (ethereumjs-monoepo)

Async function to create and start a new walk over a trie.

#### Parameters

##### onNode

[`FoundNodeFunction`](../type-aliases/FoundNodeFunction.md)

The `FoundNodeFunction to call if a node is found.

##### trie

[`MerklePatriciaTrie`](MerklePatriciaTrie.md)

The trie to walk on.

##### root

`Uint8Array`

The root key to walk on.

##### poolSize?

`number`

Task execution pool size to prevent OOM errors. Defaults to 500.

#### Returns

`Promise`\<`void`\>
