import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  let left = readNumber('left');
  let right = readNumber('right');

  // calculate the result
  const result = left * right;

  // display the product
  display('product', result);
});
