# Vaultaire

[![Coverage Status](https://img.shields.io/codecov/c/github/vaultaire/vaultaire/main.svg?style=flat-square)](https://codecov.io/gh/vaultaire/vaultaire/branch/main)
[![Download Status](https://img.shields.io/npm/dm/vaultaire.svg?style=flat-square)](https://www.npmjs.com/package/vaultaire)

A client for the HTTP API of HashiCorp's [Vault] written for Node.js. Maintained fork of the [node-vault](https://github.com/nodevault/node-vault) project.


## Install
make sure to use node.js version >= 12

```bash
npm install vaultaire
pnpm install vaultaire
yarn install vaultaire
```

## Usage

### Init and unseal

```typescript
const voltaire = require("vaultaire")

var options = {
  apiVersion: 'v1', // default
  endpoint: 'http://127.0.0.1:8200', // default
  token: '1234' // optional client token; can be fetched after valid initialization of the server
};

// get new instance of the client
var vault = voltaire(options);

// init vault server
vault.init({ secret_shares: 1, secret_threshold: 1 })
.then( (result) => {
  var keys = result.keys;
  // set token for all following requests
  vault.token = result.root_token;
  // unseal vault server
  return vault.unseal({ secret_shares: 1, key: keys[0] })
})
.catch(console.error);
```

### Write, read and delete secrets

```javascript
vault.write('secret/hello', { value: 'world', lease: '1s' })
.then( () => vault.read('secret/hello'))
.then( () => vault.delete('secret/hello'))
.catch(console.error);
```


## Test

Run tests inside docker to do also nice integration testing:

```bash
docker-compose up -d vault
pnpm test
```

This will create containers for vault and running the tests.


## Docs
Just generate [docco] docs via `pnpm run docs`.

## Examples
Please have a look at the [examples] and the generated [feature list] to see what is already implemented.

Instead of installing all the dependencies like vault itself and other stuff you can
use [docker] and [docker-compose] to link and run multiple docker containers with all of its dependencies.

```bash
git clone git@github.com:vaultaire/vaultaire.git
cd vaultaire
docker-compose up vault
```

Now you can run the examples from another terminal window.

First of all you should initialize and unseal the vault:
```bash
node example/init.js
```
You should see `root_token: ` followed by a long key in the response.
Please copy that long key and export it as environment variable:
```bash
export VAULT_TOKEN=<insert long key here>
```

Now you are able to run all of the other [examples]:
```bash
node example/policies.js
```

[examples]: https://github.com/vaultaire/vaultaire/tree/main/example
[docker-compose.yml]: https://github.com/vaultaire/vaultaire/tree/main/docker-compose.yml
[Vault]: https://vaultproject.io/
[docker-compose]: https://www.docker.com/docker-compose
[docker]: http://docs.docker.com/
[docker toolbox]: https://www.docker.com/toolbox
[docco]: http://jashkenas.github.io/docco
[feature list]: https://github.com/vaultaire/vaultaire/tree/main/features.md
