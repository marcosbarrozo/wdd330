const btns = document.querySelectorAll(".btn");
const result = document.querySelector("#result");

let board = ["","","","","","","","",""];
let player = 1;

btns.forEach(function(btn){
  btn.addEventListener("click",function(){
    if(player == 1 && board[parseInt(btn.id)] ==""){
      board[parseInt(btn.id)] = "X";
      player = 2;
      printBoard();
      if(isDraw()){
        result.innerText = "Draw!";
    }
      if(isWinner("X")) {
        result.innerText = "X won!";
        disableButtons();
    }
      
    } else if( player == 2 && board[parseInt(btn.id)] ==""){
      board[parseInt(btn.id)] = "O";
      player = 1;
      printBoard();
      if(isDraw()){
        result.innerText = "Draw!";
    }
      if(isWinner("O")) {
        result.innerText = "O won!";
        disableButtons();
    }
      
    }
  })
})

function printBoard(){
  btns.forEach(function(btn){
  btn.innerText = board[parseInt(btn.id)];
 })
}

function disableButtons(){
    for(let i = 0; i < board.length; i++){
        if(board[i] == ""){
            board[i] = " ";
        }
    };
  }
  

document.querySelector("#reset").addEventListener("click",function(){
   btns.forEach(function(btn){
    btn.innerText = "";
    board = ["","","","","","","","",""];
    player = 1;
    result.innerText = "";

 })  
})

function isWinner(player){
  return board[0] == player && board[1] == player && board[2] == player ||
         board[3] == player && board[4] == player && board[5] == player ||
         board[6] == player && board[7] == player && board[8] == player ||
         board[0] == player && board[3] == player && board[6] == player ||
         board[1] == player && board[4] == player && board[7] == player ||
         board[2] == player && board[5] == player && board[8] == player ||
         board[0] == player && board[4] == player && board[8] == player ||
         board[2] == player && board[4] == player && board[6] == player
}

function isDraw(){
    let cont = 0;
    board.forEach(function(element){
        if(element != ""){
            cont++;
        }
    })
    if(cont == 9){
        return true;
    } else {
        return false;
    };
}


