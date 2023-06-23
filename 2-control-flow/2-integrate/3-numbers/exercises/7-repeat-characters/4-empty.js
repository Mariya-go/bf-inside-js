// #todo

'use strict';

let userString = '';
let repetitions = NaN;

let didConfirm = false;
while (!didConfirm) {
  /* gather a string from the user and validate it*/
  userString = prompt('enter a phrase, each character will be repeated:');
  console.log('userString:', typeof userString, userString);

    if (userString === '' || userString === null) {
    alert('nope, enter something');
  } else {
   
    while (true) {
      const repetitionsInput = prompt(
        'how many times do you want to repeat each character?',
      );
      console.log(
        'repetitionsInput:',
        typeof repetitionsInput,
        repetitionsInput,
      );

      
      if (repetitionsInput === null || repetitionsInput === '') {
        alert('enter something');
        continue;
      }

    
      repetitions = Number(repetitionsInput);
      console.log('repetitions:', typeof repetitions, repetitions);

      
      if (Number.isNaN(repetitions)) {
        alert('"' + repetitionsInput + '" is not a number');
      } else {
        break;
      }
    }

    /* ask the user to confirm their input */
    const confirmMessage =
      'is this correct?\n\n' + '- "' + userString + '"\n' + '- ' + repetitions;
    didConfirm = confirm(confirmMessage);
  }
}

let withRepeatedCharacters = '';

/* iterate through each character in the user input and repeat it*/
for (const character of userString) {
  
  for (let i = 0; i < repetitions; i++) {
    withRepeatedCharacters += character;
  }
}

console.log(
  'withRepeatedCharacters:',
  typeof withRepeatedCharacters,
  withRepeatedCharacters,
);

const finalMessage = `"${userString}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);
