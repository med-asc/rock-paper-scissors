shape = ['Rock', 'Paper', 'Scissor']

let computerPlay = () => Math.floor(Math.random() * shape.length);

function getUserChoice() {
    player = prompt('Rock, Paper or Scissor?')
    // Fix player format by capitalizing first letter
    player = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase()
    return shape.indexOf(player)
}

function playRound(playerSelection, computerSelection) {
    playerShape = shape[playerSelection];
    computerShape = shape[computerSelection];

    if (playerSelection == 0 && computerSelection == 2) {
        output = `You Win! ${playerShape} beats ${computerShape}`;
    }
    else if ((playerSelection - computerSelection) == 1) {
        output = `You Win! ${playerShape} beats ${computerShape}`;
    } else if (playerSelection == computerSelection) {
        output = `Draw! ${playerShape} and ${computerShape}`;
    } else {
        output = `You Lose! ${computerShape} beats ${playerShape}`;
    }
    return output
}

function game() {
    // Set the scores to 0
    let player = 0
    let computer = 0

    for (let i = 0; i < 5; i++) {
        const playerSelection = getUserChoice();
        const computerSelection = computerPlay();

        let round = playRound(playerSelection, computerSelection)
        
        if (round.charAt(4) == 'W') {
            player++
        } else if (round.charAt(4) == 'L') {
            computer++
        }
        else {
            player++
            computer++
        }
        console.log(round)
    }
    console.log(`Player score: ${player}, Computer score: ${computer}`)
}