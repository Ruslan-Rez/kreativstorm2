let playerScore = 0;
let computerScore = 0;
let scoreDifference;
let input;
let round;
const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  let randomChoice = Math.floor(Math.random() * 3);
  let computerChoice = choices[randomChoice];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let message;
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "rock") {
        message = "Your Selection: Rock\nComputer Selection: Rock\n" +
          "Result:It's a tie! Both played Rock";
        return message;
      } else if (computerSelection == "paper") {
        message = "Your Selection: Rock\nComputer Selection: Paper\n" +
          "Result:You lose! Paper beats rock";
        computerScore += 1;
        return message;
      } else {
        message = "Your Selection: Rock\nComputer Selection: Scissors\n" +
          "Result:You win! Rock beats scissors";
        playerScore += 1;
        return message;
      }
    case "paper":
      if (computerSelection == "rock") {
        playerScore += 1;
        message = "Your Selection: Paper\nComputer Selection: Rock\n" +
          "Result:You won! Paper beats Rock";
        return message;
      } else if (computerSelection == "paper") {
        message = "Your Selection: Paper\nComputer Selection: Paper\n" +
          "Result:It's a tie! Both played paper";
        return message;
      } else {
        message = "Your Selection: Paper\nComputer Selection: Scissors\n" +
          "Result:You lose! Scissors beats paper";
        computerScore += 1;
        return message;
      }
    case "scissors":
      if (computerSelection == "rock") {
        computerScore += 1;
        message = "Your Selection: Scissors\nComputer Selection: Rock\n" +
          "Result:You lose! Rock beats scissors";
        return message;
      } else if (computerSelection == "paper") {
        playerScore += 1;
        message = "Your Selection: Scissors\nComputer Selection: Paper\n" +
          "Result:You Won! Scissors beats paper";
        return message;
      } else {
        message = "Your Selection: Scissors\nComputer Selection: Scissors\n" +
          "Result:It's a tie! Both played Scissors";
        return message;
      }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    round = i + 1;
    console.log("\nRound " + round);
    input = prompt("Your turn. Play either:  'ROCK', 'PAPER', or 'SCISSORS'");
    let playersChoice;
    if (input !== null) {
      playersChoice = input.trim().toLowerCase();
      if (choices.includes(playersChoice)) {
        // Checking whether the value entered is either 'rock/paper/scissors'
        console.log(playRound(playersChoice, computerPlay()));
        console.log("Your score:" + playerScore +
          "             |             " + "Computer score:" +
          computerScore);
      } else {
        alert(
          "Invalid Input!  You can only type 'ROCK',  'PAPER' or 'SCISSORS'");
        i = i - 1;
      }
    } else {
      i = 5;
    }
  }
  if (round > 1) {
    let finalScore = scoreCard();
    alert(`\nFINAL RESULTS!!!\n
      ${finalScore}\n
      YOUR TOTAL SCORE :${playerScore} POINTS
      COMPUTER'S TOTAL SCORE :${computerScore} POINTS`);
    scoreCard();
  }
  confirmAction();
}

function scoreCard() {
  if (playerScore > computerScore) {
    scoreDifference = playerScore - computerScore;
    return `YOU WON BY ${scoreDifference} POINTS!!`;
  } else if (computerScore > playerScore) {
    scoreDifference = computerScore - playerScore;
    return `YOU LOST BY ${scoreDifference} POINTS!!`;
  } else {
    return `It's a TIE!!`;
  }
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
    console.log("\n\nYou cancelled the game!");
  }
}

function start() {
  console.clear();
  alert(
    `\nWelcome to the game of Rock, Paper, Scissors! \nLet's see if you can defeat the computer!
  \n- Please open your console before you continue -\n\n
To defeat the computer you will need to throw either:\n  'ROCK',  'PAPER' or 'SCISSORS' `
    );
  alert(`Good Luck!`);
  game();
}
//Program starts from here//
start();
