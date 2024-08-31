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
    const txt = document.createElement("p");
    const results = document.querySelector(".results");
    const score = document.querySelector(".score");

    // Logic for the game
    if (human == computer) {
        txt.textContent = "You both picked " + human + ". It's a tie!";
    } else if ((human == "rock" && computer == "scissors") || (human == "scissors" && computer == "paper") || (human == "paper" && computer == "rock")) {
        txt.textContent = "You picked " + human + ", computer picked " + computer + ". You win!!";
        humanScore++;
    } else {
        txt.textContent = "You picked " + human + ", computer picked " + computer + ". You lose :(";
        computerScore++;
    }

    results.appendChild(txt);
    score.textContent = "Human " + humanScore + " - " + computerScore + " Computer";

    checkWinner(humanScore, computerScore);
}

let humanScore = 0;
let computerScore = 0;

function checkWinner(h, c) {
    // Declares a winner
    if (h == 5) {
        alert("You won! Press reset for a new game")
    } else if (c == 5) {
        alert("The computer won. Press reset for a new game")
    }
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resetBtn = document.querySelector(".reset");


rockBtn.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", function () {
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", function () {
    playRound("scissors", getComputerChoice());
});

resetBtn.addEventListener("click", function () {
    humanScore = 0;
    computerScore = 0;

    const score = document.querySelector(".score");
    score.textContent = "Human " + humanScore + " - " + computerScore + " Computer";
});