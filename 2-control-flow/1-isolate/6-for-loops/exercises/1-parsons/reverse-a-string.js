let before = 'toadstools';
let after = '';
for (let i = before.length - 1; i >= 0; i--) {
let nextLetter = before[i];
after = after + nextLetter;
}
console.log(after);