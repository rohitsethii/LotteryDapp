pragma solidity ^0.4.24;

import "./lib/Address.sol";
import "./lib/SafeMath.sol";

contract Lottery{
    
  
  address owner;
  address winner;
  address[] allHolders;
  address[] winners;
  using Address for address;
  
  uint price;
  uint[] allGuess;
  uint totalWinners;
  uint luckyNumber;
  uint totalAmount;
  uint playerID;
  using SafeMath for uint;
  
  bool winnerDrawn;
  bool active;
  
    
//-----------------------------------------Mappings----------------------------------------
    


  mapping (uint => address) holders;      // PlayerID => participant_address
  mapping (address => uint) Guesses;      //participant_address => guess
  
    

//-----------------------------------------Events----------------------------------------
    
    
  event Guess(
      address indexed from,
      uint indexed PlayerID,
      uint indexed _guess,
      uint value
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
    
    
    
  constructor() public{
    owner = msg.sender;
    price = 1000000 wei;
    active = true;
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
    playerID.add(1);
    allGuess.push(guess);
    Guesses[msg.sender] = guess;
    totalAmount = totalAmount.add(msg.value);
    emit Guess(msg.sender,playerID,guess,msg.value);
    return true;
  }       
       
    
  function drawWinner()
  public 
  onlyowner
  alreadyDrawn
  isHuman
  returns(address[]) {
      
    luckyNumber = uint8(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)))%21);
    for(uint i = 0; i < allHolders.length; i++){
      if( luckyNumber == allGuess[i] ){
        winners.push(allHolders[i]);
        totalWinners.add(1);
      }
    }
    winnerDrawn = true;
    return winners;
  }
  
      
  function distributeReward()
  public  
  onlyowner
  lotteryActive
  {
    if(totalWinners == 0){
      selfdestruct(owner);
    }
    uint winnerreward = (address(this).balance.div(2)).div(totalWinners);
    for(uint j = 0;j < winners.length;j++){ 
      winners[j].transfer(winnerreward);
        
    }
    selfdestruct(owner);
  }
  
  
//------------------------------------getters-----------------------------------------------



  function getHolders() public view returns(address[]) {
    return allHolders;
  }
  
  function getWinners() public view returns(address[]) {
    return winners;
  }
  
  function getTotalWinners() public view returns(uint) {
    return totalWinners;
  }
  
  function getLuckyNumber() public view returns(uint) {
    return luckyNumber;
  }
  
  function getTotalAmount() public view returns(uint) {
    return totalAmount;
  }
  
  function getHoldersAddress(uint playerId) public view returns(address) {
    return holders[playerId];
  }
  
  function getGuess(address player) public view returns(uint) {
    return Guesses[player];
  }  
}
