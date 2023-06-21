// #todo

'use strict';

let validInput = '';
let isNotValid = true;
while (isNotValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  /* -- BEGIN: validate input -- */
  if (userInput === null || userInput === '') {
    alert('that is nothing');
  } else if (userInput.length < 6) {
    alert('too short');
  } else if (userInput[5].toLowerCase() === 'e') {
    validInput = userInput;
    isNotValid = false
  } else {
    alert('input has no "e" or "E" as the 5th character');
  }
  
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
