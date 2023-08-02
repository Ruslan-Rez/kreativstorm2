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

  switch (playerSelection) {
    case "rock":
      if (computerSelection == "rock") {
        message = "Your Selection: Rock\n" + "Computer Selection: Rock\n" + "Result:It's a tie! Both gave Rock";
        return message;
      } else if (computerSelection == "paper") {
        message = "Your Selection: Rock\n" + "Computer Selection: Paper\n" + "Result:You lose! Paper beats rock";
        computerScore += 1;
        return message;
      } else {
        message = "Your Selection: Rock\n" + "Computer Selection: Scissors\n" + "Result:You win! Rock beats scissors";
        playerScore += 1;
        return message;
      }
    case "paper":
      if (computerSelection == "rock") {
        playerScore += 1;
        message = "Your Selection: Paper\n" + "Computer Selection: Rock\n" + "Result:You won! Paper beats Rock";
        return message;
      } else if (computerSelection == "paper") {
        message = "Your Selection: Paper\n" + "Computer Selection: Paper\n" + "Result:It's a tie! Both gave paper";
        return message;
      } else {
        message = "Your Selection: Paper\n" + "Computer Selection: Scissors\n" + "Result:You lose! Scissors beats paper";
        computerScore += 1;
        return message;
      }

    case "scissors":
      if (computerSelection == "rock") {
        computerScore += 1;
        message = "Your Selection: Scissors\n" + "Computer Selection: Rock\n" + "Result:You lose! Rock beats scissors";
        return message;
      } else if (computerSelection == "paper") {
        playerScore += 1;
        message = "Your Selection: Scissors\n" + "Computer Selection: Paper\n" + "Result:You Won! Scissors beats paper";
        return message;
      } else {
        message = "Your Selection: Scissors\n" + "Computer Selection: Scissors\n" + "Result:It's a tie! Both gave Scissors";
        return message;
      }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let j = i + 1;
    console.log("\nRound " + j);
    console.log(playRound(input, computerPlay()));
    console.log("Your score:" + playerScore + "               |               " + "Computer score:" + computerScore);
  }
  console.log("\n\nYOUR TOTAL SCORE :   " + playerScore + " POINTS");
  console.log("COMPUTER'S TOTAL SCORE : " + computerScore + " POINTS");

  if (playerScore > computerScore) {
    let scoreDifference = playerScore - computerScore;
    console.log("FINAL RESULT :   YOU WON BY " + scoreDifference + " POINTS!!");
  } else if (computerScore > playerScore) {
    let scoreDifference = computerScore - playerScore;
    console.log("FINAL RESULT :   YOU LOST BY " + scoreDifference + " POINTS!!");
  } else {
    console.log("FINAL RESULT :   It's a TIE!!");
  }
  confirmAction();
}

function confirmAction() {
  let text = "Do you want to play another round?";
  if (confirm(text) == true) {
    start();
  } else {
    console.log("\n\nGame Cancelled!");
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
}
function start() {
  console.clear();
  console.log("Welcome to the game of Rock, Paper, Scissors! \n" + "Let's see if you can defeat the computer!\n\n");
  let gameInit = prompt("Type your input!");
  input = gameInit.toLowerCase();

  if (gameInit && (input == "rock" || input == "paper" || input == "scissors")) {
    // if (input == "rock" || input == "paper" || input == "scissors") {
    reset();
    game();
  } else {
    alert("Type any of the inputs from ROCK / PAPER / SCISSORS");
    start();
  }
}
//Program starts from here//
start();
