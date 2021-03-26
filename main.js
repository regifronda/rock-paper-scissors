let playerScore = 0;
let computerScore = 0;
let playerSelection;

function computerPlay(choices =["rock", "paper", "scissors"]) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomReturn = choices[randomIndex];
  return randomReturn;
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
      document.getElementById("results").textContent = resultText;
  } else if (computerSelection === "scissors") {
      let resultText = "You Win! " + playerSelection + " beats " + computerSelection;
      playerScore++;
      console.log(resultText);
      document.getElementById("results").textContent = resultText;
  } else if (computerSelection === "rock") {
      let resultText = "It's a draw! " + playerSelection + " and " + computerSelection;
      console.log(resultText);
      document.getElementById("results").textContent = resultText;
  }

  } else if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "scissors") {
      let resultText = "You Lose! " + computerSelection + " beats " + playerSelection;
      computerScore++;
      console.log(resultText);
      document.getElementById("results").textContent = resultText;
  } else if (computerSelection === "rock") {
      let resultText = "You Win! " + playerSelection + " beats " + computerSelection;
      playerScore++;
      console.log(resultText);
      document.getElementById("results").textContent = resultText;
  } else if (computerSelection === "paper") {
      let resultText = "It's a draw! " + playerSelection + " and " + computerSelection;
      console.log(resultText);
      document.getElementById("results").textContent = resultText;
    }

  } else if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "rock") {
      let resultText = "You Lose! " + computerSelection + " beats " + playerSelection;
      computerScore++;
      console.log(resultText);
      document.getElementById("results").innerHtml = resultText;
  } else if (computerSelection === "paper") {
      let resultText = "You Win! " + playerSelection + " beats " + computerSelection;
      playerScore++;
      console.log(resultText);
      document.getElementById("results").textContent = resultText;
  } else if (computerSelection === "scissors") {
      let resultText = "it's a draw! " + playerSelection + " and " + computerSelection;
      console.log(resultText);
      document.getElementById("results").textContent = resultText;
    }

  } else {
      let resultText = "Try again!";
      console.log(resultText);
      document.getElementById("results").textContent = resultText;
    }
}

function reportWinner() {
    if (playerScore > computerScore) {
      console.log("Player wins!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins!");
    } else {
      console.log("It's a tie!");
    }
  }

  function game() {
    playRound();
    reportWinner();
  }

document.getElementById("rockBtn").addEventListener("click", function(e){
  playRound("rock", computerSelection);
  e.preventDefault();
});
document.getElementById("paperBtn").addEventListener("click", function(e){
  playRound("paper", computerSelection);
  e.preventDefault();
});
document.getElementById("scissorsBtn").addEventListener("click", function(e){
  playRound("scissors", computerSelection);
  e.preventDefault();
});