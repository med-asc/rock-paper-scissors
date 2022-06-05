function computerPlay(){
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