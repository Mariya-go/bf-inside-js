// #todo

'use strict';

let userInput;

while (true) {
  userInput = prompt('Tell me something about frogs');
  if (userInput !== null && userInput !== '') {
    if (userInput.toLowerCase().includes('frog')) {
      alert(
        'i just learned something cool about frogs!\n\n- "' + userInput + '"',
      );
      break;
    } else {
      alert("It's not about frogs :( Try again");
      continue;
    }
  } else {
    continue;
  }
}
