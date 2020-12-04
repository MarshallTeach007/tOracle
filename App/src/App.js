import React, {Component} from "react";
import PriceConsumer from "./contracts/PriceConsumer.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
    state = {
        storageLogString: '',
        web3: null,
        accounts: null,
        PriceConsumerContract: null,
        FuckTokenContract: null,
        TestTokenContract: null,
        FuckTokenAccountCoins: null,
        TestTokenAccountCoins: null,
        signerAddress1: '0x5D59C0b6C9B13E8c55145B86327C84938cBF1418',
        signerAddress2: '0x2576BD94dd46980c9D1Cec53481a306649fe49cc',
        dexAddress: '0xB9F8Bb65D295273424CAC7792104E064038AB066'
    };

    componentDidMount = async () => {
        try {
            // Get network provider and web3 instance.
            const web3 = await getWeb3();

            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();

            // Get the contract instance.
            const networkId = await web3.eth.net.getId();

            const eDeployedNetwork = PriceConsumer.networks[networkId];
            const exChangeInstance = new web3.eth.Contract(
                PriceConsumer.abi,
                eDeployedNetwork && eDeployedNetwork.address,
            );


            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            this.setState({
                web3: web3,
                accounts: accounts,
                PriceConsumerContract: exChangeInstance,

            }, this.RunInit);

            console.info("networkId:", networkId);
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }

        console.info("calller:", this.state.accounts[0]);
        console.info("dexAddress:", this.state.dexAddress.toString());
        console.info("signerAddress1:", this.state.signerAddress1.toString());
        console.info("signerAddress2:", this.state.signerAddress2.toString());
        console.info("PriceConsumerContract:", this.state.PriceConsumerContract._address);

    };

    RunInit = async () => {

    };

    test = async () => {
        const {accounts, PriceConsumerContract} = this.state;
        let price = await PriceConsumerContract.methods.getLatestPrice().call({from: accounts[0]});
        console.info("price:", price);
    };


    render() {
        if (!this.state.web3) {
            return <div>Loading Web3, accounts, and contract...</div>;
        }
        return (
            <div className="App">

                <h1>acc1 test:</h1>
                <button onClick={this.test}> test</button>

            </div>
        );
    }
}

export default App;
