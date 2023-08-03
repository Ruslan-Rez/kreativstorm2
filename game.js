let playerScore = 0;
let computerScore = 0;
let scoreDifference;
//let input;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  let computerChoice = choices[randomChoice];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let message;

  switch (playerSelection) {
    case "rock":
      if (computerSelection == "rock") {
        message = "Your Selection: Rock\nComputer Selection: Rock\n" + "Result:It's a tie! Both gave Rock";
        return message;
      } else if (computerSelection == "paper") {
        message = "Your Selection: Rock\nComputer Selection: Paper\n" + "Result:You lose! Paper beats rock";
        computerScore += 1;
        return message;
      } else {
        message = "Your Selection: Rock\nComputer Selection: Scissors\n" + "Result:You win! Rock beats scissors";
        playerScore += 1;
        return message;
      }
    case "paper":
      if (computerSelection == "rock") {
        playerScore += 1;
        message = "Your Selection: Paper\nComputer Selection: Rock\n" + "Result:You won! Paper beats Rock";
        return message;
      } else if (computerSelection == "paper") {
        message = "Your Selection: Paper\nComputer Selection: Paper\n" + "Result:It's a tie! Both gave paper";
        return message;
      } else {
        message = "Your Selection: Paper\nComputer Selection: Scissors\n" + "Result:You lose! Scissors beats paper";
        computerScore += 1;
        return message;
      }

    case "scissors":
      if (computerSelection == "rock") {
        computerScore += 1;
        message = "Your Selection: Scissors\nComputer Selection: Rock\n" + "Result:You lose! Rock beats scissors";
        return message;
      } else if (computerSelection == "paper") {
        playerScore += 1;
        message = "Your Selection: Scissors\nComputer Selection: Paper\n" + "Result:You Won! Scissors beats paper";
        return message;
      } else {
        message = "Your Selection: Scissors\nComputer Selection: Scissors\n" + "Result:It's a tie! Both gave Scissors";
        return message;
      }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let j = i + 1;
    console.log("\nRound " + j);
    let input = prompt("Type any of the inputs from ROCK / PAPER / SCISSORS");
    input = input.trim().toLowerCase();
    if (input == "rock" || input == "paper" || input == "scissors") {
      // Checking whether the value entered is either 'rock/paper/scissors'
      console.log(playRound(input, computerPlay()));
      console.log("Your score:" + playerScore + "               |               " + "Computer score:" + computerScore);
    } else {
      alert("Invalid Input!  You can type only ROCK / PAPER / SCISSORS");
      i = i-1;
    }

  }

  console.log("\n\n\nFINAL RESULTS!!!");
  console.log("YOUR TOTAL SCORE :   " + playerScore + " POINTS\nCOMPUTER'S TOTAL SCORE : " + computerScore + " POINTS");

  if (playerScore > computerScore) {
    scoreDifference = playerScore - computerScore;
    console.log("YOU WON BY " + scoreDifference + " POINTS!!");
  } else if (computerScore > playerScore) {
    scoreDifference = computerScore - playerScore;
    console.log("YOU LOST BY " + scoreDifference + " POINTS!!");
  } else {
    console.log("It's a TIE!!");
  }
  confirmAction();
}

function reset() {
  playerScore = 0;
  computerScore = 0;
}
function confirmAction() {
  let text = "Do you want to play again?";
  if (confirm(text) == true) {
    reset();
    start();

  } else {
    console.log("\n\nGame Cancelled!");
    alert("You cancelled the game!");
  }
}

function start() {
  console.clear();
  console.log("Welcome to the game of Rock, Paper, Scissors! \n" + "Let's see if you can defeat the computer!\n\n");
  game();
}

//Program starts from here//
start();