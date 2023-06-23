// #todo

'use strict';
const instructions =
  'calculate the sum of many numbers:\n\n' +
  '- you must input something\n' +
  '- input a number and it will be added to the sum\n' +
  '- input "done" and the program will finish (case insensitive)\n' +
  '- input anything else and it will be ignored';
alert(instructions);

let sum = 0;

let userInput = '';
while (true) {
  userInput = prompt('enter a number to add, or "done" to finish');

  //handle user input - nothing, done, a number or not a number
  if (!userInput) {
    alert('nothing is not allowed');
    continue;
  } else if (userInput.toLowerCase() === 'done') {
    break;
  } else {
    const nextNumber = Number(userInput);

    if (Number.isNaN(nextNumber)) {
      alert('"' + userInput + '" is not a number, it has been ignored');
      continue;
    } else {
      sum += nextNumber;
      continue;
    }
  }
  /* -- END -- */
}

const sumMessage = 'the sum of your numbers is: ' + sum;
alert(sumMessage);