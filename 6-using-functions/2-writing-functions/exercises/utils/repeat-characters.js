/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {string} [text=''] - A string to repeat each character.
 * @param {number} [repetition=0] - How many times to repeat each character.
 * @returns {string} The original text with each character repeated.
 */
debugger;
export const repeatCharacters = (text = '', repetition = 1) => {
  let repeatedText = '';
  let repeatedChar = '';

  for (const char of text) {
    for (let i = repetition; i > 0; i--) {
      repeatedChar += char;
    }
    repeatedText += repeatedChar;
    repeatedChar = '';
  }

  return repeatedText;
};
console.log(repeatCharacters());
