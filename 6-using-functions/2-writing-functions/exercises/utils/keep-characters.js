/**
 * Returns a new string with only the given characters left in it.
 *
 * @param {string} [text=''] - Some text to remove characters from.
 * @param {string} [toKeep=''] - The characters to keep.
 * @returns {string} Text with only the given characters still in it.
 */

export const keepCharacters = (text='', toKeep='') => {
let removedText = "";
for (const char of text) {
  if(toKeep.includes(char)){
removedText += char;
  }
} return removedText;
};
 
