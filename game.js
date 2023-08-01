let playerScore = 0;
let computerScore = 0;
let input = null;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  let computerChoice = choices[randomChoice];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let message;
  //let playerSelectionLowerCase = playerSelection.toLowerCase();
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "rock") {
        message = "Your Input: Rock\n" + "Computer Selection: Rock\n" + "Result:It's a tie! Both gave Rock";
        return message;
      } else if (computerSelection == "paper") {
        message = "Your Input: Rock\n" + "Computer Selection: Paper\n" + "Result:You lose! Paper beats rock";
        computerScore += 1;
        return message;
      } else {
        message = "Your Input: Rock\n" + "Computer Selection: Scissors\n" + "Result:You win! Rock beats scissors";
        playerScore += 1;
        return message;
      }
    case "paper":
      if (computerSelection == "rock") {
        playerScore += 1;
        message = "Your Input: Paper\n" + "Computer Selection: Rock\n" + "Result:You won! Paper beats Rock";
        return message;
      } else if (computerSelection == "paper") {
        message = "Your Input: Paper\n" + "Computer Selection: Paper\n" + "Result:It's a tie! Both gave paper";
        return message;
      } else {
        message = "Your Input: Paper\n" + "Computer Selection: Scissors\n" + "Result:You lose! Scissors beats paper";
        computerScore += 1;
        return message;
      }

    case "scissors":
      if (computerSelection == "rock") {
        computerScore += 1;
        message = "Your Input: Scissors\n" + "Computer Selection: Rock\n" + "Result:You lose! Rock beats scissors";
        return message;
      } else if (computerSelection == "paper") {
        playerScore += 1;
        message = "Your Input: Scissors\n" + "Computer Selection: Paper\n" + "Result:You Won! Scissors beats paper";
        return message;
      } else {
        message = "Your Input: Scissors\n" + "Computer Selection: Scissors\n" + "Result:It's a tie! Both gave Scissors";
        return message;
      }
    default:
      return "Wrong INput!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(input, computerPlay()));
    console.log("Your score:" + playerScore);
    console.log("Computer score:" + computerScore);
  }
  console.log("YOUR FINAL SCORE:" + playerScore);
  console.log("COMPUTER'S FINAL SCORE:" + computerScore);

  if (playerScore > computerScore) {
    let scoredifference = playerScore - computerScore;
    console.log("YOU WON BY" + scoredifference + "POINTS!!");
  } else {
    let scoredifference = computerScore - playerScore;
    console.log("YOU LOST BY" + scoredifference + "POINTS!!");
  }
  confirmAction();
}

function confirmAction() {
  let text = "Do you want to play another round?";
  if (confirm(text) == true) {
    start();
  } else {
    alert("Cancelled!");
  }
}

function start() {
  let gameInit = prompt("Type your input!");
  input = gameInit.toLowerCase();
  if (input) {
    if (input == "rock" || input == "paper" || input == "scissors") {
      game();
    } else {
      alert("Type any of the inputs from ROCK / PAPER / SCISSORS");
    }
  }
}
//Program starts from here//
console.log("Welcome to the game of Rock, Paper, Scissors! " + "Let's see if you can defeat the computer!");
start();
confirmAction();
