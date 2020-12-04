const HDWalletProvider = require('@truffle/hdwallet-provider')
const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "App/src/contracts"),
  networks: {
    cldev: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider("exile pepper buyer pyramid girl come city track top surprise tortoise sick", "https://kovan.infura.io/v3/f8b4397c14484aa382dd9b96412e1db9")
      },
      network_id: '*',
      gas: 3012388,
      gasPrice: 30000000000,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: '0.6.6',
    },
  },
}
