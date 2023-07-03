// #todo

/**
 * checks if all the strings in an array are long
 * @param {string[]} [strings = []] - array of strings to check
 * @param {number} [long = 0] - longiness of string for check
 * @returns {boolean} - true if all strings in array are long, false if not
 */
export const allLong = (strings = [], long = 0) => {
  const isLong = (string) => {
    return string.length >= long;
  }
  return strings.every(isLong);
};
