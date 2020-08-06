var playerCounter = 0;
var computerCounter = 0;
var computerSelection = "";
var playerSelection = "";

function computerMove () {
    choices = ["rock", "paper", "scissors"];
    return choices[getRndInt(3)];
}

function getRndInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        //winning scenarios
        case playerSelection === "rock" && computerSelection === "scissors":
            playerCounter++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
            return;
        case playerSelection === "paper" && computerSelection === "rock":
            playerCounter++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
            return;
        case playerSelection === "scissors" && computerSelection === "paper":
            playerCounter++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
            return;
        //Losing scenarios
        case playerSelection === "rock" && computerSelection === "paper":
            computerCounter++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
            return;
        case playerSelection === "paper" && computerSelection === "scissors":
            computerCounter++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
            return;
        case playerSelection === "scissors" && computerSelection === "rock":
            computerCounter++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
            return;
        //Tie scenario
        case playerSelection === computerSelection:
            console.log(`You tie! The computer also chose ${computerSelection}!`)
            return;
        //Error
        default:
            console.log("Please enter either rock, paper, or scissors.")
            return;
    }
}

function game() {
    for (;;) {
        if (playerCounter == 3) {
            return 'You Won!'
        } else if (computerCounter == 3) { 
            return 'You Lost :('
        } else {
            computerSelection = computerMove();
            playerSelection = prompt("What is your move?", "rock, paper, scissors");
            playRound(playerSelection, computerSelection);
        }
    }
}