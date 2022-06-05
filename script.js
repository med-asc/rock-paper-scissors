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
    // Fix player format with capitalizing first letter
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()

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
        output = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    return output
}

function game() {
    // Set the scores to 0
    let player = 0
    let computer = 0

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper or Scissor?')
        const computerSelection = computerPlay();

        let round = playRound(playerSelection, computerSelection)
        round = round.split(' ')
        if (round[1] == 'Win!') {
            player++
        } else if (round[1] == 'Lose!') {
            computer++
        }
        else {
            player++
            computer++
        }
        console.log(round)
    }
    console.log(`Player: ${player}, Computer: ${computer}`)
}