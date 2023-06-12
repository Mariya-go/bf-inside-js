import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  let inputString = readString('user-text');
  let inputNumber = readNumber('number-of-times');

  // repeat the string
  let output = '';
  for (let i = 0; i < inputNumber; i++) {
    output += inputString;
  }

  // display the repeated string
  display('repeated-output', output);
});
