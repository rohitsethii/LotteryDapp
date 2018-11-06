pragma solidity ^0.4.24;

import "./lib/Address.sol";

contract Rlottery
{
  address owner;
  address[] public allHolders;
  address[] public winners;
  
  uint price;
  uint[] public allGuess;
  uint count;
  uint public luckyNumber;
  uint public total;
  uint public playerID;

  using Address for address;
  bool public winnerDrawn = false;
  bool public active = true;
  
    
//-----------------------------------------Mappings----------------------------------------
    


  mapping (uint => address) public holders;      // PlayerID => participant_address
  mapping (address => uint) public Guesses;      //participant_address => guess
    
    
    

//-----------------------------------------Events----------------------------------------
    
    
  event Guess(
      address indexed from,
      uint indexed PlayerID,
      uint indexed _guess,
      uint value
  );
  event Distribution(
      address[] indexed winners,
      uint indexed winningAmount
  );
    
    
//-----------------------------------------Modifiers------------------------------------    
    
    
    
  modifier onlyowner(){
    require(msg.sender == owner,"only owner can call");
    _;
  }
  modifier notowner(){
    require(msg.sender != owner,"owner is not allowed");
    _;
  }
  modifier alreadyDrawn(){
    require(!winnerDrawn,"winner has already Drawn");
    _;
  }
  modifier lotteryActive{
    require(active == true,"lottery is not open");
    _;
  }
  modifier isHuman() {
    require(!msg.sender.isContract(),"only humans can play");
    _;
  }
    
    
    
//------------------------------------constructor----------------------------------------------------    
    
    
    
  constructor() public {
    owner = msg.sender;
    price = 1000000 wei;
  }
    
    
//------------------------------------Public Functions----------------------------------------------------       


  function makeGuess(uint guess) 
  public
  notowner
  lotteryActive
  isHuman
  payable 
  returns(bool){
    require(guess != 0x20,"cannot be empty");
    require(guess <= 20,"number should be between 0 and 20");
    require(msg.value == price,"price should be 1000000");
    allHolders.push(msg.sender);
    holders[playerID] = msg.sender;
    emit Guess(msg.sender,playerID,guess,msg.value);
    playerID++;
    allGuess.push(guess);
    Guesses[msg.sender] = guess;
    total = total + msg.value;
    return true;
  }
             
  function drawWinner()
  public 
  onlyowner
  alreadyDrawn
  isHuman
  returns(address[]) {
      
    luckyNumber = uint8(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)))%21);
    for(uint i = 0;i < allHolders.length;i++){
      if( luckyNumber == allGuess[i] ){
        winners.push(allHolders[i]);
        count++;
      }
    }
    winnerDrawn = true;
    return winners;
  }
            
  function distributeReward()
  internal
  onlyowner
  lotteryActive
  {
    if(count == 0){
      DeleteAll();
      owner.transfer(address(this).balance);
      return;    
    }
    uint winnerReward = (address(this).balance/2)/count;
    for(uint j = 0;j < winners.length; j++){ 
      winners[j].transfer(winnerReward);
    }
    DeleteAll();
    owner.transfer(address(this).balance);
    emit Distribution(winners,winnerReward);
    return;
  }
        
        
//-----------------------------------------Delete all variables to play next round-----------------------------


  function DeleteAll() 
  internal
  {                    
    winnerDrawn = false;
    active = true;
    delete luckyNumber;
    delete total;
    delete allHolders;
    delete count;
    delete winners;
    delete allGuess;
    delete total;
    delete playerID;
  }            
}
     
