'use strict';
console.log('-- begin --');

// write the function to pass the assertions
// fill in the documentation to describe the function

/* this function scramble and concatinate or sum parameters
  it has three any parameters
  - param1, param2, param3 (a strings): strings you want to scramble and concatinate
  - param1, param2, param3 (a numbers): numbers you want to scramble and sum

  it returns a string or a number: the scrumbled and concatinated strings or scrambled and sumed numbers
*/

const scramble = (param1 = '', param2 = '', param3 = '') => {
  const result = param3 + param1 + param2;
  return result;
};

const _1_expect = 'yxz';
const _1_actual = scramble('x', 'z', 'y');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'zxy';
const _2_actual = scramble('x', 'y', 'z');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'yzx';
const _3_actual = scramble('z', 'x', 'y');
console.assert(_3_actual === _3_expect, 'Test 3');

console.log('-- end --');
