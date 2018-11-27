
var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "pass phrase here";

module.exports = {
  networks:{
    rinkeby: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: new HDWalletProvider(mnemonic, "infura key"),
      network_id: '4',
    },

    ropsten:{
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: new HDWalletProvider(mnemonic, "infura key"),
      network_id: '3'
    },
    
    development: {
    host: "localhost",
    port: 8545,
    network_id: "*" // Match any network id
    } 
  }
};

