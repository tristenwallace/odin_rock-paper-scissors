//Global Variables
let playerScore = 0;
let computerScore = 0;
let computerSelection = "";
let playerSelection = "";

//DOM
const body = document.querySelector('body');

const playerOptions = document.querySelector('.player-options');
const optionsHeaderTag = document.querySelector('.options-header-tag');

const results = document.createElement('div');
results.classList.add('results');

const resultsPara = document.createElement('p');
resultsPara.classList.add('results-para');

const score = document.createElement('p');
score.classList.add('score');

results.appendChild(resultsPara);
results.appendChild(score);
body.appendChild(results);

const buttons = document.querySelectorAll('button');

const playAgainBtn = document.createElement('button');
playAgainBtn.classList.add('play-again');
playAgainBtn.textContent = "Play Again?";

//Game Code

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
            playerScore++;
            resultsPara.textContent = `You win! ${playerSelection} beats ${computerSelection}.`
            return;
        case playerSelection === "paper" && computerSelection === "rock":
            playerScore++;
            resultsPara.textContent = `You win! ${playerSelection} beats ${computerSelection}.`
            return;
        case playerSelection === "scissors" && computerSelection === "paper":
            playerScore++;
            resultsPara.textContent = `You win! ${playerSelection} beats ${computerSelection}.`
            return;
        //Losing scenarios
        case playerSelection === "rock" && computerSelection === "paper":
            computerScore++;
            resultsPara.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`
            return;
        case playerSelection === "paper" && computerSelection === "scissors":
            computerScore++;
            resultsPara.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`
            return;
        case playerSelection === "scissors" && computerSelection === "rock":
            computerScore++;
            resultsPara.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`
            return;
        //Tie scenario
        case playerSelection === computerSelection:
            resultsPara.textContent = `You tie! The computer also chose ${computerSelection}!`
            return;
        //Error
        default:
            resultsPara.textContent = "Please enter either rock, paper, or scissors."
            return;
    }
}

//Listens for player choice
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        playerSelection = button.value;
        game();
    })
})


function game() {
    computerSelection = computerMove();
    playRound(playerSelection, computerSelection);
    switch(true) {
        case playerScore == 5:
            optionsHeaderTag.textContent = 'You beat the computer!';
            playAgain();
        case computerScore == 5:
            optionsHeaderTag.textContent = 'You lost against the computer!';
            playAgain();
        case computerScore !== 5 && playerScore !== 5:
            score.textContent = `You: ${playerScore}   Computer: ${computerScore}`;
            return;
    }
}

//Adds play again button when someone wins
function playAgain() {
    results.appendChild(playAgainBtn);
    resultsPara.textContent = '';
    playAgainBtn.addEventListener('click', () => {
        resetGame();
        results.removeChild(playAgainBtn);
    })
}

//resets game when play again button is pressed
function resetGame() {
    score.textContent = '';
    playerScore = 0;
    computerScore = 0;
    optionsHeaderTag.textContent = "What's your move?";
}