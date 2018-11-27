var Rlottery = artifacts.require("./Rlottery.sol");
var Lottery = artifacts.require("./Lottery.sol");

module.exports = function(deployer) {
  deployer.deploy(Lottery);
  deployer.deploy(Rlottery);
};
//Lottery - 0xe6b40aca0ba15bd77d4799f3ab40cc73399aeca6