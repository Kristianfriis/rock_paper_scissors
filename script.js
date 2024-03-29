/*Computer play function. Will return rock, paper or scissors*/

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
/*function that counts scores and logs it to the webpage */
function points(playerSelection) {
    const container = document.querySelector('#container');
    playerScore += 1;
    const content = document.createElement('div');
    const points = document.createElement('div');
    points.textContent = "Playerscore = " + playerScore + " and Computerscore =" + computerScore;
    content.textContent = "You Win! " + playerSelection + " beats Scissors";
    container.appendChild(content);
    container.appendChild(points);
}
function pointsPc(computerSelection, playerSelection) {
    const container = document.querySelector('#container');
    computerScore += 1;
    const content = document.createElement('div');
    const points = document.createElement('div');
    points.textContent = "Playerscore = " + playerScore + " and Computerscore =" + computerScore;
    content.textContent = "You Lose! " + computerSelection + " beats " +playerSelection;
    container.appendChild(content);
    container.appendChild(points);
}

/*Function that checks whether the computer og player wins, and updates the score accordingly by 1 */
function playRound(playerSelection, computerSelection){
        if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors' ) {
           points(playerSelection);
        } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
            points(playerSelection);
        } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper') {
            points(playerSelection);
        } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
            const container = document.querySelector('#container');
            const content = document.createElement('div');
            content.textContent = "It's a tie! " + playerSelection.toLowerCase() + " do not beat " + computerSelection.toLowerCase();
            container.appendChild(content);
            
        } else {
            pointsPc(computerSelection, playerSelection);
        }

    
}
/*function that loops the game while either computer score and pc score is below 5, if it exceeds this value the game stops and returns who won. */
/*function game() {
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
}*/