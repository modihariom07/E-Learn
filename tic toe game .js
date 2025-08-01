let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newgame");
let msgConatiner = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;
let count = 0;

const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

 boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
          count++;
        }
        else{
            box.innerText="X";
            turnO=true;
       count++;
        }
    box.disabled=true;
    checkWinner();
});
    });
    const stopBox =()=>{
        for( let box of boxes){
            box.disabled = true;
        }
    };
    const resetGame =()=>{
        turnO=true;
        enableBoxes();
        msgConatiner.classList.add("hide");
    };
    const enableBoxes=()=>{
        for( let box of boxes){
            box.disabled = false;
            box.innerText="";
        }

    };

const showWinner =(winner)=>{
    msg.innerText =`Congratulation winner is ${winner}`;
    msgConatiner.classList.remove("hide");
    stopBox();
};
 const checkWinner =()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != '' && pos2val != '' && pos3val != ''){
            if(pos1val=== pos2val && pos2val === pos3val){
               showWinner(pos1val);
            }
        else {
            if(count==9)
               { showTie();}
            }
       
    }
 };
};

reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);
const showTie=()=>{
    msg.innerText =`Opps its a tie`;
    msgConatiner.classList.remove("hide");
    stopBox();

}