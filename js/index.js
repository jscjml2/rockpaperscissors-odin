function getComputerChoice() {
    // initialize array of Rock, Paper, or Scissors...
    const choice = ["rock", "paper", "scissors"];

    // generate a random index, using Math.floor() combined with Math.random() and arr.length
    const randomIndex = Math.floor(Math.random() * choice.length)

    // and simply return the array with its random index.
    return choice[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // properly format the string... they need to match exactly, so we will use
    // toLowerCase() on the player's input to make sure that it matches.
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "rock") {
        return "You tied! You chose rock, and the computer chose rock.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! You chose rock, and the computer chose paper.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! You chose rock, and the computer chose scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! You chose paper, and the computer chose rock.";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "You tied! You chose paper, and the computer chose paper.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! You chose paper, and the computer chose scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! You chose scissors, and the computer chose rock.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! You chose scissors, and the computer chose paper.";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "You tied! You chose scissors, and the computer chose scissors.";
    }
}

function game() {
    for (let i = 0; i < 5; ++i){
        // prompt the user for their choice (rock, paper, or scissors) -- this uses the prompt() function...
        // it will show up as a window in the website. This will be stored into the playerSelection variable.
        const playerSelection = prompt();

        // use the getComputerChoice() function to grab the computerSelection variable.
        const computerSelection = getComputerChoice();

        // call the playRound function after grabbing its arguments, and console.log() it.
        console.log(playRound(playerSelection, computerSelection));
    }
}

// Call the game function. This starts 5 rounds of rock paper scissors as shown in the functions above.
game();