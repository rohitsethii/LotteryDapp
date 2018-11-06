var Rlottery = artifacts.require("./Rlottery.sol");
var Lottery = artifacts.require("./Lottery.sol");

module.exports = function(deployer) {
  deployer.deploy(Lottery);
  deployer.deploy(Rlottery);
};
