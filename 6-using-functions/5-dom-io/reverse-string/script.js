import { readString, display } from '../../../lib/dom-io.js';

import { reversed } from './utils/reverse.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  const userText = readString('user-text');

  const reversedText = reversed(userText);

  display('reversed-output', reversedText);
});
