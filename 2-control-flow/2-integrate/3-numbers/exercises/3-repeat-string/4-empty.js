// #todo

'use strict';
let userInput = '';
let numberToRepeat;
// gather and validate user input
while (true) {
  userInput = prompt('enter a phrase to repeat:');

  if (!userInput) {
    alert('nope, enter something');
    continue;
  }

  const inputNumberToRepeat = prompt(
    'how many times do you want to repeat it?',
  );
  numberToRepeat = Number(inputNumberToRepeat);

  if (Number.isNaN(numberToRepeat)) {
    alert('"' + inputNumberToRepeat + '" is not a number');
    continue;
  } else {
    break;
  }
}

// repeat the input
let repeated = '';
for (let i = 0; i < numberToRepeat; i++) {
  repeated += userInput;
}
alert(`"${userInput}" -> "${repeated}"`);
