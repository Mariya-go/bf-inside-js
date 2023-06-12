import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  let inputText = readString('user-text');
  let numberToSkip = readNumber('skip-size');

  // create a new string with skipped characters
  let output = '';

  for (let i = 0; i < inputText.length; i += numberToSkip) {
    output += inputText[i];
  }

  // display the skipped string
  display('skipped-output', output);
});
