/**
 * Find out, if some string in array more or equal than 5 characters
 * @param {string[]} [string = []] - array with strings
 * @returns {boolean} - true if some string in array >= 5, false if not
 */
export const someLong = (strings = [], long = 5) => {
  let someAreLong = false;
  for (const string of strings) {
    if (string.length >= long) {
      someAreLong = true;
      break;
    }
  }
  return someAreLong;
};
