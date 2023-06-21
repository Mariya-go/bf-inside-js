// #todo

'use strict';

let validInput = '';
let isValid = false;

while(!isValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  if (!userInput) {
     alert('that is nothing');
  } else if (userInput.length < 6) {
    alert('too short');
  } else if (userInput[5].toLowerCase() === 'e') {
    validInput = userInput;
    isValid = true;
  } else {
    alert('input has no "e" or "E" as the 5th character');
  }
}

alert('done: "' + validInput + '"');