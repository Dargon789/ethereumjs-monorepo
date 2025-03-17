[**@ethereumjs/devp2p**](../README.md)

***

[@ethereumjs/devp2p](../README.md) / ENR

# Class: ENR

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dns/enr.ts:31](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L31)

## Constructors

### Constructor
=======
Defined in: [packages/devp2p/src/dns/enr.ts:31](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L31)

## Constructors

### new ENR()
>>>>>>> b7777441e (ethereumjs-monoepo)

> **new ENR**(): `ENR`

#### Returns

`ENR`

## Properties

### BRANCH\_PREFIX

> `readonly` `static` **BRANCH\_PREFIX**: `"enrtree-branch:"` = `'enrtree-branch:'`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dns/enr.ts:34](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L34)
=======
Defined in: [packages/devp2p/src/dns/enr.ts:34](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L34)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### RECORD\_PREFIX

> `readonly` `static` **RECORD\_PREFIX**: `"enr:"` = `'enr:'`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dns/enr.ts:32](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L32)
=======
Defined in: [packages/devp2p/src/dns/enr.ts:32](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L32)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### ROOT\_PREFIX

> `readonly` `static` **ROOT\_PREFIX**: `"enrtree-root:"` = `'enrtree-root:'`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dns/enr.ts:35](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L35)
=======
Defined in: [packages/devp2p/src/dns/enr.ts:35](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L35)
>>>>>>> b7777441e (ethereumjs-monoepo)

***

### TREE\_PREFIX

> `readonly` `static` **TREE\_PREFIX**: `"enrtree:"` = `'enrtree:'`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dns/enr.ts:33](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L33)
=======
Defined in: [packages/devp2p/src/dns/enr.ts:33](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L33)
>>>>>>> b7777441e (ethereumjs-monoepo)

## Methods

### parseAndVerifyRecord()

<<<<<<< HEAD
> `static` **parseAndVerifyRecord**(`enr`, `common?`): [`PeerInfo`](../interfaces/PeerInfo.md)

Defined in: [packages/devp2p/src/dns/enr.ts:50](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L50)
=======
> `static` **parseAndVerifyRecord**(`enr`, `common`?): [`PeerInfo`](../interfaces/PeerInfo.md)

Defined in: [packages/devp2p/src/dns/enr.ts:50](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L50)
>>>>>>> b7777441e (ethereumjs-monoepo)

Converts an Ethereum Name Record (EIP-778) string into a PeerInfo object after validating
its signature component with the public key encoded in the record itself.

The record components are:
> signature: cryptographic signature of record contents
> seq: The sequence number, a 64-bit unsigned integer which increases whenever
       the record changes and is republished.
> A set of arbitrary key/value pairs

#### Parameters

##### enr

`string`

##### common?

`Common`

#### Returns

[`PeerInfo`](../interfaces/PeerInfo.md)

***

### parseAndVerifyRoot()

<<<<<<< HEAD
> `static` **parseAndVerifyRoot**(`root`, `publicKey`, `common?`): `string`

Defined in: [packages/devp2p/src/dns/enr.ts:99](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L99)
=======
> `static` **parseAndVerifyRoot**(`root`, `publicKey`, `common`?): `string`

Defined in: [packages/devp2p/src/dns/enr.ts:99](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L99)
>>>>>>> b7777441e (ethereumjs-monoepo)

Extracts the branch subdomain referenced by a DNS tree root string after verifying
the root record signature with its base32 compressed public key. Geth's top level DNS
domains and their public key can be found in: go-ethereum/params/bootnodes

#### Parameters

##### root

`string`

(See EIP-1459 for encoding details)

##### publicKey

`string`

##### common?

`Common`

#### Returns

`string`

subdomain subdomain to retrieve branch records from.

***

### parseBranch()

> `static` **parseBranch**(`branch`): `string`[]

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dns/enr.ts:178](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L178)
=======
Defined in: [packages/devp2p/src/dns/enr.ts:172](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L172)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns subdomains listed in an ENR branch entry. These in turn lead to
either further branch entries or ENR records.

#### Parameters

##### branch

`string`

#### Returns

`string`[]

***

### parseTree()

> `static` **parseTree**(`tree`): `ENRTreeValues`

<<<<<<< HEAD
Defined in: [packages/devp2p/src/dns/enr.ts:153](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L153)
=======
Defined in: [packages/devp2p/src/dns/enr.ts:149](https://github.com/Dargon789/ethereumjs-monorepo/blob/master/packages/devp2p/src/dns/enr.ts#L149)
>>>>>>> b7777441e (ethereumjs-monoepo)

Returns the public key and top level domain of an ENR tree entry.
The domain is the starting point for traversing a set of linked DNS TXT records
and the public key is used to verify the root entry record

#### Parameters

##### tree

`string`

(See EIP-1459 )

#### Returns

`ENRTreeValues`
