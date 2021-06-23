const SafemoonMax = artifacts.require("SafemoonMax");
module.exports = async function(deployer) {

    deployer.deploy(SafemoonMax)

    // deployer.deploy(LoganPaulCoin).then(function () {
    //     return deployer.deploy(LoganPaulCoin, LoganPaulCoin.address)
    // })
    
};
