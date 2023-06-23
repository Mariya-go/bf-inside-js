// #todo

'use strict';
let userNumber;
while (true) {
  const userInput = prompt('enter a number');

  //valid user input
  if (!userInput) {
    alert('enter something!');
    continue;
  }
  userNumber = Number(userInput);

  if (Number.isNaN(userNumber)) {
    alert('"' + userInput + '" is not a number');
  } else {
    break;
  }
}

// check number is it odd or even

const message = userNumber % 2 === 0 ? ' is even' : ' is odd';
alert(userNumber + message);