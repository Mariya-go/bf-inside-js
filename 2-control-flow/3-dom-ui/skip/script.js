import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  const userText = readString('user-text');
  const userNumber = readNumber('skip-size');

  // create a new string with skipped characters
  let skiped = '';
  for (let i = 0; i < userText.length; i++) {
    if ((i + 1) % userNumber !== 0) {
      skiped += userText[i];
    }
  }

  // display the skipped string
  display('skipped-output', skiped);
});
