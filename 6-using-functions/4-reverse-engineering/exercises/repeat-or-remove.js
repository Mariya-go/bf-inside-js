import { repeats } from './utils/repeat.js';
import { removed } from './utils/remove-characters.js';

/* ===== main program (use functions) ===== */

alert(`enter some text, then decide if you want to either:

- repeat each character
- remove some chaeracters`);

// get user input

let userInput;
while(!userInput) {
  userInput = prompt('Enter some text');
}

// get user decision: repeat or remove

const userDecision = confirm(`would you like to:

- remove some things: "ok"
- repeat each character: "cancel"`);
let toRemove = '';
let numberRepetition = NaN;
if (userDecision) {
  toRemove = prompt('Enter character to remove: ')
} else {
  numberRepetition = Number(prompt('Enter number of repetition: '));
}

// create new text

const newText = (userDecision) ? removed(userInput, toRemove) : repeats(userInput, numberRepetition);

alert(`before: ${userInput}
after: ${newText}`);
