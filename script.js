shape = ["Rock", "Paper", "Scissor"];

// Set the scores to 0
let player = 0;
let computer = 0;

let computerPlay = () => Math.floor(Math.random() * shape.length);

function getUserChoice(choice) {
  // Fix player format by capitalizing first letter
  choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  return shape.indexOf(choice);
}

function playRound(playerSelection, computerSelection) {
  playerShape = shape[playerSelection];
  computerShape = shape[computerSelection];

  if (playerSelection == 0 && computerSelection == 2) {
    output = `You Win! ${playerShape} beats ${computerShape}`;
  } else if (playerSelection - computerSelection == 1) {
    output = `You Win! ${playerShape} beats ${computerShape}`;
  } else if (playerSelection == computerSelection) {
    output = `Draw! ${playerShape} and ${computerShape}`;
  } else {
    output = `You Lose! ${computerShape} beats ${playerShape}`;
  }
  return output;
}

function updateScore(str) {
  if (str.charAt(4) == "W") {
    player++;
  } else if (str.charAt(4) == "L") {
    computer++;
  } else {
    player++;
    computer++;
  }
  return [player, computer]
//   console.log(`Player score: ${player}, Computer score: ${computer}`);
}

const buttons = document.querySelectorAll(".btn");
const result = document.querySelector("#game-results");
const pScore = document.querySelector("#player-score");
const cScore = document.querySelector("#computer-score");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = getUserChoice(button.id);
    const game = playRound(playerChoice, computerPlay());
    let score = updateScore(game);
    pScore.textContent = score[0]
    cScore.textContent = score[1]

    if (score[0] === 5) {
        result.textContent = "Player wins!";
        buttons.forEach((button) => button.setAttribute("disabled", "disabled"));
    } else if (score[1] === 5) {
        result.textContent = "Computer wins!";
        buttons.forEach((button) => button.setAttribute("disabled", "disabled"));
    } else {
        result.textContent = game;
    }
  });
});
