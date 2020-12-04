const PriceConsumer = artifacts.require("PriceConsumer");

module.exports = async function (deployer) {
    await deployer.deploy(PriceConsumer);
    // await PriceConsumer.deployed().then(async (okContract) => {
    //     let a = await okContract.getLatestPrice();
    //     console.info(a);
    // });
};
