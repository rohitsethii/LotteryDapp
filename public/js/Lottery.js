var lottery = {
  "contractName": "Lottery",
  "abi": [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
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
      "constant": false,
      "inputs": [],
      "name": "drawWinner",
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
      "constant": false,
      "inputs": [],
      "name": "distributeReward",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getHolders",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getWinners",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getTotalWinners",
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
      "name": "getLuckyNumber",
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
      "name": "getTotalAmount",
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
          "name": "playerId",
          "type": "uint256"
        }
      ],
      "name": "getHoldersAddress",
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
          "name": "player",
          "type": "address"
        }
      ],
      "name": "getGuess",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620f42406004819055506001600a60016101000a81548160ff0219169083151502179055506111cf806100856000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806322666da6146100a95780635fe8e7cc146100e157806365ac43411461014d5780638f73c5ae14610178578063a4208b701461018f578063b2185bb1146101e6578063ceeca98414610252578063d75f76c21461027d578063df15c37e146102ea578063e69f19cd14610356575b600080fd5b6100c760048036038101908080359060200190929190505050610381565b604051808215151515815260200191505060405180910390f35b3480156100ed57600080fd5b506100f66108af565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561013957808201518184015260208101905061011e565b505050509050019250505060405180910390f35b34801561015957600080fd5b5061016261093d565b6040518082815260200191505060405180910390f35b34801561018457600080fd5b5061018d610947565b005b34801561019b57600080fd5b506101d0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bf8565b6040518082815260200191505060405180910390f35b3480156101f257600080fd5b506101fb610c41565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561023e578082015181840152602081019050610223565b505050509050019250505060405180910390f35b34801561025e57600080fd5b50610267611066565b6040518082815260200191505060405180910390f35b34801561028957600080fd5b506102a860048036038101908080359060200190929190505050611070565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102f657600080fd5b506102ff6110ad565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610342578082015181840152602081019050610327565b505050509050019250505060405180910390f35b34801561036257600080fd5b5061036b61113b565b6040518082815260200191505060405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151515610448576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f6f776e6572206973206e6f7420616c6c6f77656400000000000000000000000081525060200191505060405180910390fd5b60011515600a60019054906101000a900460ff1615151415156104d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f6c6f7474657279206973206e6f74206f70656e0000000000000000000000000081525060200191505060405180910390fd5b6104f23373ffffffffffffffffffffffffffffffffffffffff16611145565b151515610567576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f6f6e6c792068756d616e732063616e20706c617900000000000000000000000081525060200191505060405180910390fd5b602082141515156105e0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f63616e6e6f7420626520656d707479000000000000000000000000000000000081525060200191505060405180910390fd5b6014821115151561067f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001807f6e756d6265722073686f756c64206265206265747765656e203020616e64203281526020017f300000000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b600454341415156106f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f70726963652073686f756c64206265203130303030303000000000000000000081525060200191505060405180910390fd5b60023390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505033600b6000600954815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506107c8600160095461115890919063ffffffff16565b50600582908060018154018082558091505090600182039060005260206000200160009091929091909150555081600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061084e3460085461115890919063ffffffff16565b600881905550816009543373ffffffffffffffffffffffffffffffffffffffff167f6a2b61f774cffdaa0e8b28eea5fef8e4f8460f4029344bd09c712cf79cc6c02d346040518082815260200191505060405180910390a460019050919050565b6060600280548060200260200160405190810160405280929190818152602001828054801561093357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116108e9575b5050505050905090565b6000600854905090565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a0e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f6f6e6c79206f776e65722063616e2063616c6c0000000000000000000000000081525060200191505060405180910390fd5b60011515600a60019054906101000a900460ff161515141515610a99576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f6c6f7474657279206973206e6f74206f70656e0000000000000000000000000081525060200191505060405180910390fd5b60006006541415610ade576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b610b1d600654610b0f60023073ffffffffffffffffffffffffffffffffffffffff163161117990919063ffffffff16565b61117990919063ffffffff16565b9150600090505b600380549050811015610bbe57600381815481101515610b4057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610bb0573d6000803e3d6000fd5b508080600101915050610b24565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d09576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f6f6e6c79206f776e65722063616e2063616c6c0000000000000000000000000081525060200191505060405180910390fd5b600a60009054906101000a900460ff16151515610d8e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f77696e6e65722068617320616c726561647920447261776e000000000000000081525060200191505060405180910390fd5b610dad3373ffffffffffffffffffffffffffffffffffffffff16611145565b151515610e22576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f6f6e6c792068756d616e732063616e20706c617900000000000000000000000081525060200191505060405180910390fd5b6015424460405160200180838152602001828152602001925050506040516020818303038152906040526040518082805190602001908083835b602083101515610e815780518252602082019150602081019050602083039250610e5c565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902060019004811515610ebb57fe5b0660ff16600781905550600090505b600280549050811015610fbe57600581815481101515610ee657fe5b90600052602060002001546007541415610fb1576003600282815481101515610f0b57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610faf600160065461115890919063ffffffff16565b505b8080600101915050610eca565b6001600a60006101000a81548160ff021916908315150217905550600380548060200260200160405190810160405280929190818152602001828054801561105b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611011575b505050505091505090565b6000600654905090565b6000600b600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6060600380548060200260200160405190810160405280929190818152602001828054801561113157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116110e7575b5050505050905090565b6000600754905090565b600080823b905060008111915050919050565b600080828401905083811015151561116f57600080fd5b8091505092915050565b60008060008311151561118b57600080fd5b828481151561119657fe5b04905080915050929150505600a165627a7a7230582073cb13a7e22183e5556958646179c4aca4d9a159ca837730dc18e35909a5f8b50029",
  "deployedBytecode": "0x6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806322666da6146100a95780635fe8e7cc146100e157806365ac43411461014d5780638f73c5ae14610178578063a4208b701461018f578063b2185bb1146101e6578063ceeca98414610252578063d75f76c21461027d578063df15c37e146102ea578063e69f19cd14610356575b600080fd5b6100c760048036038101908080359060200190929190505050610381565b604051808215151515815260200191505060405180910390f35b3480156100ed57600080fd5b506100f66108af565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561013957808201518184015260208101905061011e565b505050509050019250505060405180910390f35b34801561015957600080fd5b5061016261093d565b6040518082815260200191505060405180910390f35b34801561018457600080fd5b5061018d610947565b005b34801561019b57600080fd5b506101d0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bf8565b6040518082815260200191505060405180910390f35b3480156101f257600080fd5b506101fb610c41565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561023e578082015181840152602081019050610223565b505050509050019250505060405180910390f35b34801561025e57600080fd5b50610267611066565b6040518082815260200191505060405180910390f35b34801561028957600080fd5b506102a860048036038101908080359060200190929190505050611070565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102f657600080fd5b506102ff6110ad565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610342578082015181840152602081019050610327565b505050509050019250505060405180910390f35b34801561036257600080fd5b5061036b61113b565b6040518082815260200191505060405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151515610448576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f6f776e6572206973206e6f7420616c6c6f77656400000000000000000000000081525060200191505060405180910390fd5b60011515600a60019054906101000a900460ff1615151415156104d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f6c6f7474657279206973206e6f74206f70656e0000000000000000000000000081525060200191505060405180910390fd5b6104f23373ffffffffffffffffffffffffffffffffffffffff16611145565b151515610567576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f6f6e6c792068756d616e732063616e20706c617900000000000000000000000081525060200191505060405180910390fd5b602082141515156105e0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f63616e6e6f7420626520656d707479000000000000000000000000000000000081525060200191505060405180910390fd5b6014821115151561067f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001807f6e756d6265722073686f756c64206265206265747765656e203020616e64203281526020017f300000000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b600454341415156106f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f70726963652073686f756c64206265203130303030303000000000000000000081525060200191505060405180910390fd5b60023390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505033600b6000600954815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506107c8600160095461115890919063ffffffff16565b50600582908060018154018082558091505090600182039060005260206000200160009091929091909150555081600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061084e3460085461115890919063ffffffff16565b600881905550816009543373ffffffffffffffffffffffffffffffffffffffff167f6a2b61f774cffdaa0e8b28eea5fef8e4f8460f4029344bd09c712cf79cc6c02d346040518082815260200191505060405180910390a460019050919050565b6060600280548060200260200160405190810160405280929190818152602001828054801561093357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116108e9575b5050505050905090565b6000600854905090565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a0e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f6f6e6c79206f776e65722063616e2063616c6c0000000000000000000000000081525060200191505060405180910390fd5b60011515600a60019054906101000a900460ff161515141515610a99576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f6c6f7474657279206973206e6f74206f70656e0000000000000000000000000081525060200191505060405180910390fd5b60006006541415610ade576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b610b1d600654610b0f60023073ffffffffffffffffffffffffffffffffffffffff163161117990919063ffffffff16565b61117990919063ffffffff16565b9150600090505b600380549050811015610bbe57600381815481101515610b4057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610bb0573d6000803e3d6000fd5b508080600101915050610b24565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d09576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f6f6e6c79206f776e65722063616e2063616c6c0000000000000000000000000081525060200191505060405180910390fd5b600a60009054906101000a900460ff16151515610d8e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f77696e6e65722068617320616c726561647920447261776e000000000000000081525060200191505060405180910390fd5b610dad3373ffffffffffffffffffffffffffffffffffffffff16611145565b151515610e22576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f6f6e6c792068756d616e732063616e20706c617900000000000000000000000081525060200191505060405180910390fd5b6015424460405160200180838152602001828152602001925050506040516020818303038152906040526040518082805190602001908083835b602083101515610e815780518252602082019150602081019050602083039250610e5c565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902060019004811515610ebb57fe5b0660ff16600781905550600090505b600280549050811015610fbe57600581815481101515610ee657fe5b90600052602060002001546007541415610fb1576003600282815481101515610f0b57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610faf600160065461115890919063ffffffff16565b505b8080600101915050610eca565b6001600a60006101000a81548160ff021916908315150217905550600380548060200260200160405190810160405280929190818152602001828054801561105b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611011575b505050505091505090565b6000600654905090565b6000600b600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6060600380548060200260200160405190810160405280929190818152602001828054801561113157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116110e7575b5050505050905090565b6000600754905090565b600080823b905060008111915050919050565b600080828401905083811015151561116f57600080fd5b8091505092915050565b60008060008311151561118b57600080fd5b828481151561119657fe5b04905080915050929150505600a165627a7a7230582073cb13a7e22183e5556958646179c4aca4d9a159ca837730dc18e35909a5f8b50029",
  "sourceMap": "84:3803:0:-;;;1594:93;8:9:-1;5:2;;;30:1;27;20:12;5:2;1594:93:0;1628:10;1620:5;;:18;;;;;;;;;;;;;;;;;;1652:11;1644:5;:19;;;;1678:4;1669:6;;:13;;;;;;;;;;;;;;;;;;84:3803;;;;;;",
  "deployedSourceMap": "84:3803:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1812:541;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3244:81;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3244:81:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3244:81:0;;;;;;;;;;;;;;;;;3591;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3591:81:0;;;;;;;;;;;;;;;;;;;;;;;2805:334;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2805:334:0;;;;;;3790:93;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3790:93:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2376:416;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2376:416:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2376:416:0;;;;;;;;;;;;;;;;;3415:83;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3415:83:0;;;;;;;;;;;;;;;;;;;;;;;3678:106;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3678:106:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3331:78;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3331:78:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3331:78:0;;;;;;;;;;;;;;;;;3504:81;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3504:81:0;;;;;;;;;;;;;;;;;;;;;;;1812:541;1911:4;1143:5;;;;;;;;;;;1129:19;;:10;:19;;;;1121:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1325:4;1315:14;;:6;;;;;;;;;;;:14;;;1307:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1401:23;:10;:21;;;:23::i;:::-;1400:24;1392:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1939:4;1930:5;:13;;1922:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1985:2;1976:5;:11;;1968:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2051:5;;2038:9;:18;2030:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2089:10;2105;2089:27;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2089:27:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2142:10;2122:7;:17;2130:8;;2122:17;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;2158:15;2171:1;2158:8;;:12;;:15;;;;:::i;:::-;;2179:8;2193:5;2179:20;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2179:20:0;;;;;;;;;;;;;;;;;;;;;;2227:5;2205:7;:19;2213:10;2205:19;;;;;;;;;;;;;;;:27;;;;2252:26;2268:9;2252:11;;:15;;:26;;;;:::i;:::-;2238:11;:40;;;;2315:5;2306:8;;2295:10;2289:42;;;2321:9;2289:42;;;;;;;;;;;;;;;;;;2344:4;2337:11;;1812:541;;;:::o;3244:81::-;3286:9;3310:10;3303:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3244:81;:::o;3591:::-;3637:4;3656:11;;3649:18;;3591:81;:::o;2805:334::-;2940:17;3018:6;1053:5;;;;;;;;;;;1039:19;;:10;:19;;;1031:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1325:4;1315:14;;:6;;;;;;;;;;;:14;;;1307:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2899:1;2883:12;;:17;2880:55;;;2922:5;;;;;;;;;;;2909:19;;;2880:55;2960:48;2995:12;;2961:28;2987:1;2969:4;2961:21;;;:25;;:28;;;;:::i;:::-;2960:34;;:48;;;;:::i;:::-;2940:68;;3027:1;3018:10;;3014:96;3033:7;:14;;;;3029:1;:18;3014:96;;;3061:7;3069:1;3061:10;;;;;;;;;;;;;;;;;;;;;;;;;;;:19;;:33;3081:12;3061:33;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3061:33:0;3048:3;;;;;;;3014:96;;;3128:5;;;;;;;;;;;3115:19;;;3790:93;3844:4;3863:7;:15;3871:6;3863:15;;;;;;;;;;;;;;;;3856:22;;3790:93;;;:::o;2376:416::-;2455:9;2584:6;1053:5;;;;;;;;;;;1039:19;;:10;:19;;;1031:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1225:11;;;;;;;;;;;1224:12;1216:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1401:23;:10;:21;;;:23::i;:::-;1400:24;1392:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2571:2;2534:15;2551:16;2517:51;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2517:51:0;;;2507:62;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2507:62:0;;;;;;;;;;;;;;;;2499:71;;;:74;;;;;;;;2479:95;;:11;:95;;;;2593:1;2584:10;;2580:164;2600:10;:17;;;;2596:1;:21;2580:164;;;2650:8;2659:1;2650:11;;;;;;;;;;;;;;;;;;2635;;:26;2631:107;;;2673:7;2686:10;2697:1;2686:13;;;;;;;;;;;;;;;;;;;;;;;;;;;2673:27;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2673:27:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2710:19;2727:1;2710:12;;:16;;:19;;;;:::i;:::-;;2631:107;2619:3;;;;;;;2580:164;;;2763:4;2749:11;;:18;;;;;;;;;;;;;;;;;;2780:7;2773:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2376:416;;:::o;3415:83::-;3462:4;3481:12;;3474:19;;3415:83;:::o;3678:106::-;3740:7;3762;:17;3770:8;3762:17;;;;;;;;;;;;;;;;;;;;;3755:24;;3678:106;;;:::o;3331:78::-;3373:9;3397:7;3390:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3331:78;:::o;3504:81::-;3550:4;3569:11;;3562:18;;3504:81;:::o;449:582:1:-;509:4;521:12;996:7;984:20;976:28;;1025:1;1018:4;:8;1011:15;;449:582;;;;:::o;1272:131:2:-;1330:7;1345:9;1361:1;1357;:5;1345:17;;1381:1;1376;:6;;1368:15;;;;;;;;1397:1;1390:8;;1272:131;;;;;:::o;695:270::-;753:7;846:9;780:1;776;:5;768:14;;;;;;;;862:1;858;:5;;;;;;;;846:17;;959:1;952:8;;695:270;;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./lib/Address.sol\";\nimport \"./lib/SafeMath.sol\";\n\ncontract Lottery{\n    \n  \n  address owner;\n  address winner;\n  address[] allHolders;\n  address[] winners;\n  using Address for address;\n  \n  uint price;\n  uint[] allGuess;\n  uint totalWinners;\n  uint luckyNumber;\n  uint totalAmount;\n  uint playerID;\n  using SafeMath for uint;\n  \n  bool winnerDrawn;\n  bool active;\n  \n    \n//-----------------------------------------Mappings----------------------------------------\n    \n\n\n  mapping (uint => address) holders;      // PlayerID => participant_address\n  mapping (address => uint) Guesses;      //participant_address => guess\n  \n    \n\n//-----------------------------------------Events----------------------------------------\n    \n    \n  event Guess(\n      address indexed from,\n      uint indexed PlayerID,\n      uint indexed _guess,\n      uint value\n  );\n    \n    \n//-----------------------------------------Modifiers------------------------------------    \n    \n    \n    \n  modifier onlyowner(){\n    require(msg.sender == owner,\"only owner can call\");\n    _;\n  }\n  modifier notowner(){\n    require(msg.sender != owner,\"owner is not allowed\");\n    _;\n  }\n  modifier alreadyDrawn(){\n    require(!winnerDrawn,\"winner has already Drawn\");\n    _;\n  }\n  modifier lotteryActive{\n    require(active == true,\"lottery is not open\");\n    _;\n  }\n  modifier isHuman() {\n    require(!msg.sender.isContract(),\"only humans can play\");\n    _;\n  }\n    \n    \n//------------------------------------constructor----------------------------------------------------    \n    \n    \n    \n  constructor() public{\n    owner = msg.sender;\n    price = 1000000 wei;\n    active = true;\n  }\n\n    \n//------------------------------------Public Functions----------------------------------------------------       \n\n\n  function makeGuess(uint guess) \n  public\n  notowner\n  lotteryActive\n  isHuman\n  payable \n  returns(bool){\n    require(guess != 0x20,\"cannot be empty\");\n    require(guess <= 20,\"number should be between 0 and 20\");\n    require(msg.value == price,\"price should be 1000000\");\n    allHolders.push(msg.sender);\n    holders[playerID] = msg.sender;\n    playerID.add(1);\n    allGuess.push(guess);\n    Guesses[msg.sender] = guess;\n    totalAmount = totalAmount.add(msg.value);\n    emit Guess(msg.sender,playerID,guess,msg.value);\n    return true;\n  }       \n       \n    \n  function drawWinner()\n  public \n  onlyowner\n  alreadyDrawn\n  isHuman\n  returns(address[]) {\n      \n    luckyNumber = uint8(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)))%21);\n    for(uint i = 0; i < allHolders.length; i++){\n      if( luckyNumber == allGuess[i] ){\n        winners.push(allHolders[i]);\n        totalWinners.add(1);\n      }\n    }\n    winnerDrawn = true;\n    return winners;\n  }\n  \n      \n  function distributeReward()\n  public  \n  onlyowner\n  lotteryActive\n  {\n    if(totalWinners == 0){\n      selfdestruct(owner);\n    }\n    uint winnerreward = (address(this).balance.div(2)).div(totalWinners);\n    for(uint j = 0;j < winners.length;j++){ \n      winners[j].transfer(winnerreward);\n        \n    }\n    selfdestruct(owner);\n  }\n  \n  \n//------------------------------------getters-----------------------------------------------\n\n\n\n  function getHolders() public view returns(address[]) {\n    return allHolders;\n  }\n  \n  function getWinners() public view returns(address[]) {\n    return winners;\n  }\n  \n  function getTotalWinners() public view returns(uint) {\n    return totalWinners;\n  }\n  \n  function getLuckyNumber() public view returns(uint) {\n    return luckyNumber;\n  }\n  \n  function getTotalAmount() public view returns(uint) {\n    return totalAmount;\n  }\n  \n  function getHoldersAddress(uint playerId) public view returns(address) {\n    return holders[playerId];\n  }\n  \n  function getGuess(address player) public view returns(uint) {\n    return Guesses[player];\n  }  \n}\n",
  "sourcePath": "/home/appinventiv/Lot/LotteryDapp/contracts/Lottery.sol",
  "ast": {
    "absolutePath": "/home/appinventiv/Lot/LotteryDapp/contracts/Lottery.sol",
    "exportedSymbols": {
      "Lottery": [
        410
      ]
    },
    "id": 411,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "/home/appinventiv/Lot/LotteryDapp/contracts/lib/Address.sol",
        "file": "./lib/Address.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 411,
        "sourceUnit": 430,
        "src": "26:27:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/appinventiv/Lot/LotteryDapp/contracts/lib/SafeMath.sol",
        "file": "./lib/SafeMath.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 411,
        "sourceUnit": 558,
        "src": "54:28:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 410,
        "linearizedBaseContracts": [
          410
        ],
        "name": "Lottery",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "112:13:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 4,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "112:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 7,
            "name": "winner",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "129:14:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 6,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "129:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10,
            "name": "allHolders",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "147:20:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 8,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "147:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 9,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "147:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 13,
            "name": "winners",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "171:17:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 11,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "171:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 12,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "171:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "id": 16,
            "libraryName": {
              "contractScope": null,
              "id": 14,
              "name": "Address",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 429,
              "src": "198:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Address_$429",
                "typeString": "library Address"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "192:26:0",
            "typeName": {
              "id": 15,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "210:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            }
          },
          {
            "constant": false,
            "id": 18,
            "name": "price",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "224:10:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "224:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 21,
            "name": "allGuess",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "238:15:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 19,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "238:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 20,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "238:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 23,
            "name": "totalWinners",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "257:17:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 22,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "257:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 25,
            "name": "luckyNumber",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "278:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 24,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "278:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 27,
            "name": "totalAmount",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "298:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 26,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "298:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 29,
            "name": "playerID",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "318:13:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 28,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "318:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "id": 32,
            "libraryName": {
              "contractScope": null,
              "id": 30,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 557,
              "src": "341:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$557",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "335:24:0",
            "typeName": {
              "id": 31,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "354:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 34,
            "name": "winnerDrawn",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "365:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 33,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "365:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 36,
            "name": "active",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "385:11:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 35,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "385:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 40,
            "name": "holders",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "507:33:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 39,
              "keyType": {
                "id": 37,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "516:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "507:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueType": {
                "id": 38,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "524:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 44,
            "name": "Guesses",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "584:33:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 43,
              "keyType": {
                "id": 41,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "593:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "584:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 42,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "604:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 54,
            "name": "Guess",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 53,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "785:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 45,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "785:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48,
                  "indexed": true,
                  "name": "PlayerID",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "813:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 47,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "813:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50,
                  "indexed": true,
                  "name": "_guess",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "842:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "842:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "869:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "869:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "777:106:0"
            },
            "src": "766:118:0"
          },
          {
            "body": {
              "id": 65,
              "nodeType": "Block",
              "src": "1025:68:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 60,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 57,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 572,
                            "src": "1039:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 58,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1039:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 59,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "1053:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1039:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6f6e6c79206f776e65722063616e2063616c6c",
                        "id": 61,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1059:21:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_310c5991689599402c8011291d18e93a982bae2ba4c10e1efcb3787880c54fcd",
                          "typeString": "literal_string \"only owner can call\""
                        },
                        "value": "only owner can call"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_310c5991689599402c8011291d18e93a982bae2ba4c10e1efcb3787880c54fcd",
                          "typeString": "literal_string \"only owner can call\""
                        }
                      ],
                      "id": 56,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "1031:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 62,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1031:50:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63,
                  "nodeType": "ExpressionStatement",
                  "src": "1031:50:0"
                },
                {
                  "id": 64,
                  "nodeType": "PlaceholderStatement",
                  "src": "1087:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 66,
            "name": "onlyowner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 55,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1023:2:0"
            },
            "src": "1005:88:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 77,
              "nodeType": "Block",
              "src": "1115:69:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 72,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 69,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 572,
                            "src": "1129:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 70,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1129:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 71,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "1143:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1129:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6f776e6572206973206e6f7420616c6c6f776564",
                        "id": 73,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1149:22:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0b161fe3bbbebd9783e133f43b695042ac6979a5f0cdf335eb85f74b9dec4db3",
                          "typeString": "literal_string \"owner is not allowed\""
                        },
                        "value": "owner is not allowed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0b161fe3bbbebd9783e133f43b695042ac6979a5f0cdf335eb85f74b9dec4db3",
                          "typeString": "literal_string \"owner is not allowed\""
                        }
                      ],
                      "id": 68,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "1121:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 74,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1121:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 75,
                  "nodeType": "ExpressionStatement",
                  "src": "1121:51:0"
                },
                {
                  "id": 76,
                  "nodeType": "PlaceholderStatement",
                  "src": "1178:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 78,
            "name": "notowner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 67,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1113:2:0"
            },
            "src": "1096:88:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 87,
              "nodeType": "Block",
              "src": "1210:66:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 82,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1224:12:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 81,
                          "name": "winnerDrawn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34,
                          "src": "1225:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "77696e6e65722068617320616c726561647920447261776e",
                        "id": 83,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1237:26:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0adeef44ef9a46a68a3c7e52f8eaacfb343dd29560b44a70bf9565865d27456b",
                          "typeString": "literal_string \"winner has already Drawn\""
                        },
                        "value": "winner has already Drawn"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0adeef44ef9a46a68a3c7e52f8eaacfb343dd29560b44a70bf9565865d27456b",
                          "typeString": "literal_string \"winner has already Drawn\""
                        }
                      ],
                      "id": 80,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "1216:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 84,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1216:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 85,
                  "nodeType": "ExpressionStatement",
                  "src": "1216:48:0"
                },
                {
                  "id": 86,
                  "nodeType": "PlaceholderStatement",
                  "src": "1270:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 88,
            "name": "alreadyDrawn",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 79,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1208:2:0"
            },
            "src": "1187:89:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 98,
              "nodeType": "Block",
              "src": "1301:63:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 93,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 91,
                          "name": "active",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 36,
                          "src": "1315:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 92,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1325:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "1315:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6c6f7474657279206973206e6f74206f70656e",
                        "id": 94,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1330:21:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a9e3e88981b2e7082b43157e72d7cc6049ecca59381e2bef128a9c10e04e0bee",
                          "typeString": "literal_string \"lottery is not open\""
                        },
                        "value": "lottery is not open"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a9e3e88981b2e7082b43157e72d7cc6049ecca59381e2bef128a9c10e04e0bee",
                          "typeString": "literal_string \"lottery is not open\""
                        }
                      ],
                      "id": 90,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "1307:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 95,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1307:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 96,
                  "nodeType": "ExpressionStatement",
                  "src": "1307:45:0"
                },
                {
                  "id": 97,
                  "nodeType": "PlaceholderStatement",
                  "src": "1358:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 99,
            "name": "lotteryActive",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 89,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1301:0:0"
            },
            "src": "1279:85:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 111,
              "nodeType": "Block",
              "src": "1386:74:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1400:24:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 102,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 572,
                                "src": "1401:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 103,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1401:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 104,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "isContract",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 428,
                            "src": "1401:21:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$bound_to$_t_address_$",
                              "typeString": "function (address) view returns (bool)"
                            }
                          },
                          "id": 105,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1401:23:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6f6e6c792068756d616e732063616e20706c6179",
                        "id": 107,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1425:22:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a9accfe09642b010dcea4360343e0fe7879ee3827a1aaa596b38c0a7273038e6",
                          "typeString": "literal_string \"only humans can play\""
                        },
                        "value": "only humans can play"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a9accfe09642b010dcea4360343e0fe7879ee3827a1aaa596b38c0a7273038e6",
                          "typeString": "literal_string \"only humans can play\""
                        }
                      ],
                      "id": 101,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "1392:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 108,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1392:56:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109,
                  "nodeType": "ExpressionStatement",
                  "src": "1392:56:0"
                },
                {
                  "id": 110,
                  "nodeType": "PlaceholderStatement",
                  "src": "1454:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 112,
            "name": "isHuman",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 100,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1383:2:0"
            },
            "src": "1367:93:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 128,
              "nodeType": "Block",
              "src": "1614:73:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 115,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "1620:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 116,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 572,
                        "src": "1628:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 117,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1628:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1620:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 119,
                  "nodeType": "ExpressionStatement",
                  "src": "1620:18:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 120,
                      "name": "price",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "1644:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "31303030303030",
                      "id": 121,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1652:11:0",
                      "subdenomination": "wei",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000000_by_1",
                        "typeString": "int_const 1000000"
                      },
                      "value": "1000000"
                    },
                    "src": "1644:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 123,
                  "nodeType": "ExpressionStatement",
                  "src": "1644:19:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 124,
                      "name": "active",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36,
                      "src": "1669:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 125,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1678:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1669:13:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 127,
                  "nodeType": "ExpressionStatement",
                  "src": "1669:13:0"
                }
              ]
            },
            "documentation": null,
            "id": 129,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 113,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1605:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 114,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1614:0:0"
            },
            "scope": 410,
            "src": "1594:93:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 216,
              "nodeType": "Block",
              "src": "1916:437:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 143,
                          "name": "guess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 131,
                          "src": "1930:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30783230",
                          "id": 144,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1939:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_32_by_1",
                            "typeString": "int_const 32"
                          },
                          "value": "0x20"
                        },
                        "src": "1930:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "63616e6e6f7420626520656d707479",
                        "id": 146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1944:17:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6cfd764947308609fa112b769cf988a1e3bf0d94134117c5675ea4172ce01fe6",
                          "typeString": "literal_string \"cannot be empty\""
                        },
                        "value": "cannot be empty"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_6cfd764947308609fa112b769cf988a1e3bf0d94134117c5675ea4172ce01fe6",
                          "typeString": "literal_string \"cannot be empty\""
                        }
                      ],
                      "id": 142,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "1922:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1922:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 148,
                  "nodeType": "ExpressionStatement",
                  "src": "1922:40:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 152,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 150,
                          "name": "guess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 131,
                          "src": "1976:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3230",
                          "id": 151,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1985:2:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_20_by_1",
                            "typeString": "int_const 20"
                          },
                          "value": "20"
                        },
                        "src": "1976:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6e756d6265722073686f756c64206265206265747765656e203020616e64203230",
                        "id": 153,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1988:35:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f1fb0203a3ef815025872ddef4da62a192bb3eaac21663bf3efbd013137f5d1a",
                          "typeString": "literal_string \"number should be between 0 and 20\""
                        },
                        "value": "number should be between 0 and 20"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f1fb0203a3ef815025872ddef4da62a192bb3eaac21663bf3efbd013137f5d1a",
                          "typeString": "literal_string \"number should be between 0 and 20\""
                        }
                      ],
                      "id": 149,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "1968:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 154,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1968:56:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 155,
                  "nodeType": "ExpressionStatement",
                  "src": "1968:56:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 157,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 572,
                            "src": "2038:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 158,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2038:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 159,
                          "name": "price",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18,
                          "src": "2051:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2038:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "70726963652073686f756c642062652031303030303030",
                        "id": 161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2057:25:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_38c9409dd101dd139bcbfa3356bae1d7ad03e11677a9408d45bef4859a833348",
                          "typeString": "literal_string \"price should be 1000000\""
                        },
                        "value": "price should be 1000000"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_38c9409dd101dd139bcbfa3356bae1d7ad03e11677a9408d45bef4859a833348",
                          "typeString": "literal_string \"price should be 1000000\""
                        }
                      ],
                      "id": 156,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "2030:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2030:53:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 163,
                  "nodeType": "ExpressionStatement",
                  "src": "2030:53:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 167,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 572,
                          "src": "2105:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 168,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2105:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 164,
                        "name": "allHolders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "2089:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 166,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2089:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) returns (uint256)"
                      }
                    },
                    "id": 169,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2089:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 170,
                  "nodeType": "ExpressionStatement",
                  "src": "2089:27:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 176,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 171,
                        "name": "holders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40,
                        "src": "2122:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 173,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 172,
                        "name": "playerID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29,
                        "src": "2130:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2122:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 174,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 572,
                        "src": "2142:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 175,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2142:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2122:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 177,
                  "nodeType": "ExpressionStatement",
                  "src": "2122:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 181,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2171:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 178,
                        "name": "playerID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29,
                        "src": "2158:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 180,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 536,
                      "src": "2158:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 182,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2158:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 183,
                  "nodeType": "ExpressionStatement",
                  "src": "2158:15:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 187,
                        "name": "guess",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 131,
                        "src": "2193:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 184,
                        "name": "allGuess",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "2179:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 186,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2179:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2179:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 189,
                  "nodeType": "ExpressionStatement",
                  "src": "2179:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 195,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 190,
                        "name": "Guesses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "2205:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 193,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 191,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 572,
                          "src": "2213:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 192,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2213:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2205:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 194,
                      "name": "guess",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 131,
                      "src": "2227:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2205:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 196,
                  "nodeType": "ExpressionStatement",
                  "src": "2205:27:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 203,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 197,
                      "name": "totalAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27,
                      "src": "2238:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 200,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 572,
                            "src": "2268:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 201,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2268:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 198,
                          "name": "totalAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27,
                          "src": "2252:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 536,
                        "src": "2252:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 202,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2252:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2238:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 204,
                  "nodeType": "ExpressionStatement",
                  "src": "2238:40:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 206,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 572,
                          "src": "2295:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 207,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2295:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 208,
                        "name": "playerID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29,
                        "src": "2306:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 209,
                        "name": "guess",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 131,
                        "src": "2315:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 210,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 572,
                          "src": "2321:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 211,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2321:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 205,
                      "name": "Guess",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54,
                      "src": "2289:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256,uint256)"
                      }
                    },
                    "id": 212,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2289:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 213,
                  "nodeType": "EmitStatement",
                  "src": "2284:47:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 214,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2344:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 141,
                  "id": 215,
                  "nodeType": "Return",
                  "src": "2337:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 217,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 134,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 133,
                  "name": "notowner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 78,
                  "src": "1855:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1855:8:0"
              },
              {
                "arguments": null,
                "id": 136,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 135,
                  "name": "lotteryActive",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 99,
                  "src": "1866:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1866:13:0"
              },
              {
                "arguments": null,
                "id": 138,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 137,
                  "name": "isHuman",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 112,
                  "src": "1882:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1882:7:0"
              }
            ],
            "name": "makeGuess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 131,
                  "name": "guess",
                  "nodeType": "VariableDeclaration",
                  "scope": 217,
                  "src": "1831:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 130,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1831:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1830:12:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 141,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 140,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 217,
                  "src": "1911:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 139,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1911:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1910:6:0"
            },
            "scope": 410,
            "src": "1812:541:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 287,
              "nodeType": "Block",
              "src": "2466:326:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 245,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 229,
                      "name": "luckyNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25,
                      "src": "2479:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 243,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 235,
                                          "name": "block",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 562,
                                          "src": "2534:5:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_block",
                                            "typeString": "block"
                                          }
                                        },
                                        "id": 236,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "timestamp",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "2534:15:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 237,
                                          "name": "block",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 562,
                                          "src": "2551:5:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_block",
                                            "typeString": "block"
                                          }
                                        },
                                        "id": 238,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "difficulty",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "2551:16:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 233,
                                        "name": "abi",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 559,
                                        "src": "2517:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_abi",
                                          "typeString": "abi"
                                        }
                                      },
                                      "id": 234,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "memberName": "encodePacked",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2517:16:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                        "typeString": "function () pure returns (bytes memory)"
                                      }
                                    },
                                    "id": 239,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2517:51:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  ],
                                  "id": 232,
                                  "name": "keccak256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 566,
                                  "src": "2507:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                    "typeString": "function () pure returns (bytes32)"
                                  }
                                },
                                "id": 240,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2507:62:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "id": 231,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2499:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": "uint256"
                            },
                            "id": 241,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2499:71:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3231",
                            "id": 242,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2571:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_21_by_1",
                              "typeString": "int_const 21"
                            },
                            "value": "21"
                          },
                          "src": "2499:74:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 230,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2493:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint8_$",
                          "typeString": "type(uint8)"
                        },
                        "typeName": "uint8"
                      },
                      "id": 244,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2493:81:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "2479:95:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 246,
                  "nodeType": "ExpressionStatement",
                  "src": "2479:95:0"
                },
                {
                  "body": {
                    "id": 279,
                    "nodeType": "Block",
                    "src": "2623:121:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 262,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 258,
                            "name": "luckyNumber",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25,
                            "src": "2635:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 259,
                              "name": "allGuess",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "2650:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 261,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 260,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 248,
                              "src": "2659:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2650:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2635:26:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 278,
                        "nodeType": "IfStatement",
                        "src": "2631:107:0",
                        "trueBody": {
                          "id": 277,
                          "nodeType": "Block",
                          "src": "2663:75:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 266,
                                      "name": "allHolders",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 10,
                                      "src": "2686:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                        "typeString": "address[] storage ref"
                                      }
                                    },
                                    "id": 268,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 267,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 248,
                                      "src": "2697:1:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "2686:13:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 263,
                                    "name": "winners",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13,
                                    "src": "2673:7:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                      "typeString": "address[] storage ref"
                                    }
                                  },
                                  "id": 265,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "push",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2673:12:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                    "typeString": "function (address) returns (uint256)"
                                  }
                                },
                                "id": 269,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2673:27:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 270,
                              "nodeType": "ExpressionStatement",
                              "src": "2673:27:0"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "31",
                                    "id": 274,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2727:1:0",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 271,
                                    "name": "totalWinners",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 23,
                                    "src": "2710:12:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 273,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "add",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 536,
                                  "src": "2710:16:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 275,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2710:19:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 276,
                              "nodeType": "ExpressionStatement",
                              "src": "2710:19:0"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 254,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 251,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 248,
                      "src": "2596:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 252,
                        "name": "allHolders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "2600:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 253,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2600:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2596:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 280,
                  "initializationExpression": {
                    "assignments": [
                      248
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 248,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 288,
                        "src": "2584:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 247,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2584:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 250,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 249,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2593:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2584:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2619:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 255,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 248,
                        "src": "2619:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 257,
                    "nodeType": "ExpressionStatement",
                    "src": "2619:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "2580:164:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 283,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 281,
                      "name": "winnerDrawn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "2749:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 282,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2763:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2749:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 284,
                  "nodeType": "ExpressionStatement",
                  "src": "2749:18:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 285,
                    "name": "winners",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13,
                    "src": "2780:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "functionReturnParameters": 228,
                  "id": 286,
                  "nodeType": "Return",
                  "src": "2773:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 288,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 220,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 219,
                  "name": "onlyowner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 66,
                  "src": "2410:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2410:9:0"
              },
              {
                "arguments": null,
                "id": 222,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 221,
                  "name": "alreadyDrawn",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 88,
                  "src": "2422:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2422:12:0"
              },
              {
                "arguments": null,
                "id": 224,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 223,
                  "name": "isHuman",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 112,
                  "src": "2437:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2437:7:0"
              }
            ],
            "name": "drawWinner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 218,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2395:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 227,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 288,
                  "src": "2455:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 225,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2455:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 226,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2455:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2454:11:0"
            },
            "scope": 410,
            "src": "2376:416:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 342,
              "nodeType": "Block",
              "src": "2874:265:0",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 295,
                      "name": "totalWinners",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23,
                      "src": "2883:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 296,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2899:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2883:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 303,
                  "nodeType": "IfStatement",
                  "src": "2880:55:0",
                  "trueBody": {
                    "id": 302,
                    "nodeType": "Block",
                    "src": "2901:34:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 299,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5,
                              "src": "2922:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 298,
                            "name": "selfdestruct",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 580,
                            "src": "2909:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                              "typeString": "function (address)"
                            }
                          },
                          "id": 300,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2909:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 301,
                        "nodeType": "ExpressionStatement",
                        "src": "2909:19:0"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    305
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 305,
                      "name": "winnerreward",
                      "nodeType": "VariableDeclaration",
                      "scope": 343,
                      "src": "2940:17:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 304,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2940:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 317,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 315,
                        "name": "totalWinners",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23,
                        "src": "2995:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "components": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 311,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2987:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 307,
                                      "name": "this",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 589,
                                      "src": "2969:4:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Lottery_$410",
                                        "typeString": "contract Lottery"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_Lottery_$410",
                                        "typeString": "contract Lottery"
                                      }
                                    ],
                                    "id": 306,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "2961:7:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": "address"
                                  },
                                  "id": 308,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2961:13:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "id": 309,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "balance",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2961:21:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 310,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "div",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 488,
                              "src": "2961:25:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 312,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2961:28:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 313,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2960:30:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 314,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 488,
                      "src": "2960:34:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 316,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2960:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2940:68:0"
                },
                {
                  "body": {
                    "id": 336,
                    "nodeType": "Block",
                    "src": "3052:58:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 333,
                              "name": "winnerreward",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 305,
                              "src": "3081:12:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 329,
                                "name": "winners",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13,
                                "src": "3061:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                  "typeString": "address[] storage ref"
                                }
                              },
                              "id": 331,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 330,
                                "name": "j",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 319,
                                "src": "3069:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3061:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 332,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3061:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 334,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3061:33:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 335,
                        "nodeType": "ExpressionStatement",
                        "src": "3061:33:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 325,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 322,
                      "name": "j",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 319,
                      "src": "3029:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 323,
                        "name": "winners",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13,
                        "src": "3033:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 324,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3033:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3029:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 337,
                  "initializationExpression": {
                    "assignments": [
                      319
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 319,
                        "name": "j",
                        "nodeType": "VariableDeclaration",
                        "scope": 343,
                        "src": "3018:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 318,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "3018:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 321,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 320,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3027:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3018:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 327,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3048:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 326,
                        "name": "j",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 319,
                        "src": "3048:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 328,
                    "nodeType": "ExpressionStatement",
                    "src": "3048:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "3014:96:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 339,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "3128:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 338,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 580,
                      "src": "3115:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 340,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3115:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 341,
                  "nodeType": "ExpressionStatement",
                  "src": "3115:19:0"
                }
              ]
            },
            "documentation": null,
            "id": 343,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 291,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 290,
                  "name": "onlyowner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 66,
                  "src": "2846:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2846:9:0"
              },
              {
                "arguments": null,
                "id": 293,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 292,
                  "name": "lotteryActive",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 99,
                  "src": "2858:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2858:13:0"
              }
            ],
            "name": "distributeReward",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 289,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2830:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 294,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2874:0:0"
            },
            "scope": 410,
            "src": "2805:334:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 351,
              "nodeType": "Block",
              "src": "3297:28:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 349,
                    "name": "allHolders",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 10,
                    "src": "3310:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "functionReturnParameters": 348,
                  "id": 350,
                  "nodeType": "Return",
                  "src": "3303:17:0"
                }
              ]
            },
            "documentation": null,
            "id": 352,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getHolders",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 344,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3263:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 348,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 347,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 352,
                  "src": "3286:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 345,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3286:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 346,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3286:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3285:11:0"
            },
            "scope": 410,
            "src": "3244:81:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 360,
              "nodeType": "Block",
              "src": "3384:25:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 358,
                    "name": "winners",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13,
                    "src": "3397:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "functionReturnParameters": 357,
                  "id": 359,
                  "nodeType": "Return",
                  "src": "3390:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 361,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getWinners",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 353,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3350:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 357,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 356,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 361,
                  "src": "3373:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 354,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3373:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 355,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3373:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3372:11:0"
            },
            "scope": 410,
            "src": "3331:78:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 368,
              "nodeType": "Block",
              "src": "3468:30:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 366,
                    "name": "totalWinners",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 23,
                    "src": "3481:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 365,
                  "id": 367,
                  "nodeType": "Return",
                  "src": "3474:19:0"
                }
              ]
            },
            "documentation": null,
            "id": 369,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTotalWinners",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 362,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3439:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 364,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 369,
                  "src": "3462:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 363,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3462:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3461:6:0"
            },
            "scope": 410,
            "src": "3415:83:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 376,
              "nodeType": "Block",
              "src": "3556:29:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 374,
                    "name": "luckyNumber",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 25,
                    "src": "3569:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 373,
                  "id": 375,
                  "nodeType": "Return",
                  "src": "3562:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 377,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLuckyNumber",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 370,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3527:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 372,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 377,
                  "src": "3550:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 371,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3550:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3549:6:0"
            },
            "scope": 410,
            "src": "3504:81:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 384,
              "nodeType": "Block",
              "src": "3643:29:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 382,
                    "name": "totalAmount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27,
                    "src": "3656:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 381,
                  "id": 383,
                  "nodeType": "Return",
                  "src": "3649:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 385,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTotalAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 378,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3614:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 381,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 380,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 385,
                  "src": "3637:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 379,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3637:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3636:6:0"
            },
            "scope": 410,
            "src": "3591:81:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 396,
              "nodeType": "Block",
              "src": "3749:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 392,
                      "name": "holders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40,
                      "src": "3762:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 394,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 393,
                      "name": "playerId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 387,
                      "src": "3770:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3762:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 391,
                  "id": 395,
                  "nodeType": "Return",
                  "src": "3755:24:0"
                }
              ]
            },
            "documentation": null,
            "id": 397,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getHoldersAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 388,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 387,
                  "name": "playerId",
                  "nodeType": "VariableDeclaration",
                  "scope": 397,
                  "src": "3705:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 386,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3705:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3704:15:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 390,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 397,
                  "src": "3740:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 389,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3740:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3739:9:0"
            },
            "scope": 410,
            "src": "3678:106:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 408,
              "nodeType": "Block",
              "src": "3850:33:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 404,
                      "name": "Guesses",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44,
                      "src": "3863:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 406,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 405,
                      "name": "player",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 399,
                      "src": "3871:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3863:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 403,
                  "id": 407,
                  "nodeType": "Return",
                  "src": "3856:22:0"
                }
              ]
            },
            "documentation": null,
            "id": 409,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getGuess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 399,
                  "name": "player",
                  "nodeType": "VariableDeclaration",
                  "scope": 409,
                  "src": "3808:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 398,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3808:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3807:16:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 403,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 402,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 409,
                  "src": "3844:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 401,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3844:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3843:6:0"
            },
            "scope": 410,
            "src": "3790:93:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 411,
        "src": "84:3803:0"
      }
    ],
    "src": "0:3888:0"
  },
  "legacyAST": {
    "absolutePath": "/home/appinventiv/Lot/LotteryDapp/contracts/Lottery.sol",
    "exportedSymbols": {
      "Lottery": [
        410
      ]
    },
    "id": 411,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "/home/appinventiv/Lot/LotteryDapp/contracts/lib/Address.sol",
        "file": "./lib/Address.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 411,
        "sourceUnit": 430,
        "src": "26:27:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/appinventiv/Lot/LotteryDapp/contracts/lib/SafeMath.sol",
        "file": "./lib/SafeMath.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 411,
        "sourceUnit": 558,
        "src": "54:28:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 410,
        "linearizedBaseContracts": [
          410
        ],
        "name": "Lottery",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "112:13:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 4,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "112:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 7,
            "name": "winner",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "129:14:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 6,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "129:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10,
            "name": "allHolders",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "147:20:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 8,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "147:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 9,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "147:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 13,
            "name": "winners",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "171:17:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 11,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "171:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 12,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "171:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "id": 16,
            "libraryName": {
              "contractScope": null,
              "id": 14,
              "name": "Address",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 429,
              "src": "198:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Address_$429",
                "typeString": "library Address"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "192:26:0",
            "typeName": {
              "id": 15,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "210:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            }
          },
          {
            "constant": false,
            "id": 18,
            "name": "price",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "224:10:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "224:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 21,
            "name": "allGuess",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "238:15:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 19,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "238:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 20,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "238:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 23,
            "name": "totalWinners",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "257:17:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 22,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "257:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 25,
            "name": "luckyNumber",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "278:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 24,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "278:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 27,
            "name": "totalAmount",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "298:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 26,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "298:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 29,
            "name": "playerID",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "318:13:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 28,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "318:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "id": 32,
            "libraryName": {
              "contractScope": null,
              "id": 30,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 557,
              "src": "341:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$557",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "335:24:0",
            "typeName": {
              "id": 31,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "354:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 34,
            "name": "winnerDrawn",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "365:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 33,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "365:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 36,
            "name": "active",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "385:11:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 35,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "385:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 40,
            "name": "holders",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "507:33:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 39,
              "keyType": {
                "id": 37,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "516:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "507:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueType": {
                "id": 38,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "524:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 44,
            "name": "Guesses",
            "nodeType": "VariableDeclaration",
            "scope": 410,
            "src": "584:33:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 43,
              "keyType": {
                "id": 41,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "593:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "584:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 42,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "604:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 54,
            "name": "Guess",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 53,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "785:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 45,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "785:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48,
                  "indexed": true,
                  "name": "PlayerID",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "813:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 47,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "813:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50,
                  "indexed": true,
                  "name": "_guess",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "842:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "842:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "869:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "869:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "777:106:0"
            },
            "src": "766:118:0"
          },
          {
            "body": {
              "id": 65,
              "nodeType": "Block",
              "src": "1025:68:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 60,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 57,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 572,
                            "src": "1039:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 58,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1039:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 59,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "1053:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1039:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6f6e6c79206f776e65722063616e2063616c6c",
                        "id": 61,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1059:21:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_310c5991689599402c8011291d18e93a982bae2ba4c10e1efcb3787880c54fcd",
                          "typeString": "literal_string \"only owner can call\""
                        },
                        "value": "only owner can call"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_310c5991689599402c8011291d18e93a982bae2ba4c10e1efcb3787880c54fcd",
                          "typeString": "literal_string \"only owner can call\""
                        }
                      ],
                      "id": 56,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "1031:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 62,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1031:50:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63,
                  "nodeType": "ExpressionStatement",
                  "src": "1031:50:0"
                },
                {
                  "id": 64,
                  "nodeType": "PlaceholderStatement",
                  "src": "1087:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 66,
            "name": "onlyowner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 55,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1023:2:0"
            },
            "src": "1005:88:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 77,
              "nodeType": "Block",
              "src": "1115:69:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 72,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 69,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 572,
                            "src": "1129:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 70,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1129:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 71,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "1143:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1129:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6f776e6572206973206e6f7420616c6c6f776564",
                        "id": 73,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1149:22:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0b161fe3bbbebd9783e133f43b695042ac6979a5f0cdf335eb85f74b9dec4db3",
                          "typeString": "literal_string \"owner is not allowed\""
                        },
                        "value": "owner is not allowed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0b161fe3bbbebd9783e133f43b695042ac6979a5f0cdf335eb85f74b9dec4db3",
                          "typeString": "literal_string \"owner is not allowed\""
                        }
                      ],
                      "id": 68,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "1121:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 74,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1121:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 75,
                  "nodeType": "ExpressionStatement",
                  "src": "1121:51:0"
                },
                {
                  "id": 76,
                  "nodeType": "PlaceholderStatement",
                  "src": "1178:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 78,
            "name": "notowner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 67,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1113:2:0"
            },
            "src": "1096:88:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 87,
              "nodeType": "Block",
              "src": "1210:66:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 82,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1224:12:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 81,
                          "name": "winnerDrawn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34,
                          "src": "1225:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "77696e6e65722068617320616c726561647920447261776e",
                        "id": 83,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1237:26:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0adeef44ef9a46a68a3c7e52f8eaacfb343dd29560b44a70bf9565865d27456b",
                          "typeString": "literal_string \"winner has already Drawn\""
                        },
                        "value": "winner has already Drawn"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0adeef44ef9a46a68a3c7e52f8eaacfb343dd29560b44a70bf9565865d27456b",
                          "typeString": "literal_string \"winner has already Drawn\""
                        }
                      ],
                      "id": 80,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "1216:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 84,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1216:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 85,
                  "nodeType": "ExpressionStatement",
                  "src": "1216:48:0"
                },
                {
                  "id": 86,
                  "nodeType": "PlaceholderStatement",
                  "src": "1270:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 88,
            "name": "alreadyDrawn",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 79,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1208:2:0"
            },
            "src": "1187:89:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 98,
              "nodeType": "Block",
              "src": "1301:63:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 93,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 91,
                          "name": "active",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 36,
                          "src": "1315:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 92,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1325:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "1315:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6c6f7474657279206973206e6f74206f70656e",
                        "id": 94,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1330:21:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a9e3e88981b2e7082b43157e72d7cc6049ecca59381e2bef128a9c10e04e0bee",
                          "typeString": "literal_string \"lottery is not open\""
                        },
                        "value": "lottery is not open"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a9e3e88981b2e7082b43157e72d7cc6049ecca59381e2bef128a9c10e04e0bee",
                          "typeString": "literal_string \"lottery is not open\""
                        }
                      ],
                      "id": 90,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "1307:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 95,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1307:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 96,
                  "nodeType": "ExpressionStatement",
                  "src": "1307:45:0"
                },
                {
                  "id": 97,
                  "nodeType": "PlaceholderStatement",
                  "src": "1358:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 99,
            "name": "lotteryActive",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 89,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1301:0:0"
            },
            "src": "1279:85:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 111,
              "nodeType": "Block",
              "src": "1386:74:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1400:24:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 102,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 572,
                                "src": "1401:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 103,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1401:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 104,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "isContract",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 428,
                            "src": "1401:21:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$bound_to$_t_address_$",
                              "typeString": "function (address) view returns (bool)"
                            }
                          },
                          "id": 105,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1401:23:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6f6e6c792068756d616e732063616e20706c6179",
                        "id": 107,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1425:22:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a9accfe09642b010dcea4360343e0fe7879ee3827a1aaa596b38c0a7273038e6",
                          "typeString": "literal_string \"only humans can play\""
                        },
                        "value": "only humans can play"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a9accfe09642b010dcea4360343e0fe7879ee3827a1aaa596b38c0a7273038e6",
                          "typeString": "literal_string \"only humans can play\""
                        }
                      ],
                      "id": 101,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "1392:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 108,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1392:56:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109,
                  "nodeType": "ExpressionStatement",
                  "src": "1392:56:0"
                },
                {
                  "id": 110,
                  "nodeType": "PlaceholderStatement",
                  "src": "1454:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 112,
            "name": "isHuman",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 100,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1383:2:0"
            },
            "src": "1367:93:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 128,
              "nodeType": "Block",
              "src": "1614:73:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 115,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "1620:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 116,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 572,
                        "src": "1628:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 117,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1628:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1620:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 119,
                  "nodeType": "ExpressionStatement",
                  "src": "1620:18:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 120,
                      "name": "price",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "1644:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "31303030303030",
                      "id": 121,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1652:11:0",
                      "subdenomination": "wei",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000000_by_1",
                        "typeString": "int_const 1000000"
                      },
                      "value": "1000000"
                    },
                    "src": "1644:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 123,
                  "nodeType": "ExpressionStatement",
                  "src": "1644:19:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 124,
                      "name": "active",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36,
                      "src": "1669:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 125,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1678:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1669:13:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 127,
                  "nodeType": "ExpressionStatement",
                  "src": "1669:13:0"
                }
              ]
            },
            "documentation": null,
            "id": 129,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 113,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1605:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 114,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1614:0:0"
            },
            "scope": 410,
            "src": "1594:93:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 216,
              "nodeType": "Block",
              "src": "1916:437:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 143,
                          "name": "guess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 131,
                          "src": "1930:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30783230",
                          "id": 144,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1939:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_32_by_1",
                            "typeString": "int_const 32"
                          },
                          "value": "0x20"
                        },
                        "src": "1930:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "63616e6e6f7420626520656d707479",
                        "id": 146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1944:17:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6cfd764947308609fa112b769cf988a1e3bf0d94134117c5675ea4172ce01fe6",
                          "typeString": "literal_string \"cannot be empty\""
                        },
                        "value": "cannot be empty"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_6cfd764947308609fa112b769cf988a1e3bf0d94134117c5675ea4172ce01fe6",
                          "typeString": "literal_string \"cannot be empty\""
                        }
                      ],
                      "id": 142,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "1922:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1922:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 148,
                  "nodeType": "ExpressionStatement",
                  "src": "1922:40:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 152,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 150,
                          "name": "guess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 131,
                          "src": "1976:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3230",
                          "id": 151,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1985:2:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_20_by_1",
                            "typeString": "int_const 20"
                          },
                          "value": "20"
                        },
                        "src": "1976:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6e756d6265722073686f756c64206265206265747765656e203020616e64203230",
                        "id": 153,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1988:35:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f1fb0203a3ef815025872ddef4da62a192bb3eaac21663bf3efbd013137f5d1a",
                          "typeString": "literal_string \"number should be between 0 and 20\""
                        },
                        "value": "number should be between 0 and 20"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f1fb0203a3ef815025872ddef4da62a192bb3eaac21663bf3efbd013137f5d1a",
                          "typeString": "literal_string \"number should be between 0 and 20\""
                        }
                      ],
                      "id": 149,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "1968:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 154,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1968:56:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 155,
                  "nodeType": "ExpressionStatement",
                  "src": "1968:56:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 157,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 572,
                            "src": "2038:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 158,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2038:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 159,
                          "name": "price",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18,
                          "src": "2051:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2038:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "70726963652073686f756c642062652031303030303030",
                        "id": 161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2057:25:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_38c9409dd101dd139bcbfa3356bae1d7ad03e11677a9408d45bef4859a833348",
                          "typeString": "literal_string \"price should be 1000000\""
                        },
                        "value": "price should be 1000000"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_38c9409dd101dd139bcbfa3356bae1d7ad03e11677a9408d45bef4859a833348",
                          "typeString": "literal_string \"price should be 1000000\""
                        }
                      ],
                      "id": 156,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        575,
                        576
                      ],
                      "referencedDeclaration": 576,
                      "src": "2030:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2030:53:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 163,
                  "nodeType": "ExpressionStatement",
                  "src": "2030:53:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 167,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 572,
                          "src": "2105:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 168,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2105:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 164,
                        "name": "allHolders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "2089:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 166,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2089:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) returns (uint256)"
                      }
                    },
                    "id": 169,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2089:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 170,
                  "nodeType": "ExpressionStatement",
                  "src": "2089:27:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 176,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 171,
                        "name": "holders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40,
                        "src": "2122:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 173,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 172,
                        "name": "playerID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29,
                        "src": "2130:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2122:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 174,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 572,
                        "src": "2142:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 175,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2142:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2122:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 177,
                  "nodeType": "ExpressionStatement",
                  "src": "2122:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 181,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2171:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 178,
                        "name": "playerID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29,
                        "src": "2158:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 180,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 536,
                      "src": "2158:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 182,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2158:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 183,
                  "nodeType": "ExpressionStatement",
                  "src": "2158:15:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 187,
                        "name": "guess",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 131,
                        "src": "2193:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 184,
                        "name": "allGuess",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "2179:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 186,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2179:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2179:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 189,
                  "nodeType": "ExpressionStatement",
                  "src": "2179:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 195,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 190,
                        "name": "Guesses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "2205:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 193,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 191,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 572,
                          "src": "2213:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 192,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2213:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2205:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 194,
                      "name": "guess",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 131,
                      "src": "2227:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2205:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 196,
                  "nodeType": "ExpressionStatement",
                  "src": "2205:27:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 203,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 197,
                      "name": "totalAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27,
                      "src": "2238:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 200,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 572,
                            "src": "2268:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 201,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2268:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 198,
                          "name": "totalAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27,
                          "src": "2252:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 536,
                        "src": "2252:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 202,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2252:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2238:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 204,
                  "nodeType": "ExpressionStatement",
                  "src": "2238:40:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 206,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 572,
                          "src": "2295:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 207,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2295:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 208,
                        "name": "playerID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29,
                        "src": "2306:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 209,
                        "name": "guess",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 131,
                        "src": "2315:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 210,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 572,
                          "src": "2321:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 211,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2321:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 205,
                      "name": "Guess",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54,
                      "src": "2289:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256,uint256)"
                      }
                    },
                    "id": 212,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2289:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 213,
                  "nodeType": "EmitStatement",
                  "src": "2284:47:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 214,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2344:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 141,
                  "id": 215,
                  "nodeType": "Return",
                  "src": "2337:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 217,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 134,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 133,
                  "name": "notowner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 78,
                  "src": "1855:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1855:8:0"
              },
              {
                "arguments": null,
                "id": 136,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 135,
                  "name": "lotteryActive",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 99,
                  "src": "1866:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1866:13:0"
              },
              {
                "arguments": null,
                "id": 138,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 137,
                  "name": "isHuman",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 112,
                  "src": "1882:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1882:7:0"
              }
            ],
            "name": "makeGuess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 131,
                  "name": "guess",
                  "nodeType": "VariableDeclaration",
                  "scope": 217,
                  "src": "1831:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 130,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1831:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1830:12:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 141,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 140,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 217,
                  "src": "1911:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 139,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1911:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1910:6:0"
            },
            "scope": 410,
            "src": "1812:541:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 287,
              "nodeType": "Block",
              "src": "2466:326:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 245,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 229,
                      "name": "luckyNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25,
                      "src": "2479:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 243,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 235,
                                          "name": "block",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 562,
                                          "src": "2534:5:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_block",
                                            "typeString": "block"
                                          }
                                        },
                                        "id": 236,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "timestamp",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "2534:15:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 237,
                                          "name": "block",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 562,
                                          "src": "2551:5:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_block",
                                            "typeString": "block"
                                          }
                                        },
                                        "id": 238,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "difficulty",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "2551:16:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 233,
                                        "name": "abi",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 559,
                                        "src": "2517:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_abi",
                                          "typeString": "abi"
                                        }
                                      },
                                      "id": 234,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "memberName": "encodePacked",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2517:16:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                        "typeString": "function () pure returns (bytes memory)"
                                      }
                                    },
                                    "id": 239,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2517:51:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  ],
                                  "id": 232,
                                  "name": "keccak256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 566,
                                  "src": "2507:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                    "typeString": "function () pure returns (bytes32)"
                                  }
                                },
                                "id": 240,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2507:62:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "id": 231,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2499:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": "uint256"
                            },
                            "id": 241,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2499:71:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3231",
                            "id": 242,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2571:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_21_by_1",
                              "typeString": "int_const 21"
                            },
                            "value": "21"
                          },
                          "src": "2499:74:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 230,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2493:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint8_$",
                          "typeString": "type(uint8)"
                        },
                        "typeName": "uint8"
                      },
                      "id": 244,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2493:81:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "2479:95:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 246,
                  "nodeType": "ExpressionStatement",
                  "src": "2479:95:0"
                },
                {
                  "body": {
                    "id": 279,
                    "nodeType": "Block",
                    "src": "2623:121:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 262,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 258,
                            "name": "luckyNumber",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25,
                            "src": "2635:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 259,
                              "name": "allGuess",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "2650:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 261,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 260,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 248,
                              "src": "2659:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2650:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2635:26:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 278,
                        "nodeType": "IfStatement",
                        "src": "2631:107:0",
                        "trueBody": {
                          "id": 277,
                          "nodeType": "Block",
                          "src": "2663:75:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 266,
                                      "name": "allHolders",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 10,
                                      "src": "2686:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                        "typeString": "address[] storage ref"
                                      }
                                    },
                                    "id": 268,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 267,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 248,
                                      "src": "2697:1:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "2686:13:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 263,
                                    "name": "winners",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13,
                                    "src": "2673:7:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                      "typeString": "address[] storage ref"
                                    }
                                  },
                                  "id": 265,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "push",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2673:12:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                    "typeString": "function (address) returns (uint256)"
                                  }
                                },
                                "id": 269,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2673:27:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 270,
                              "nodeType": "ExpressionStatement",
                              "src": "2673:27:0"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "31",
                                    "id": 274,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2727:1:0",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 271,
                                    "name": "totalWinners",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 23,
                                    "src": "2710:12:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 273,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "add",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 536,
                                  "src": "2710:16:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 275,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2710:19:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 276,
                              "nodeType": "ExpressionStatement",
                              "src": "2710:19:0"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 254,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 251,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 248,
                      "src": "2596:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 252,
                        "name": "allHolders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "2600:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 253,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2600:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2596:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 280,
                  "initializationExpression": {
                    "assignments": [
                      248
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 248,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 288,
                        "src": "2584:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 247,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2584:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 250,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 249,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2593:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2584:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2619:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 255,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 248,
                        "src": "2619:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 257,
                    "nodeType": "ExpressionStatement",
                    "src": "2619:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "2580:164:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 283,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 281,
                      "name": "winnerDrawn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "2749:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 282,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2763:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2749:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 284,
                  "nodeType": "ExpressionStatement",
                  "src": "2749:18:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 285,
                    "name": "winners",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13,
                    "src": "2780:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "functionReturnParameters": 228,
                  "id": 286,
                  "nodeType": "Return",
                  "src": "2773:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 288,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 220,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 219,
                  "name": "onlyowner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 66,
                  "src": "2410:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2410:9:0"
              },
              {
                "arguments": null,
                "id": 222,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 221,
                  "name": "alreadyDrawn",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 88,
                  "src": "2422:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2422:12:0"
              },
              {
                "arguments": null,
                "id": 224,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 223,
                  "name": "isHuman",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 112,
                  "src": "2437:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2437:7:0"
              }
            ],
            "name": "drawWinner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 218,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2395:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 227,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 288,
                  "src": "2455:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 225,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2455:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 226,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2455:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2454:11:0"
            },
            "scope": 410,
            "src": "2376:416:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 342,
              "nodeType": "Block",
              "src": "2874:265:0",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 295,
                      "name": "totalWinners",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23,
                      "src": "2883:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 296,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2899:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2883:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 303,
                  "nodeType": "IfStatement",
                  "src": "2880:55:0",
                  "trueBody": {
                    "id": 302,
                    "nodeType": "Block",
                    "src": "2901:34:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 299,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5,
                              "src": "2922:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 298,
                            "name": "selfdestruct",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 580,
                            "src": "2909:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                              "typeString": "function (address)"
                            }
                          },
                          "id": 300,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2909:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 301,
                        "nodeType": "ExpressionStatement",
                        "src": "2909:19:0"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    305
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 305,
                      "name": "winnerreward",
                      "nodeType": "VariableDeclaration",
                      "scope": 343,
                      "src": "2940:17:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 304,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2940:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 317,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 315,
                        "name": "totalWinners",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23,
                        "src": "2995:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "components": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 311,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2987:1:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 307,
                                      "name": "this",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 589,
                                      "src": "2969:4:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Lottery_$410",
                                        "typeString": "contract Lottery"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_Lottery_$410",
                                        "typeString": "contract Lottery"
                                      }
                                    ],
                                    "id": 306,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "2961:7:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": "address"
                                  },
                                  "id": 308,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2961:13:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "id": 309,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "balance",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2961:21:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 310,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "div",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 488,
                              "src": "2961:25:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 312,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2961:28:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 313,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2960:30:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 314,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 488,
                      "src": "2960:34:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 316,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2960:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2940:68:0"
                },
                {
                  "body": {
                    "id": 336,
                    "nodeType": "Block",
                    "src": "3052:58:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 333,
                              "name": "winnerreward",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 305,
                              "src": "3081:12:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 329,
                                "name": "winners",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13,
                                "src": "3061:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                  "typeString": "address[] storage ref"
                                }
                              },
                              "id": 331,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 330,
                                "name": "j",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 319,
                                "src": "3069:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3061:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 332,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3061:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 334,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3061:33:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 335,
                        "nodeType": "ExpressionStatement",
                        "src": "3061:33:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 325,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 322,
                      "name": "j",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 319,
                      "src": "3029:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 323,
                        "name": "winners",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13,
                        "src": "3033:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 324,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3033:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3029:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 337,
                  "initializationExpression": {
                    "assignments": [
                      319
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 319,
                        "name": "j",
                        "nodeType": "VariableDeclaration",
                        "scope": 343,
                        "src": "3018:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 318,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "3018:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 321,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 320,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3027:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3018:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 327,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3048:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 326,
                        "name": "j",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 319,
                        "src": "3048:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 328,
                    "nodeType": "ExpressionStatement",
                    "src": "3048:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "3014:96:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 339,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "3128:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 338,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 580,
                      "src": "3115:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 340,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3115:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 341,
                  "nodeType": "ExpressionStatement",
                  "src": "3115:19:0"
                }
              ]
            },
            "documentation": null,
            "id": 343,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 291,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 290,
                  "name": "onlyowner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 66,
                  "src": "2846:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2846:9:0"
              },
              {
                "arguments": null,
                "id": 293,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 292,
                  "name": "lotteryActive",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 99,
                  "src": "2858:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2858:13:0"
              }
            ],
            "name": "distributeReward",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 289,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2830:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 294,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2874:0:0"
            },
            "scope": 410,
            "src": "2805:334:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 351,
              "nodeType": "Block",
              "src": "3297:28:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 349,
                    "name": "allHolders",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 10,
                    "src": "3310:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "functionReturnParameters": 348,
                  "id": 350,
                  "nodeType": "Return",
                  "src": "3303:17:0"
                }
              ]
            },
            "documentation": null,
            "id": 352,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getHolders",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 344,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3263:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 348,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 347,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 352,
                  "src": "3286:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 345,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3286:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 346,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3286:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3285:11:0"
            },
            "scope": 410,
            "src": "3244:81:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 360,
              "nodeType": "Block",
              "src": "3384:25:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 358,
                    "name": "winners",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13,
                    "src": "3397:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "functionReturnParameters": 357,
                  "id": 359,
                  "nodeType": "Return",
                  "src": "3390:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 361,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getWinners",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 353,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3350:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 357,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 356,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 361,
                  "src": "3373:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 354,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3373:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 355,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3373:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3372:11:0"
            },
            "scope": 410,
            "src": "3331:78:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 368,
              "nodeType": "Block",
              "src": "3468:30:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 366,
                    "name": "totalWinners",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 23,
                    "src": "3481:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 365,
                  "id": 367,
                  "nodeType": "Return",
                  "src": "3474:19:0"
                }
              ]
            },
            "documentation": null,
            "id": 369,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTotalWinners",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 362,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3439:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 364,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 369,
                  "src": "3462:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 363,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3462:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3461:6:0"
            },
            "scope": 410,
            "src": "3415:83:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 376,
              "nodeType": "Block",
              "src": "3556:29:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 374,
                    "name": "luckyNumber",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 25,
                    "src": "3569:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 373,
                  "id": 375,
                  "nodeType": "Return",
                  "src": "3562:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 377,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLuckyNumber",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 370,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3527:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 372,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 377,
                  "src": "3550:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 371,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3550:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3549:6:0"
            },
            "scope": 410,
            "src": "3504:81:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 384,
              "nodeType": "Block",
              "src": "3643:29:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 382,
                    "name": "totalAmount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27,
                    "src": "3656:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 381,
                  "id": 383,
                  "nodeType": "Return",
                  "src": "3649:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 385,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTotalAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 378,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3614:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 381,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 380,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 385,
                  "src": "3637:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 379,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3637:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3636:6:0"
            },
            "scope": 410,
            "src": "3591:81:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 396,
              "nodeType": "Block",
              "src": "3749:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 392,
                      "name": "holders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40,
                      "src": "3762:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 394,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 393,
                      "name": "playerId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 387,
                      "src": "3770:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3762:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 391,
                  "id": 395,
                  "nodeType": "Return",
                  "src": "3755:24:0"
                }
              ]
            },
            "documentation": null,
            "id": 397,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getHoldersAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 388,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 387,
                  "name": "playerId",
                  "nodeType": "VariableDeclaration",
                  "scope": 397,
                  "src": "3705:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 386,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3705:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3704:15:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 390,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 397,
                  "src": "3740:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 389,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3740:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3739:9:0"
            },
            "scope": 410,
            "src": "3678:106:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 408,
              "nodeType": "Block",
              "src": "3850:33:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 404,
                      "name": "Guesses",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44,
                      "src": "3863:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 406,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 405,
                      "name": "player",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 399,
                      "src": "3871:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3863:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 403,
                  "id": 407,
                  "nodeType": "Return",
                  "src": "3856:22:0"
                }
              ]
            },
            "documentation": null,
            "id": 409,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getGuess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 399,
                  "name": "player",
                  "nodeType": "VariableDeclaration",
                  "scope": 409,
                  "src": "3808:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 398,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3808:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3807:16:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 403,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 402,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 409,
                  "src": "3844:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 401,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3844:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3843:6:0"
            },
            "scope": 410,
            "src": "3790:93:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 411,
        "src": "84:3803:0"
      }
    ],
    "src": "0:3888:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "4": {
      "events": {},
      "links": {},
      "address": "0xf336b7a4caebf0db3690b605740f712136623d4f",
      "transactionHash": "0x4c722d2e7dc20ff17f1606ec1a01be38778ab77ff8fe9ffb5d01938dda64407d"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-26T11:15:14.050Z"
}