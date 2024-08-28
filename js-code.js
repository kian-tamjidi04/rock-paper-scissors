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

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;