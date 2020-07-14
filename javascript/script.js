//Chooses random move for computer
function computerPlay () {
    choices = ["rock", "paper", "scissors"];
    return choices[getRndNum(3)];
}
//Randomly generates number for computerPlay()
function getRndNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        //winning scenarios
        case playerSelection === "rock" && computerSelection === "scissors":
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        case playerSelection === "paper" && computerSelection === "rock":
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        case playerSelection === "scissors" && computerSelection === "paper":
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        //Losing scenarios
        case playerSelection === "rock" && computerSelection === "paper":
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        case playerSelection === "paper" && computerSelection === "scissors":
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        case playerSelection === "scissors" && computerSelection === "rock":
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        //Tie scenario
        case playerSelection === computerSelection:
            return `You tie! The computer also chose ${computerSelection}!`;
        //Error
        default:
            return "Please enter either rock, paper, or scissors.";
    }
}

//TESTING
const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));