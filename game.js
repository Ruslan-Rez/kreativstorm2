function computerPlay(){
    const choices = ['rock','paper','scissors'];
    let randomChoice = Math.floor(Math.random()*3);
    let computerChoice = choices[randomChoice]
    return computerChoice;
}
function playRound(playerSelection, computerSelection){
    let winner;
    if (playerSelection.toLowerCase() == computerSelection){
        winner = "tie"
    } else {
        
    }
    return winner;

}
let playerScore = 0;
let computerScore = 0;
function game(){

}
function start(){
    console.log("Welcome to the game of Rock, Paper, Scissors! " +
        "Let's see if you can defeat the computer!")
    game();
}