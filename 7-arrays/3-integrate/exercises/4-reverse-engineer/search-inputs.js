/* ===== import functions ===== */

import { search } from '../utils/search.js';

/* ===== main program (use functions) ===== */

alert(
  `enter as many phrases as you want.

When you're done entering phrases press cancel

Than enter a search query (case sensitive)
-> only phrases includes search query will be kept`,
);

// -- gather user input --
let strings = [];
while (true) {
  const input  = prompt('Enter the next string or cancel to finish');
  if(input === null) {
    break;
  } else if (input === '') {
    alert('Nothing is not allowed');
    continue;
  } else {
    strings.push(input);
  }
};

console.log(strings);

// -- get a search query --
let query;
while (!query) {
  query = prompt('Enter a search query');
};
console.log(query);

// -- keep only strings that include the search query --
let filteredStrings = search(strings, query);
console.log(filteredStrings);

// -- generate a message for the user --
let message = `Query: ${query}

Matches:
- ${filteredStrings.join('\n- ')}`;

// -- alert the final message --
alert(message);

