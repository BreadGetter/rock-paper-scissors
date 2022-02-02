





function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
};

function capitalize(word) {
    capWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capWord;
};

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
};


                                

const buttons = document.querySelectorAll("button");

const winOrLoss = document.querySelector("#winOrLoss");
const matchupResult = document.querySelector("#matchupResult");
const currentScore = document.querySelector("#currentScore")
const finalResult = document.querySelector("#finalResult");

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection) {
    let computerSelection = computerPlay();


    if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")) {

        winOrLoss.textContent = "You win!";
        matchupResult.textContent = capitalize(playerSelection) + ` beats ${computerSelection}!`;
        playerScore += 1;
        currentScore.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;
        
        if (playerScore === 5) {
            finalResult.textContent = "You win! Reload the page to play again."
            disableButtons();
        }

    }

    else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")) {
        
        winOrLoss.textContent = "You lose!";
        matchupResult.textContent = capitalize(computerSelection) + ` beats ${playerSelection}!`;
        computerScore += 1; 
        currentScore.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;
        
        if (computerScore === 5) {
            finalResult.textContent = "You lose! Reload the page to play again."
            disableButtons();
        }

    }
    else if ((playerSelection === computerSelection)) {
        winOrLoss.textContent = "It's a tie!";
        matchupResult.textContent = " ";
        currentScore.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;
    }



    
    
};


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});





