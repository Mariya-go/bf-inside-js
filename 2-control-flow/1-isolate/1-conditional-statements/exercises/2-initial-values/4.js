// #todo

'use strict';

console.log('-- begin --');

// can you find at least one solution to reach each path?
//  what do all solutions to the same path have in common?
// or maybe there are unreachable paths!

// const value1 = true; - path = if
// const value2 = true; - path = if

// const value1 = NaN; - path = 'else if 1'
// const value2 = false; - path = 'else if 1'

// const value1 = null; //- path = 'else if 2'
// const value2 = '0'; //- path = 'else if 2'

const value1 = undefined; //- unreachable path, first execute 'else if 1' 
const value2 = NaN; //- unreachable path


// const value1 = ''; //- path = 'else'
// const value2 = '123'; //- path = 'else'

let path = '';

if (value1 === value2) {
  path = 'if';
} else if (!value1 === !value2) {
  path = 'else if 1';
} else if (Number(value2) === Number(value1)) {
  path = 'else if 2';
} else if (!(value1 || value2)) {
  path = 'else if 3';
} else {
  path = 'else';
}

console.log(path);

console.log('-- end --');
