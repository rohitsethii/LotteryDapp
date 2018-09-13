contract Rlottery
{
    address owner;
    address[] public allholders;
    address[] public winners;
    
    uint price=1000000 wei;
    uint[] public allguess;
    uint  count=0;
    uint public LuckyNumber;
    uint public Total;
    uint public playerID = 0;
 
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
    
    
//------------------------------------Public Functions----------------------------------------------------       

//    
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
       
       
        function drawwinner()
        public 
        onlyowner
        alreadyDrawn
        returns(address[]) {
            
            LuckyNumber=uint8(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)))%21);
            for(uint i=0;i<allholders.length;i++){
                if( LuckyNumber==allguess[i] ){
                    winners.push(allholders[i]);
                    count++;
                }
            }
            winnerDrawn=true;
            return winners;
        }
        
        
        
        function distributeReward()
        onlyowner
        LotteryActive
        internal
        {
            if(count == 0){
                //selfdestruct(owner);
                owner.transfer(address(this).balance);
                DeleteAll();
                return;
                
            }
            uint winnerreward= (address(this).balance/2)/count;
            for(uint j=0;j<winners.length;j++){ 
                winners[j].transfer(winnerreward);
                }
                
                owner.transfer(address(this).balance);
                DeleteAll();
                return;
        }
        
        
//-----------------------------------------Delete all variables to play next round-----------------------------


            function DeleteAll() 
            onlyowner
            internal
            {                    
                    winnerDrawn = false;
                    active = true;
                    delete LuckyNumber;
                    delete Total;
                    delete allholders;
                    delete count;
                    delete winners;
                    delete allguess;
                    delete Total;
                    delete playerID;
               }
            
        }
     
