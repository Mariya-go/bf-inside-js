// #todo

'use strict';

console.log('-- begin --');

// can you find at least one solution to reach each path?
//  what do all solutions to the same path have in common?
// or maybe there are unreachable paths!

// const value1 = true; // path = 'if';
// const value2 = false; // path = 'if';

// const value1 = false; // path = 'else if 1';
// const value2 = false; // path = 'else if 1';

// path = 'else if 2' is unreachable;

const value1 = 'null'; // path = 'else';
const value2 = "0"; // path = 'else';


let path = '';

if (value1 && !value2) {
  path = 'if';
} else if (!value1 || !value2) {
  path = 'else if 1';
} else if (value2 && !value1) {
  path = 'else if 2';
} else {
  path = 'else';
}

console.log(path);

console.log('-- end --');
