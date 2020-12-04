# tOracle
-  modify truffle-config,use your mnemonic :
    - kovan: {
        provider: () => {
            return new HDWalletProvider("exile pepper buyer pyramid girl come city track top surprise tortoise sick", "https://kovan.infura.io/v3/f8b4397c14484aa382dd9b96412e1db9")
        },
        network_id: '*',
        gas: 3012388,
        gasPrice: 30000000000,
        skipDryRun: true,
    },


- npm i
-  truffle compile
-  truffle migrate --network kovan
-  cd App && npm i
-  cd App && npm start
