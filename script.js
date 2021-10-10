const options = ["rock", "paper", "scissors"];

function computerPlay() {
    return options[~~(Math.random() * options.length)];
} 

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beat paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beat paper.";             
    } else {
        return "Invalid input! You must choose rock, paper or scissors!";
    }

}

function game() {
    let i = 0;
    for (i = 0; i <5; i++) {
        let userChoice = window.prompt("Choose rock, paper or scissors");
        let computerChoice = computerPlay();
        console.log(playRound(userChoice, computerChoice));
    }
}