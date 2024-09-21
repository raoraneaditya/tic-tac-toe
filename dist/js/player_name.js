let player1= document.getElementById("player1");
let player2= document.getElementById("player2");
let player1_name = document.getElementById("player1_name");
let player2_name = document.getElementById("player2_name");
let playerList = document.getElementById("playerList");
let actualGame = document.getElementById("actualGame");

function gameStart(){
    if((player1.value.length > 0 && player1.value.length < 7) && (player2.value.length > 0 && player2.value.length < 7)){
        if(player1.value !=player2.value){
            player1_name.textContent = player1.value;
            player2_name.textContent = player2.value;
            playerList.classList.add("hide");
            actualGame.classList.remove("hide");
            actualGame.classList.add("reveal");
        }
        else{
            alert("Both input should have unique names!")
        }
    }
    else{
        alert("both the name should have characters less than 7!")
    }
}

function back(){
    playerList.classList.remove("hide");
    playerList.classList.add("reveal");
    actualGame.classList.remove("reveal");
    actualGame.classList.add("hide");
    player1.value = "";
    player2.value = "";
}