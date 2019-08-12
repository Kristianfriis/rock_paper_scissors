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

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors' ) {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
        return "You Win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper') {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "It's a tie! " + playerSelection.toLowerCase() + " do not beat " + computerSelection.toLowerCase();
    } else {
        return "You Lose! " + computerSelection.toLowerCase() + " beats " + playerSelection.toLowerCase();
    }
}
const playerSelection = 'Rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection));