  let playerScore = 0;
  let computerScore = 0;
  function playRound(playerSelection, computerSelection) {
    function computerPlay(choices =["rock", "paper", "scissors"]) {
      const randomIndex = Math.floor(Math.random() * choices.length);
      const randomReturn = choices[randomIndex];
      return randomReturn;
    }
    computerPlay();
    computerSelection = computerPlay();

    playerSelection = prompt("do you choose rock, paper, or scissors?");
    if (playerSelection.toLowerCase() === "rock") {
      if (computerSelection === "paper") {
        let resultText = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerScore++;
        console.log(resultText);
       } else if (computerSelection === "scissors") {
         let resultText = "You Win! " + playerSelection + " beats " + computerSelection;
         playerScore++;
         console.log(resultText);
       } else if (computerSelection === "rock") {
          let resultText = "It's a draw! " + playerSelection + " and " + computerSelection;
          console.log(resultText);
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "scissors") {
          let resultText = "You Lose! " + computerSelection + " beats " + playerSelection;
          computerScore++;
          console.log(resultText);
      } else if (computerSelection === "rock") {
          let resultText = "You Win! " + playerSelection + " beats " + computerSelection;
          playerScore++;
          console.log(resultText);
      } else if (computerSelection === "paper") {
          let resultText = "It's a draw! " + playerSelection + " and " + computerSelection;
          return resultText;
      }
     } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
          let resultText = "You Lose! " + computerSelection + " beats " + playerSelection;
          computerScore++;
          console.log(resultText);
       } else if (computerSelection === "paper") {
          let resultText = "You Win! " + playerSelection + " beats " + computerSelection;
          playerScore++;
         console.log(resultText);
       } else if (computerSelection === "scissors") {
          let resultText = "it's a draw! " + playerSelection + " and " + computerSelection;
          console.log(resultText);
       }
      } else {
          let resultText = "Try again!";
          console.log(resultText);
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
  game();