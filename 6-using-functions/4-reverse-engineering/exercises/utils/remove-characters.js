/**
 * Returns a new string like the original one but with given characters removed.
 *
 * @param {string} [text=''] - A string to remove characters.
 * @param {string} [toRemove=''] - character to remove.
 * @returns {string} The original text without given characters.
 */

export const removed = (text = '', toRemove='') => {
  let removedChar = '';
  for (const char of text) {
    if (!toRemove.includes(char)) {
      removedChar += char;
    }
    
  }
  return removedChar;
};

console.log(removed('test', 'es'));
