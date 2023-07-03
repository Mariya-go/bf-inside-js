/**
 *Return array with string length more than 5
 @param {string[]} [strings = []] - array with strings fo filtering
 @returns {string[]} - filtered array with long strings
 */
export const keepLongStrings = (strings = [], long = 5) => {
  const longStrings = [];
  for (const string of strings) {
    if (string.length > long) {
      longStrings.push(string);
    }
  }
  return longStrings;
};
