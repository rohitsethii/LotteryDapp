pragma solidity ^0.4.22;

contract Lottery{
    
    
    address owner;
    address winner;
    address[] public allholders;
    address[] public winners;
    
    uint price=1000000 wei;
    uint[] public allguess;
    uint count=0;
    uint public w;
    uint public Total;
    uint playerID = 0;
    //uint round = 3 minutes;
    //uint startround = now + round;
    
    bool winnerDrawn = false;
    bool active = true;
    
    
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
        require(msg.sender==owner);
        _;
    }
    modifier notowner(){
        require(msg.sender!=owner);
        _;
    }
    modifier alreadyDrawn(){
        require(!winnerDrawn);
        _;
    }
    modifier LotteryActive{
        require(active==true);
        _;
    }
    
    
    
//------------------------------------constructor----------------------------------------------------    
    
    
    
    constructor() public{
        owner=msg.sender;
    //bytes32  winninghash= keccak256(abi.encode(winninghash));
    }
    
    function makeGuess(uint guess) 
    notowner
    LotteryActive
    public 
    payable 
    returns(bool){
        require(guess != 0x20);
        require(guess<=20);
        require(msg.value == price);
        allholders.push(msg.sender);
        holders[playerID]= msg.sender;
        emit Guess(msg.sender,playerID,guess,msg.value);
        playerID++;
        allguess.push(guess);
        Guesses[msg.sender]= guess;
        Total=Total + msg.value;
        return true;
    }
       
       
//------------------------------------Public Functions----------------------------------------------------       
       
      
       
        function drawwinner()
        public 
        onlyowner
        alreadyDrawn
        returns(address[]) {
            
            w=uint8(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)))%21);
            for(uint i=0;i<allholders.length;i++){
                if( w==allguess[i] ){
                    winners.push(allholders[i]);
                    count++;
                }
            }
            winnerDrawn=true;
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
            uint winnerreward= (address(this).balance/2)/count;
            for(uint j=0;j<winners.length;j++){ 
                winners[j].transfer(winnerreward);
                
            }
            selfdestruct(owner);
            
            //    owner.transfer(address(this).balance);
            //    if (address(this).balance == 0){
            //        winnerDrawn = false;
            //        active = true;
            //        delete w;
            //        delete Total;
            //        delete allholders;
            //   }
            
        }
     }
