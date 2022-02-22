//  klasse pc macht spielzug
// Rock = 0, Paper = 1, Scissors = 2
// erstelle eine zufallsgenerierte zahl zwischen 0-2 
//  

function computerPlay() {
    let computerPlay = Math.floor(Math.random()*3)
    switch (computerPlay) {
        case 0:
            console.log("Rock");
            break;
        case 1:
            console.log("Paper");
            break;
        case 2: 
            console.log("Scissors");
            break;
    }
    return computerPlay;
}

function playerSelection() {
    let playerInput = prompt("Rock, Paper or Scissors?");
    playerInput = playerInput.toLowerCase();
    console.log(playerInput);
    if (playerInput == "rock") {
        return 0;
    }else if (playerInput == "paper"){
        return 1;
    }else if (playerInput == "scissors"){
        return 2;
    }else{
        consloe.log("wrong answer!!")
    }

}

function controllTheWinner(playerInput, computerPlay) {
    if (playerInput == 0 && computerPlay == 1){
        console.log("You Lose! Paper beats Rock");
        return false;
    }else if(playerInput == 0 && computerPlay == 2){
        console.log("You Win! Rock beats Scissors");
        return true;
    }else if(playerInput == 1 && computerPlay == 0){
        console.log("You Win! Paper beats Rock");
        return true;
    }else if(playerInput == 1 && computerPlay == 2){
        console.log("You Lose! Scissors beats Paper");
        return false;
    }else if(playerInput == 2 && computerPlay == 0){
        console.log("You Lose! Rock beats Scissors");
        return false;
    }else if(playerInput == 2 && computerPlay == 1){
        console.log("You Win! Scissors beats Paper");
        return true;
    }else{
        console.log("Sorry it's Undecided");
    }
}


function playStart() {
    let winGame = null
    let playerInput1 = playerSelection()
    let computerPlay1 = computerPlay()
    winGame = controllTheWinner(playerInput1, computerPlay1)
    return winGame
}

function game() {
    let pointPlayer = 0
    let pointComputer = 0
    for (let i = 0; i < 5; i++) {
        let win = playStart()
        if (win == true) {
            pointPlayer = pointPlayer + 1
        }else{
            pointComputer = pointComputer + 1
        }
        console.log(`You have ${pointPlayer} and the Computer has ${pointComputer}`)
    }
    if (pointPlayer > pointComputer) {
        console.log("You Win !!!")
    }else{
        console.log("You Loose!!!")
    }

}