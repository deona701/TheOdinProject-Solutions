function getComputerChoice() {
    let randomNum = Math.random();

    if (randomNum < 0.33) {
        return "rock";
    }
    else if (randomNum < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter rock, paper or scissors: ");
    return choice.toLowerCase;
}

console.log(getHumanChoice());