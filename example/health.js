// file: example/health.js

const NodeVault = require("./../src/index.js")

process.env.DEBUG = 'vaultaire' // switch on debug mode

const vault = NodeVault()

vault.health()
.then(console.log)
.catch((err) => console.error(err.message))
