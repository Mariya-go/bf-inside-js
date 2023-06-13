'use strict';

console.log('-- begin --');

/**
 * This estimate a string length and returns a two type of string: 'short' or 'long', depends on length of parameters.
 *
 * @param {string} text - string for estimate
 * @param {number} cutoff - criticsl point for estimation
 * @returns {string} - a string with 'short' or 'long'
 */

const longOrShort = (text, cutoff) => {
  if (text.length < cutoff) {
    return 'short';
  } else {
    return 'long';
  }
};

const _1_expect = 'long';
const _1_actual = longOrShort('qwerty', 5);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'long';
const _2_actual = longOrShort('qwerty', 6);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'short';
const _3_actual = longOrShort('qwerty', 7);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'long';
const _4_actual = longOrShort('', -1);
console.assert(_4_actual === _4_expect, 'Test 4');

console.log('-- end --');
