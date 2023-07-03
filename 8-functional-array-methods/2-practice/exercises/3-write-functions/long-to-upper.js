// #todo

/**
 * makes all long strings in an array upper case
 * @param {string[]} [strings = []] - array with strings for filter
 * @param {number} [long = 0] - longiness to estimate strings
 * @returns {string[]} - the same array with long strings uppercased
 */
export const longToUpper = (strings = [], long = 0) => {
  const isLongEnough = (item) => (item.length >= long) ? item = item.toUpperCase() : item = item;
  return strings.map(isLongEnough);
};
