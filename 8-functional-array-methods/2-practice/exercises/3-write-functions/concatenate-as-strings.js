// #todo

/**
 * casts all values to a string and concatenates
 * returns a new array without modifying the original
 * @param {Array} arr - the array of values to filter
 * @returns {string} - a concatenated string
 */
//debugger;
export const concatenateAsStrings = (arr = []) => {
  const string = (item) => {
    return String(item);
  };

  return arr.map(string).reduce((acc, item) => acc + item, '');
  //return arr.reduce((world, item) => world + String(item), '');
};


