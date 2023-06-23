// #todo

'use strict';

let userInput = '';
let unicodeShift = NaN;

let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt(
    'enter a phrase, each character will be shifted by character code:',
  );

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
  } else {
    while (true) {
      const unicodeShiftInput = prompt(
        'how many unicode numbers do you want the characters to shift?',
      );

      if (unicodeShiftInput === null || unicodeShiftInput === '') {
        alert('enter something');
      } else {
        unicodeShift = Number(unicodeShiftInput);

        if (Number.isNaN(unicodeShift)) {
          alert('"' + unicodeShiftInput + '" is not a number');
        } else {
          break;
        }
      }
    }
    /* -- BEGIN: ask the user to confirm their string and shift number -- */
     const confirmMessage = confirm('is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + unicodeShift);
      
    if (confirmMessage) {
      userConfirmed = true;
    }
    /* -- END -- */
  }
}

let encodedString = '';

/* -- BEGIN: create the encoded string -- */
  for (const character of userInput) {
  const characterCode = character.charCodeAt();
  const newCharCode = characterCode + unicodeShift;
  const encodedCharacter = String.fromCharCode(newCharCode);
  encodedString += encodedCharacter;
}

/* -- END -- */

const finalMessage = `"${userInput}" -> "${encodedString}"`;
alert(finalMessage);
