import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { repeat } from './utils/repeat.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  const usertext = readString('user-text');
  const repetition = readNumber('number-of-times');

  const repeated = repeat(usertext, repetition);

  display('repeated-output', repeated);
});
