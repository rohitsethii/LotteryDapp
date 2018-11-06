App = {
	web3Provider: null,
	contracts: {},
	luckynumber:null,
	accounts: [],
  
	init: function() {
		  
		$.getJSON('./Lottery.json', function(data) {
		  console.log(data);
		  App.contracts.Lottery = TruffleContract(data);
	  	});
	  
	  	return App.initWeb3();
	},
  
	initWeb3: function() {

		if (typeof web3 !== 'undefined') {
			App.web3Provider = web3.currentProvider;
			web3 = new Web3(web3.currentProvider);
		} 
		else {
			// If no injected web3 instance is detected, fall back to Ganache
			App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
			web3 = new Web3(App.web3Provider);
		}

		accounts = web3.eth.accounts;

	  return App.initContract();
	},
  
	initContract: function() {

		$.getJSON('Lottery.json', function(data) {
			// Get the necessary contract artifact file and instantiate it with truffle-contract
			var lotteryinstance = data;
			App.contracts.Lottery = TruffleContract(lotteryinstance);
		  
			// Set the provider for contract
			App.contracts.Lottery.setProvider(App.web3Provider);
		  
			//return App.makeguess();
		  });
  
	//  return App.gettotal();
	},
  
	makeguess: function() {
		var _guess = $('#_guess').val();
		var Val =$("#val").val();
		
		$.getJSON('Lottery.json', function(data) {
			var account = toString(web3.eth.accounts);
			// Get the necessary contract artifact file and instantiate it with truffle-contract
			var lotteryinstance = data;
			App.contracts.Lottery = TruffleContract(lotteryinstance);
			
			// Set the provider for our contract
			App.contracts.Lottery.setProvider(App.web3Provider);
			
			App.contracts.Lottery.deployed().then(function(lotteryinstance) {
	    		lotteryinstance.makeGuess(5,{gas:2000000,value:Val}).then(function(receipt){
				console.log(receipt);
				})		
			});

			// App.contracts.Lottery.deployed().then(function(lotteryinstance) {
	    	// 	lotteryinstance.makeGuess().then(function(receipt){
			// 		console.log(receipt);
			// 	})		
			// });
			return App.getbalance();
		});
	},
  
	getbalance : function(){ 
		web3.eth.getBalance(accounts[0], function(error, result){
			a = result;
			var b = web3.fromWei(a, 'wei');
			console.log(b.c[0]);
			var c = b.toString();
			console.log(c);
		})

		return App.getholders();
	},

	getholders: function() {
		var LotteryInstance;

		App.contracts.Lottery.deployed().then(function(instance) {
			LotteryInstance = instance;
		
			return LotteryInstance.getHolders(0).then((receipt) => {
				console.log(receipt);
			});
		})
	//	return App.getluckynumber();
	},


	getluckynumber: function() {
		$.getJSON('Lottery.json', function(data) {
		
		var LotteryInstance;

		App.contracts.Lottery.deployed().then(function(instance) {
			LotteryInstance = instance;
		
			return LotteryInstance.getluckynumber().then(function(receipt){
				$('#num').html(receipt.c[0]);  
			  	console.log(receipt.c[0]);
			});
		})
		return App.gettotal();
		})
	},

	gettotal: function() {
		var LotteryInstance;

		App.contracts.Lottery.deployed().then(function(instance) {
			LotteryInstance = instance;
		
			return LotteryInstance.getTotalAmount().then(function(receipt){
				$('#total').html(receipt.c[0]);  
			  	console.log(receipt.c[0]);
			});
		})
		return App.getparticipants();
	},

	getparticipants: function() {
		var LotteryInstance;

		App.contracts.Lottery.deployed().then(function(instance) {
			LotteryInstance = instance;
			for(var i= 0 ;i < 5;i++) {
				return LotteryInstance.getHolders(i).then(function(receipt){
					$('#0').html(receipt);  
					console.log(receipt);
					LotteryInstance.getGuess(receipt).then(function(result){
						$('#a').html(result.c[0]);    
						console.log(result.c[0]);
					});
				});
			}
		})
	//	 return App.getguess();
	},

	getwinner: function() {
		var LotteryInstance;

		App.contracts.Lottery.deployed().then(function(instance) {
			LotteryInstance = instance;
			LotteryInstance.drawWinner().then(function(receipt){
				$('#0').html(receipt);  
				console.log(receipt);
			});
		})
	},

	distribute: function() {
		var LotteryInstance;

		App.contracts.Lottery.deployed().then(function(instance) {
			LotteryInstance = instance;
			LotteryInstance.distributeReward().then(function(receipt){  
				console.log(receipt);
			});
		})
	},
}

$(function() {
	$(window).load(function() {	
		App.init();
		App.getluckynumber();
	  
		web3.eth.getBalance(accounts[0], function(error, result){
			var c = web3.fromWei(result, 'wei').toString();
			console.log(c);
			$('#bal').html(c);
		});
		web3.eth.getBalance(accounts[0], function(error, result){
			var c = web3.fromWei(result,App.contracts.Lottery.Address, 'wei').toString();
			console.log(c);
			$('#bal').html(c);
		});
	});

	$('#makeaguess').on('click',function(){
		App.makeguess();
	})

	$('#getlucky').on('click',function(){
		App.getluckynumber();
	});

	$('#draw').on('click',function(){
		App.getwinner();
	});

	$('#distribute').on('click',function(){
		App.distribute();
	});

});

