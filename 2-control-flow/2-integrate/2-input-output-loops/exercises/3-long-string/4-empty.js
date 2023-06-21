// #todo

'use strict';
let userInput = '';
let isLongEnouth = false;

while(!isLongEnouth) {
  userInput = prompt('enter anything longer than 5 characters');
  if (userInput === null || userInput === '') {
    alert('that is nothing');
  } else if (userInput.length <= 5) {
    alert('too short');
  } else {
    isLongEnouth = true;
  }
}

alert('"' + userInput + '" is ' + userInput.length + ' characters long');