/**
 * Returns a new string like the original one but without repeated characters.
 *
 * @param {string} [text=''] - A string to remove repeated characters.
 * @returns {string} The original text without characters repeated.
 */

const removeDublicates = (text = '') => {
  let noRepetitions = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== text[i + 1]) {
      noRepetitions += text[i];
    }
  }
  return noRepetitions;
};

/* ===== main program (use function) ===== */

// get user prompt
let userInput;
while (!userInput){
userInput = prompt('Enter something with repeated letters, they will be removed');
}

// delete all dublicates
const noDublicates = removeDublicates(userInput);

// display eresult
alert(`before: ${userInput}
after: ${noDublicates}`);