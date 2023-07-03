/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {string} [text=''] - A string to repeat each character.
 * @param {number} [repetition=0] - How many times to repeat each character.
 * @returns {string} The original text with each character repeated.
 */

export const repeats = (text = '', repetition = 0) => {
  let repeated = '';
  for (const char of text) {
    repeated += char.repeat(repetition);
  }
  return repeated;
};

console.log(repeats('test', 2));
