import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { skipIt } from './utils/skipify.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;
  const toSkip = readString('user-text');
  const skipNumber = readNumber('skip-size');

  const skipedText = skipIt(toSkip, skipNumber);

  display('skipped-output', skipedText);
});
