function getComputerChoice() {
    // Return a random choice of rock, paper or scissors
    let n = Math.floor(Math.random() * 3);
    switch(n) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function getHumanChoice() {
    let response = prompt("Enter rock, paper or scissors");
    
    // Iterates until acceptable input is given
    while (response != "rock" && response != "paper" && response != "scissors") {
        response = prompt("Invalid input. Enter rock, paper or scissors");
    }

    return response;
}

function playRound(human, computer) {
    // Ensures all variations of input are accepted
    human = human.toLowerCase();

    // Logic for the game
    if (human == computer) {
        console.log("You both picked " + human + ". It's a tie!");
    } else if ((human == "rock" && computer == "scissors") || (human == "scissors" && computer == "paper") || (human == "paper" && computer == "rock")) {
        console.log("You picked " + human + ", computer picked " + computer + ". You win!!");
        humanScore++;
    } else {
        console.log("You picked " + human + ", computer picked " + computer + ". You lose :(");
        computerScore++;
    }
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);