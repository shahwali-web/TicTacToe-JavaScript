let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true

const winPatterns = [
    [0 ,1 , 2],
    [0 , 3, 6],
    [0 , 4, 8],
    [1 , 4, 7],
    [2 , 5, 8],
    [2 , 4, 6],
    [3 , 4, 5],
    [6 , 7, 8],
    
];
let count = 0

boxes.forEach((box) =>{
    
    box.addEventListener("click", ()=>{
        if(turnO){
            turnO = false
            box.innerText = "O";
            count = count + 1;
            box.style.color = "black"
            
        }else{
            turnO = true
            count = count + 1;
            box.innerHTML = "X"
        }
        box.disabled = true;
        if(count >= 9 ){
            offBoxes();
            console.log("Game is Tie! ")

        }
        checkWinner();
    });
  
});

const offBoxes = () =>{
    for(let i of boxes){
        i.disabled = true;
    }
}
const onBoxes = () =>{
    for(let i of boxes){
        i.disabled = false;
        i.innerText = "";
        msgContainer.classList.add("hide-winner")
    }
}

const resetGame = () =>{
    turnO = true;
    onBoxes();
    
    count = 0;
}



const checkWinner = ()=>{
    for (pattern of winPatterns){
 
        let value1 = boxes[pattern[0]].innerText;
        let value2 = boxes[pattern[1]].innerText;
        let value3 = boxes[pattern[2]].innerText;

        if(value1 != "" && value2 != "" && value3 !=""){
            if(value1 === value2 && value1 ===value3){
                showWinner(value1);
            }else if(count == 9){
                matchTie();

            }
        }


        };
}

const matchTie = () =>{
    msg.innerText = `Match is Tie Try Again `;
    msgContainer.classList.remove("hide-winner");

}

const showWinner = (winner) =>{
    

    msg.innerText = `Congratulations, the winner is ${winner} `;
    msgContainer.classList.remove("hide-winner");
    offBoxes();
}

resetBtn.addEventListener("click", resetGame)