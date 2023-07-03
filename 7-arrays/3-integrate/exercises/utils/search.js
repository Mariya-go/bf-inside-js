/**
 * Creates a new array containing only strings includer search query.
 *
 * @param {string[]} [strings=[]] - An array of strings.
 * @param {string} [searchQuery = ''] - The search query.
 * @returns {string[]} A new array with only strings includes search query.
 */
export const search = (strings=[], searchQuery = '') => {
  const result = [];
  for (const string of strings) {
    if (string.includes(searchQuery)) {
      result.push(string);
    }
  }
  return result;
};
