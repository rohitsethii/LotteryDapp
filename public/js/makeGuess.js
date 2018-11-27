var Web3 = require('web3')
var EthereumTx = require('ethereumjs-tx')
var contractAddress = "0xd8f6d1d68ddfd455e1cadf8ca36337481e2df517";
var abiArray = [
  {
      "constant": false,
      "inputs": [],
      "name": "distributeReward",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [],
      "name": "drawwinner",
      "outputs": [
          {
              "name": "",
              "type": "address[]"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "name": "from",
              "type": "address"
          },
          {
              "indexed": true,
              "name": "PlayerID",
              "type": "uint256"
          },
          {
              "indexed": true,
              "name": "_guess",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "Guess",
      "type": "event"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "guess",
              "type": "uint256"
          }
      ],
      "name": "makeGuess",
      "outputs": [
          {
              "name": "",
              "type": "bool"
          }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "allguess",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "allholders",
      "outputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "name": "Guesses",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "holders",
      "outputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "Total",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "w",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "winners",
      "outputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }
];

var from = "address here";
var privateKey = "private key here";

var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/12fcd40314a849f1a2467d9d2269b65b"));
var contract = web3.eth.contract(abiArray).at(contractAddress);
var number = web3.eth.blockNumber;
var count = web3.eth.getTransactionCount(from);
var rawTransaction = {
        "from": from,
        "nonce": web3.toHex(count), 
        "gasPrice": web3.toHex(10000000000),
        "gasLimit": web3.toHex(500000),
        "to": contractAddress, 
        "value": web3.toHex(1000000), //sends the amount of ether _to address
        "data": contract.makeGuess.getData(22,{
                from: from,
                value:1000000
                }),
        "chainId": "0x04" //rinkeby id 
}

var privKey = new Buffer(privateKey, 'hex');
console.log("transaction count is", count);
var tx = new EthereumTx(rawTransaction);

tx.sign(privKey);
var serializedTx = tx.serialize();

web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
      if (!err)
          console.log("transaction hash", hash);
      else
          console.log(err)
});
