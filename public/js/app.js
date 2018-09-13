App = {
	web3Provider: null,
	contracts: {},
	luckynumber:null,
  
	init: function() {
	  // Load pets.
	  $.getJSON('Lottery.json', function(data) {
      console.log(data);
	  });
  
	  return App.initWeb3();
	},
  
	initWeb3: function() {
		if (typeof web3 !== 'undefined') {
			App.web3Provider = web3.currentProvider;
			web3 = new Web3(web3.currentProvider);
			console.log(web3.currentProvider);
			console.log(web3.eth.accounts);
			console.log(web3);
		  } else {
			// If no injected web3 instance is detected, fall back to Ganache
			App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
			web3 = new Web3(App.web3Provider);
			 }
		 
  
	  return App.initContract();
	},
  
	initContract: function() {
		
		$.getJSON('Lottery.json', function(data) {
			// Get the necessary contract artifact file and instantiate it with truffle-contract
			var lotteryinstance = data;
			App.contracts.Lottery = TruffleContract(lotteryinstance);
		  
			// Set the provider for our contract
			App.contracts.Lottery.setProvider(App.web3Provider);
		  
			// Use our contract to retrieve and mark the adopted pets
			//return App.makeguess();
		  });
  
	//  return App.gettotal();
	},
  
//	bindEvents: function() {
//	  $(document).on('click', '.btn-adopt', App.handleAdopt);
//	},
  
	makeguess: function() {
		var _guess = $('#_guess').val();
		var Val =$("#val").val();
		console.log(Val);
		console.log(_guess);
		$.getJSON('Lottery.json', function(data) {
			console.log(web3);
			console.log(App.web3Provider);
		 
			console.log("makeguesscalled");
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
		//console.log(a);		
	});
	App.contracts.Lottery.deployed().then(function(lotteryinstance) {
	    lotteryinstance.makeGuess.call.estimateGas().then(function(receipt){
			console.log(receipt);
		})
		//console.log(a);		
	});
	return App.getbalance();
		});

	},
  
getbalance : function(){web3.eth.getBalance('0xd536bf8079d31228b464f02ef8b8382be66b6d27', function(error, result){
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
	
		  return LotteryInstance.allholders(0).then((receipt) =>{
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
	
		  return LotteryInstance.w().then(function(receipt){
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
	
		  return LotteryInstance.Total.call().then(function(receipt){
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
	for(var i= 0 ;i < 5;i++){
		  return LotteryInstance.allholders.call(i).then(function(receipt){
			$('#0').html(receipt);  
			  console.log(receipt);
			  LotteryInstance.Guesses(receipt).then(function(result){
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
		   LotteryInstance.drawwinner().then(function(receipt){
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

// getguess: function() {
// 	var LotteryInstance;

// 	App.contracts.Lottery.deployed().then(function(instance) {
// 		LotteryInstance = instance;
// 		var add =toString($("#0").val);
		
// 		console.log(add);
// 		   LotteryInstance.Guesses("0xd536bf8079d31228b464f02ef8b8382be66b6d27").then(function(receipt){
// 			$('#a').html(receipt.c[0]);    
// 			  console.log(receipt.c[0]);
// 		  });
// 	 })
// }

}


//gettotal: function() {
//	var LotteryInstance;
//
//	App.contracts.Lottery.deployed().then(function(instance) {
//		LotteryInstance = instance;
//	
//		  return LotteryInstance.Total.call().then(function(receipt){
//			$('#total').html(receipt.c[0]);  
//			  console.log(receipt.c[0]);
//		  });
//	 })
//}, 

// var LotteryInstance;

	// 	App.contracts.Lottery.deployed().then(function(instance) {
	// 	  LotteryInstance = instance;
    
  //    var a = LotteryInstance.currentProvider;
  //    console.log(a);
  //   },
  


  $(function() {
	$(window).load(function() {
	  App.init();
	  App.getluckynumber();
	  

var acc = web3.eth.accounts[0];
console.log(acc);
	  web3.eth.getBalance(acc, function(error, result){
		a = result;
	var b = web3.fromWei(a, 'wei');
	//console.log(b.c[0]);
	var c = b.toString();
	console.log(c);
	$('#bal').html(c);
	
	});
});

		$('#makeaguess').on('click',function(){
			App.makeguess();
		});

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

	