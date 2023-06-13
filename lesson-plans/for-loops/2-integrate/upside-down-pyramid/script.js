import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  let userInput = readString('to-pyramid');

  // create the pyramid
  let output = '';
  let line = '';

  for (let i = 0; i < userInput.length; i++) {
    for (let j = i; j < userInput.length; j++) {
      line += userInput[j];
      
    }
    output += line + '\n';
    line = '';
  }

  // display the pyramid
  display('pyramided', output);
});
