import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { repeated } from './utils/repeat-it.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;
  const userText = readString('user-text');
  const repetitions = readNumber('number-of-times');

  const repeatedText = repeated(userText, repetitions);

  display('repeated-output', repeatedText)
});
