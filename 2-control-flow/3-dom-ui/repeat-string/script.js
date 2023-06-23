import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  const toRepeat = readString('user-text');
  const numberOfdRepetition = readNumber('number-of-times');

  // repeat the string
  let repeatedString = '';
  for (let i = 0; i < numberOfdRepetition; i++) {
    repeatedString += toRepeat;
  }

  // display the repeated string
  display('repeated-output', repeatedString);
});
