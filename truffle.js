
var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "passphrase here";

module.exports = {
networks:{
    rinkeby: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/_yourkey"),
      network_id: '4',
    },

	ropsten:{
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/_yourkey"),
      network_id: '3'
    }
  }
};

