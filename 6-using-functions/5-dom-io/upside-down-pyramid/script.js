import { readString, display } from '../../../lib/dom-io.js';

import { pyramid } from './utils/pyramid.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;
  const toPyramid = readString('to-pyramid');

  const pyramided = pyramid(toPyramid);

  display('pyramided', pyramided);
});
