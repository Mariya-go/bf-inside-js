// #todo

'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

let userInput = '';
while (true) {
  userInput = prompt('enter a word to filter:');

  /* -- BEGIN: validate input -- */
  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  const isSpaces = /\s/g;
  if (isSpaces.test(userInput)) {
    alert("words can't have white space");
  } else {
    break;
  }

  /* -- END: validate input -- */
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

let toRemove = '';
if (removeVowels) {
  toRemove = 'AEIOU';
} else {
  toRemove = 'BCDFGHJKLMNPQRSTVWXYZ';
}

let filteredInput = '';
/* -- BEGIN: filter input -- */
for (let char of userInput) {
  if (!toRemove.includes(char.toUpperCase())) {
    filteredInput += char;
  }
}
/* -- END: filter input -- */

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
