let playerScore = 0;
let computerScore = 0;
let playerSelection;

function computerPlay(choices =["rock", "paper", "scissors"]) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomReturn = choices[randomIndex];
  return randomReturn;
}

function checkWinner() {
  if (playerScore === 5) {
    let resultText = "You win! First to 5 points!";
    document.getElementById("results").textContent = resultText;
} else if (computerScore === 5) {
    let resultText = "Computer wins! First to 5 points!";
    document.getElementById("results").textContent = resultText;
  } 
}

let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  console.log(computerSelection);
  console.log(playerScore);
  console.log(computerScore);

  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "paper") {
      let resultText = "You Lose! " + computerSelection + " beats " + playerSelection;
      computerScore++;
      let scoreText = " Player Score: " + playerScore + " Computer Score: " + computerScore;
      document.getElementById("results").textContent = resultText + scoreText;
  } else if (computerSelection === "scissors") {
      let resultText = "You Win! " + playerSelection + " beats " + computerSelection;
      playerScore++;
      let scoreText = " Player Score: " + playerScore + " Computer Score: " + computerScore;
      document.getElementById("results").textContent = resultText + scoreText;
  } else if (computerSelection === "rock") {
      let resultText = "It's a draw! " + playerSelection + " and " + computerSelection;
      let scoreText = " Player Score: " + playerScore + " Computer Score: " + computerScore;
      document.getElementById("results").textContent = resultText + scoreText;
  }
    checkWinner();
  } else if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "scissors") {
      let resultText = "You Lose! " + computerSelection + " beats " + playerSelection;
      computerScore++;
      let scoreText = " Player Score: " + playerScore + " Computer Score: " + computerScore;
      document.getElementById("results").textContent = resultText + scoreText;
  } else if (computerSelection === "rock") {
      let resultText = "You Win! " + playerSelection + " beats " + computerSelection;
      playerScore++;
      let scoreText = " Player Score: " + playerScore + " Computer Score: " + computerScore;
      document.getElementById("results").textContent = resultText + scoreText;
  } else if (computerSelection === "paper") {
      let resultText = "It's a draw! " + playerSelection + " and " + computerSelection;
      let scoreText = " Player Score: " + playerScore + " Computer Score: " + computerScore;
      document.getElementById("results").textContent = resultText + scoreText;
    }
    checkWinner();
  } else if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "rock") {
      let resultText = "You Lose! " + computerSelection + " beats " + playerSelection;
      computerScore++;
      let scoreText = " Player Score: " + playerScore + " Computer Score: " + computerScore;
      document.getElementById("results").textContent = resultText + scoreText;
  } else if (computerSelection === "paper") {
      let resultText = "You Win! " + playerSelection + " beats " + computerSelection;
      playerScore++;
      let scoreText = " Player Score: " + playerScore + " Computer Score: " + computerScore;
      document.getElementById("results").textContent = resultText + scoreText;
  } else if (computerSelection === "scissors") {
      let resultText = "It's a draw! " + playerSelection + " and " + computerSelection;
      let scoreText = " Player Score: " + playerScore + " Computer Score: " + computerScore;
      document.getElementById("results").textContent = resultText + scoreText;
    }
    checkWinner();
  } else {
      let resultText = "Try again!";
      console.log(resultText);
      let scoreText = " Player Score: " + playerScore + " Computer Score: " + computerScore;
      document.getElementById("results").textContent = resultText + scoreText;
    }
}

function showScore() {
  let playerRunningScore = document.querySelector("#playerScore");
  playerRunningScore.textContent = "Player Score: " + playerScore;
  document.getElementById("computerScore").textContent = "Computer's Score: " + computerScore;
}

document.getElementById("rockBtn").addEventListener("click", function(e){
  playRound("rock", computerSelection);
});
document.getElementById("paperBtn").addEventListener("click", function(e){
  playRound("paper", computerSelection);
});
document.getElementById("scissorsBtn").addEventListener("click", function(e){
  playRound("scissors", computerSelection);
});