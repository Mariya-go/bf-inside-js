import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  const userInput = readString('user-text')
  const numberOfItem  = readNumber('number-of-times')


  // repeat the characters in the text
let repeatedString = '';
  for (let char of userInput) {
    for (let i = 0; i < numberOfItem; i++) {
      repeatedString += char;
    }
  }

  // display the text with repeated characters
  display('repeated-output', repeatedString)
});
