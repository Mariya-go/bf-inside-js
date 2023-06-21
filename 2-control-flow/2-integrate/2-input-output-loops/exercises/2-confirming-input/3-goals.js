// #todo

'use strict';

let userInput = '';
let isValidName = false;
while (!isValidName) {
  /* -- BEGIN: validate input -- */
  userInput = prompt('enter your name:');
  if (userInput === null || userInput === '') {
    userInput = prompt('nothin is not a nsme. enter your name');
    
  } else {
let isValid = confirm('is this correct?\n"' + userInput + '"');
(isValid)
? isValidName = true
: isValidName = false;

  }
  /* -- END: validate input -- */
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
