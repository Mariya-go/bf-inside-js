// #todo

'use strict';

let userInput = '';
while (true) {
  userInput = prompt('tell me something about frogs');

  /* -- BEGIN: validate input -- */
  if (userInput) {
    if (userInput.toLowerCase().includes('frog')) {
      break;
    } else userInput = prompt("It's not about frogs :(");
    continue;
  }

  /* -- END: validate input -- */
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
