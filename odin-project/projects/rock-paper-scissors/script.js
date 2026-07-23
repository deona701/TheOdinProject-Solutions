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
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}.`);
        }
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") || 
            (humanChoice === "scissors" && computerChoice === "paper") ) {
                humanScore++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            }
        else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Scores --> Player: ${humanScore} - Computer: ${computerScore} `);
    }

    if (humanScore > computerScore) {
        console.log("Final Result: You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Final Result: Computer wins the game!");
    } else {
        console.log("Final Result: The overall game is a tie!");
    }
}

playGame();