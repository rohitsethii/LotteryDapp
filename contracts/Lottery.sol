pragma solidity ^0.4.25;

contract Lottery{
    
    
    address owner;
    address winner;
    address[] public allholders;
    address[] public winners;
    
    uint price;
    uint[] public allguess;
    uint count;
    uint public w;
    uint public Total;
    uint playerID;
    
    
    bool winnerDrawn;
    bool active;
    
    
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
    
    
    
//-----------------------------------------Modifiers------------------------------------    
    
    
    
    modifier onlyowner(){
        require(msg.sender==owner,"only owner can call");
        _;
    }
    modifier notowner(){
        require(msg.sender!=owner,"owner is not allowed");
        _;
    }
    modifier alreadyDrawn(){
        require(!winnerDrawn,"winner has already Drawn");
        _;
    }
    modifier LotteryActive{
        require(active==true,"lottery is not open");
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
    LotteryActive 
    payable 
    returns(bool){
        require(guess != 0x20,"cannot be empty");
        require(guess<=20,"number should be between 0 and 20");
        require(msg.value == price,"price should be 1000000");
        allholders.push(msg.sender);
        holders[playerID] = msg.sender;
        playerID++;
        allguess.push(guess);
        Guesses[msg.sender] = guess;
        Total += msg.value;
        emit Guess(msg.sender,playerID,guess,msg.value);
        return true;
    }       
      
    
    function drawwinner()
    public 
    onlyowner
    alreadyDrawn
    returns(address[]) {
        
        w = uint8(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)))%21);
        for(uint i = 0; i < allholders.length; i++){
            if( w == allguess[i] ){
                winners.push(allholders[i]);
                count++;
            }
        }
        winnerDrawn = true;
        return winners;
    }
    
    
        
    function distributeReward()
    public
    onlyowner
    LotteryActive
    {
        if(count == 0){
            selfdestruct(owner);
        }
        uint winnerreward = (address(this).balance/2)/count;
        for(uint j = 0;j < winners.length;j++){ 
            winners[j].transfer(winnerreward);
            
        }
        selfdestruct(owner);
    }
}
