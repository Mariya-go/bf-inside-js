// #todo

'use strict';
const userString = prompt('enter a number:');

//check if input is a number
const userNumber = Number(userString);
const inputIsANumber = !Number.isNaN(userNumber);

// ask the user if they think their input is a number
const userThinksItsANumber = confirm(
  'did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"',
);

// validate user answer
const userIsCorrect = (userThinksItsANumber === inputIsANumber);

userIsCorrect ? alert('correct!') : alert('nope :(');
