// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'w';
let c = 'z';
let d = 'x';
let temp;

// --- swap values ---
temp = a;
console.assert(temp === 'y', 'Step 1.1');
console.assert(a === 'y', 'Step 1.2');
a = b;
console.assert(a === 'w', 'Step 2.1');
console.assert(b === 'w', 'Step 2.2');
b = temp;
console.assert(b === 'y', 'Step 3.1');
console.assert(temp === 'y', 'Step 3.2');

temp = d;
console.assert(temp === 'x', 'Step 4.1');
console.assert(d === 'x', 'Step 4.2');
d = b;
console.assert(d === 'y', 'Step 5.1');
console.assert(b === 'y', 'Step 5.2');
b = temp;
console.assert(b === 'x', 'Step 6.1');
console.assert(temp === 'x', 'Step 6.2');
temp = d;
console.assert(temp === 'y', 'Step 7.1');
console.assert(d === 'y', 'Step 7.2');
d = c;
console.assert(d === 'z', 'Step 8.1');
console.assert(d === 'z', 'Step 8.2');
c = temp;
console.assert(c === 'y', 'Step 4.1');
console.assert(temp === 'y', 'Step 4.2');

// --- test final values ---

console.assert(a === 'w', 'Test 1');

console.assert(b === 'x', 'Test 2');

console.assert(c === 'y', 'Test 3');

console.assert(d === 'z', 'Test 4');

console.assert(temp === 'y', 'Test 5');

console.log('-- end --');
