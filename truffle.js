
var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "enter passphrase here";

module.exports = {
  networks:{
    rinkeby: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/infura_key"),
      network_id: '4',
    },

    ropsten:{
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/infura_key"),
      network_id: '3'
    },
    
    development: {
    host: "localhost",
    port: 8545,
    network_id: "*" // Match any network id
    } 
  }
};

