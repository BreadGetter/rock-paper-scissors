

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}


let playerSelection;

function playRound(e) {
    let computerSelection = computerPlay();
    let totalRounds = 0;
    let playerScore = 0;
    let computerScore = 0; 
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
         console.log("You lose this round! Paper beats rock");
        
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++; 
         console.log("You lose this round! Scissors beats paper");
        
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
         console.log("You lose this round! Rock beats scissors");
            
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
         console.log("You win this round! Paper beats rock");
        
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
         console.log("You win this round! Scissors beats paper");
    
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
         console.log("You win this round! Rock beats scissors");

    } else if (playerSelection === computerSelection) {
        totalRounds--;
         console.log("It's a tie!");
    };

};






const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    playerSelection = button.id;
    playRound();
    });
});



