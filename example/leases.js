// file: example/leases.js

const NodeVault = require("./../src/index")

process.env.DEBUG = 'vaultaire' // switch on debug mode
const vault = NodeVault()

// TODO fix example for leases because generic backend does not generate a lease_id anymore
// See: https://github.com/hashicorp/vault/issues/877

vault.write('secret/hello', { value: 'world', lease: '10h' })
.then(() => vault.read('secret/hello'))
.then((result) => vault.revoke({ lease_id: result.lease_id }))
.then(() => vault.revokePrefix({ path_prefix: 'secret' }))
.catch((err) => console.error(err.message))
