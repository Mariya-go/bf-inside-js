/**
 * Returns reversed string
 * @param {any} [text] - some text to reverse
 * @returns {string} - reversed text
 */

export const reverse = (text) => {
  if (text === undefined){
    return '';
  }
  const reversed = text.split('').reverse().join('');
  return reversed;
};
