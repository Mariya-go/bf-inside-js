// #todo

'use strict';

const instructions = `Two-Player Remembery

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    if you get one wrong - game over!
`;
alert(instructions);

alert('Player 2: go hide');

const phrase1 = prompt('Player 1, enter your first phrase:');
const phrase2 = prompt('Player 1, enter your second phrase:');
const phrase3 = prompt('Player 1, enter your third phrase:');

alert('Player 2, get back here');

// take user 2 answer and compare with user 1 input

let score = 0;

const guess1 = prompt('Player 1, enter your first guess:');
if (guess1 === phrase1) {
  score = score + 1;

  const guess2 = prompt('Player 1, enter your second guess:');
  if (guess2 === phrase2) {
    score = score + 1;

    const guess3 = prompt('Player 1, enter your third guess:');
    if (guess3 === phrase3) {
       score = score + 1;
    } else {
      score = score;
    }
  } else {
    score = score;
  }
} else {
  score = score;
}

alert(`your score: ${score}`);