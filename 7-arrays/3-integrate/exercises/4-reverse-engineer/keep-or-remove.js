
alert(
  `enter as many strings as you want.

When you're done entering strings press cancel`,
);

// -- gather user input --
const strings = [];
while (true) {
  const input = prompt('enter the next string or cancel to finish');

  if (input === null) {
    break;
  }

  if (input === '') {
    alert('nothing is not allowed');
    continue;
  }

  strings.push(input);

  
}
console.log(strings);

// -- keep or remove --
let keepedStrings = [];
for (const string of strings){
  const toKeep = confirm(`do you want to keep "${string}"?`)
  if (toKeep) {
    keepedStrings.push(string);
  } 
}
console.log(keepedStrings);

// -- build the final message --
const message = `keeped strings:
- ${keepedStrings.join('\n- ')}`;

// -- alert the final message --
alert(message);