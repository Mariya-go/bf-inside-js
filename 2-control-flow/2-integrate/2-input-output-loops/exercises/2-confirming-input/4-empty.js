// #todo

'use strict';

let userInput = '';
let isValid = false;

while(!isValid) {
  userInput = prompt('enter your name');
  if (userInput === null || userInput === '') {
    alert('there is no escape');
    continue;
  } else {
    let isValidName = confirm('is this correct "' + userInput + '"?');
    (isValidName)
    ? isValid = true
    : isValid = false;
  }
}

alert('your name is ' + userInput);