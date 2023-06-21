// #todo

'use strict';

let userInput = '';
while (userInput === '') {
  /* -- BEGIN: validate input -- */
  userInput = prompt('enter anything longer than 5 characters');
  if (userInput === null || userInput === '') {
    alert('that is nothing');
    userInput = '';
  } else if (userInput.length <= 5) {
    alert('too short');
    userInput = '';
  } else {
    userInput = userInput;
  }
  /* -- END: validate input -- */
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
