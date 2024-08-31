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

// function getHumanChoice() {
//     // Sanitises input
//     let response = prompt("Enter rock, paper or scissors").toLowerCase();
    
//     // Iterates until acceptable input is given
//     while (response != "rock" && response != "paper" && response != "scissors") {
//         response = prompt("Invalid input. Enter rock, paper or scissors");
//     }

//     return response;
// }

// function playGame() {
function playRound(human, computer) {
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
    console.log("Human " + humanScore + " - " + computerScore + " Computer");
}

let humanScore = 0;
let computerScore = 0;

    // Keeps playing the game in a best-of-5 format
    // while (humanScore + computerScore < 5) {
    //     const humanChoice = getHumanChoice();
    //     const computerChoice = getComputerChoice();

    //     playRound(humanChoice, computerChoice);
    // }

    // Declares a winner
    // if (humanScore > computerScore) {
    //     alert("You won!")
    // } else {
    //     alert("The computer won")
    // }
// }

// playGame();

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", function () {
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", function () {
    playRound("scissors", getComputerChoice());
});