# tOracle
- 1.modify truffle-config,use your mnemonic :
    - kovan: {
        provider: () => {
            return new HDWalletProvider("exile pepper buyer pyramid girl come city track top surprise tortoise sick", "https://kovan.infura.io/v3/f8b4397c14484aa382dd9b96412e1db9")
        },
        network_id: '*',
        gas: 3012388,
        gasPrice: 30000000000,
        skipDryRun: true,
    },


- 2. npm i
- 3. truffle compile
- 4. truffle migrate --network kovan
- 5. cd App && npm i
- 6. cd App && npm start