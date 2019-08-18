/*Computer play function. Will return rock, paper or scissors*/
var computerChoice;
function computerPlay() {
    let rand = Math.floor(Math.random()*3);
    switch(rand) {
        case 0:
            computerChoice = "Rock"
            break;
        case 1:
            computerChoice = "Paper"
            break;
        case 2:
            computerChoice = "Scissors"
            break;
    }
    return computerChoice;
};
/*Global variables to hold scores*/
var playerScore = 0;
var computerScore = 0;

/*Function that checks whether the computer og player wins, and updates the score accordingly by 1 */
function playRound(playerSelection, computerSelection){
        if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors' ) {
            playerScore += 1;
            console.log("Playerscore = " + playerScore + " and Computerscore " + computerScore)
            return "You Win! Rock beats Scissors";
        } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
            playerScore += 1;
            console.log("Playerscore = " + playerScore + " and Computerscore " + computerScore)
            return "You Win! Paper beats Rock";
        } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper') {
            playerScore += 1;
            console.log("Playerscore = " + playerScore + " and Computerscore " + computerScore)
            return "You Win! Scissors beats Paper";
        } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
            return "It's a tie! " + playerSelection.toLowerCase() + " do not beat " + computerSelection.toLowerCase();
        } else {
            computerScore += 1;
            console.log("Playerscore = " + playerScore + " and Computerscore " + computerScore)
            return "You Lose! " + computerSelection.toLowerCase() + " beats " + playerSelection.toLowerCase();
        }

    
}
/*function that loops the game while either computer score and pc score is below 5, if it exceeds this value the game stops and returns who won. */
function game() {
    while (playerScore < 5 || computerScore < 5) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if (playerScore == 5 || computerScore == 5) {
            if (playerScore == 5) {
                console.log("Player wins!")
            } else {
                console.log("Computer wins!")
            }
            break;
        } 
    }   
}