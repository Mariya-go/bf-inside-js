// #todo

'use strict';
const instructions =
  'calculate the average of many numbers:\n\n' +
  '- you must input something\n' +
  '- input a number and it will be added to the sum\n' +
  '- input "done" and the program will finish (case insensitive)\n' +
  '- input anything else and it will be ignored\n\n' +
  'when you have finished inputting numbers, the average will be displayed';
alert(instructions);

// get and validate user input

let userInput = '';
let count = 0;
let sum = 0;

while (true) {
  userInput = prompt(
    'enter a number to add and calculate the average, or "done" to finish',
  );

  if (!userInput) {
    alert('nothing is not allowed');
    continue;
  }

  // check if input is 'done'
  if (userInput.toLowerCase() === 'done') {
    break;
  } else {
    // check if input a number
    const inputNumber = Number(userInput);

    if (Number.isNaN(inputNumber)) {
      alert('"' + userInput + '" is not a number, it has been ignored');
      continue;
    }
    sum += inputNumber;

    count += 1;
  }
}

const average = sum / count;
alert('the average of your numbers is: ' + average);
