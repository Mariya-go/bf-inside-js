import { readString, display } from '../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  //debugger;

  // read user text
  const userInput = readString('to-pyramid');

  // create the pyramid

  let pyramided = '';
  for (let i = 0; i < userInput.length; i++) {
    let row = userInput.slice(i) + '\n';
    pyramided += row;
  }
  // display the pyramid
  display('pyramided', pyramided);
});
