function computerPlay() {
    // Do a random roll from 0-2
    roll = Math.floor(Math.random() * 3);

    // Assign number to paper, rock or scissor
    if (roll == 0) {
        shape = 'Paper';
    } else if (roll == 1) {
        shape = 'Rock';
    } else {
        shape = 'Scissor';
    }
    return shape
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        output = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissor') {
        output = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == 'Scissor' && computerSelection == 'Paper') {
        output = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == computerSelection) {
        output = `Draw! ${playerSelection} and ${computerSelection}`;
    } else {
        output = `You Lose ${computerSelection} beats ${playerSelection}`;
    }
    return output
}


const playerSelection = 'Rock'
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));