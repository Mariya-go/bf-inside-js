// #todo

'use strict';

let userInput = '';
let codeShift = NaN;
// get and validate user input
while (true) {
  userInput = prompt(
    'enter a phrase, each character will be shifted by character code:',
  );

  if (!userInput) {
    alert('nope, enter something');
    continue;
  } else {
    const codeShiftInput = prompt(
      'how many unicode numbers do you want the characters to shift?',
    );
    if (!codeShiftInput) {
      alert('enter something');
    } else {
      codeShift = Number(codeShiftInput);

      if (Number.isNaN(codeShift)) {
        alert('"' + codeShiftInput + '" is not a number');
        continue;
      } else {
        break;
      }
    }
  }
}

// proceed valid input
let shiftedInput = '';
for (const char of userInput) {
  const unicodeChar = char.charCodeAt();
  const unicodeCharShifted = unicodeChar + codeShift;
  const uncodingNewChar = String.fromCharCode(unicodeCharShifted);
  shiftedInput += uncodingNewChar;
}

alert(`"${userInput}" -> "${shiftedInput}"`);
