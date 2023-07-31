function computerPlay(){
    const choices = ['rock','paper','scissors'];
    let randomChoice = Math.floor(Math.random()*3);
    let computerChoice = choices[randomChoice]
    return computerChoice;
}
console.log(computerPlay());