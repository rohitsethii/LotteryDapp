App = {
	web3Provider: null,
	contracts: {},
	luckynumber:null,
	accounts: [],
  
	init: function() {
		App.contracts.Lottery = TruffleContract(lottery);
	  	return App.initWeb3();
	},
  
	initWeb3:async function() {
		if (window.ethereum) {
        	window.web3 = new Web3(ethereum);
        	web3 = window.web3;
        	try {
          		// Request account access if needed
          		await ethereum.enable().then(console.log);
					App.web3Provider = web3.currentProvider;
					console.log(App.web3Provider);
           		} catch (error) {
          				console.log("Something went wrong..");
        			}
      		}
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

	},

	makeguess: function() {
		var _guess = $('#_guess').val();
		var Val =$("#val").val();

		// Set the provider for our contract
			App.contracts.Lottery.setProvider(App.web3Provider);
			App.contracts.Lottery.deployed().then(function(lotteryinstance) {
	    		lotteryinstance.makeGuess(_guess,{gas:2000000,value:Val}).then(function(receipt){
				console.log(receipt);
				})		
			});
			return App.getholders();
	},

	getholders: function() {
		App.contracts.Lottery.setProvider(App.web3Provider);
		App.contracts.Lottery.deployed().then(function(instance) {		
			return instance.getHolders().then((receipt) => {
				console.log(receipt);
			});
		})
		return App.getluckynumber();
	},


	getluckynumber: function() {
		App.contracts.Lottery.setProvider(App.web3Provider);
		App.contracts.Lottery.deployed().then(function(instance) {
			return instance.getLuckyNumber().then(function(receipt){
				$('#num').html(receipt.c[0]);  
			  	console.log(receipt.c[0]);
			});
		})
		return App.gettotal();
	},

	gettotal: function() {
		App.contracts.Lottery.setProvider(App.web3Provider);
		App.contracts.Lottery.deployed().then(function(instance) {		
			return instance.getTotalAmount().then(function(receipt){
				$('#total').html(receipt.c[0]);  
			});
		})
		return App.getparticipants();
	},

	getparticipants: function() {
		App.contracts.Lottery.setProvider(App.web3Provider);
		App.contracts.Lottery.deployed().then(function(instance) {
			LotteryInstance = instance;
			for(var i= 0 ;i < 5;i++) {
				return LotteryInstance.getHoldersAddress(i).then(function(receipt){
					$('#0').html(receipt);  
					console.log(receipt);
					LotteryInstance.getGuess(receipt).then(function(result){
						$('#a').html(result.c[0]);    
						console.log(result.c[0]);
					});
				});
			}
		})
	},

	getwinner: function() {
		App.contracts.Lottery.setProvider(App.web3Provider);
		App.contracts.Lottery.deployed().then(function(instance) {
			App.contracts.Lottery.setProvider(App.web3Provider);
			// LotteryInstance = instance;
			instance.drawWinner().then(function(receipt){
				$('#0').html(receipt);  
				console.log(receipt);
			});
		})
	},

	distribute: function() {
		App.contracts.Lottery.setProvider(App.web3Provider);
		App.contracts.Lottery.deployed().then(function(instance) {
			instance.distributeReward().then(function(receipt){  
				console.log(receipt);
			});
		})
	},
}

$(function() {
	$(window).load(function() {
		App.init();
		accounts = web3.eth.accounts;
		web3.eth.getBalance(accounts[0], function(error, result){
			var c = web3.fromWei(result, 'wei').toString();
			console.log(c);
			$('#bal').html(c);
		});
	});
	//wait for metamask access otherwise provider will not be set
	$(window).ready(function(){
		setTimeout(function(){
			App.gettotal();
			App.getluckynumber();
			App.getparticipants();
		},1000);
	})
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

