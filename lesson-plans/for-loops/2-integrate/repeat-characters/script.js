import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  const text = readString('user-text');
  const repetitionNumber = readNumber('number-of-times');

  // repeat the characters in the text
  let newTest = '';
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < repetitionNumber; j++) {
      newTest += text[i];
    }
  }

  // display the text with repeated characters
  display('repeated-output', newTest);
});
