import { readNumber, display } from '../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  const leftNumber = readNumber('left')
  const rightNumber = readNumber('right')

  const result = leftNumber * rightNumber



  // use a for loop to multiply the two numbers

  // display the product
  display('product', result);
});
