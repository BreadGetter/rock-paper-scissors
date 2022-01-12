
function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}


function game() {
    let computerScore = 0;
    let playerScore = 0;
    totalRounds = 0;

    function playRound() {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Pick an option. Rock, paper or scissors: ");

        if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
            computerScore++;
            return("You lose this round! Paper beats rock");
            
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
            computerScore++; 
            return("You lose this round! Scissors beats paper");
            
        } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
            computerScore++;
            return("You lose this round! Rock beats scissors");
                
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            playerScore++;
            return("You win this round! Paper beats rock");
            
        } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
            playerScore++;
            return("You win this round! Scissors beats paper");
        
        } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
            playerScore++;
            return("You win this round! Rock beats scissors");

        } else if (playerSelection.toLowerCase() === computerSelection) {
            totalRounds--;
            return("It's a tie!");
        } 

    }

    while (totalRounds < 5) {
        playRound();
        totalRounds++;
    }


    if (totalRounds = 5) {
        if (playerScore > computerScore) {
            return("The game is over. You have won. Final score: " + playerScore + " to " + computerScore);
        } else if (computerScore > playerScore) {
            return("The game is over. You have lost. Final score: " + playerScore + " to " + computerScore);
        }
    } 

}

game();