/**
 * Reverses some text
 * @param {string} [text = '']  - some string to reverse
 * @returns {string} - reversed string
 */
export const reverse = (text = '') => {
  const reversed = text.split('').reverse().join('');
  return reversed;
};
