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

const phrasesToRemember = `Player 2, remember these:
  1. "${phrase1}"
  2. "${phrase2}"
  3. "${phrase3}"
`;
alert(phrasesToRemember);

/* -- BEGIN: gather player 2's guesses) -- */
let points = 0;

const gess1 = prompt('Player 1, enter your first guess:')
if (gess1 === phrase1) {
  points = points + 1;
  const gess2 = prompt('Player 1, enter your second guess:');
  if (gess2 === phrase2) {
    points = points + 1;
    const gess3 = prompt('Player 1, enter your third guess:');
    if (gess3 === phrase3) {
      points = points + 1;
    } else {
      points = points;
    }
  } else {
    points = points;
  }
} else {
  points = points;
}

/* -- END: gather player 2's guesses -- */

alert(`your score: ${points}`);
