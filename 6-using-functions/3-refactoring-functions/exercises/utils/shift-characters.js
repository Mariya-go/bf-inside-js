/**
 * Changes each character in a string by shifting the character code 
 * @param {any} [text] - string for shifting characters
 * @param {number} [shift] - number of shifting
 * @returns {string} - shifted text
 */
//debugger;
export const shiftCharacters = (text = '', shift = 0) => {
  let shiftedText = '';
  for (const char of text){
const unicodeChar = char.charCodeAt();
const shiftedCode = unicodeChar + shift;
const uncodedChar = String.fromCharCode(shiftedCode);
shiftedText += uncodedChar;
  }
return shiftedText;

};
//shiftCharacters('test', 5);