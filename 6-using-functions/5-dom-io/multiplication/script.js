import { readNumber, display } from '../../../lib/dom-io.js';

import { multiply } from './utils/multiply.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;
  const num1 = readNumber('left');
  const num2 = readNumber('right');

  const multiplication = multiply(num1, num2);

  display('product', multiplication);
});
