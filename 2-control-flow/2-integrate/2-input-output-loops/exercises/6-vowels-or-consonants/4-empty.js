// #todo

'use strict';
// validate input
let userInput;
while (true) {
  userInput = prompt('enter a word to filter:');

  if (!userInput) {
    alert('nope, enter something');
    continue;
  }

  const isSpaces = /\s/g;
  if (isSpaces.test(userInput)) {
    alert("words can't have white space");
  } else {
    break;
  }
}

// filter valid input
const isItVowel = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

const toFilter = isItVowel ? 'aeiou' : 'bcdfghjklmnpqrstvwxyz';

let filtered = '';
for (let char of userInput) {
  if (!toFilter.includes(char.toLowerCase())) {
    filtered += char;
  }
}
// filtered output
alert(`"${userInput}" -> "${filtered}"`);
