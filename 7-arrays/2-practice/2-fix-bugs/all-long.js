// #todo

/**
 * Check, if all strings in array are long enauth
 * @param {string[]} [strings = []] - array of strings
 * @param {number} [long = 0] - length to check
 * @returns {boolean} - true if all strings are long enouth, false if not
 */

export const allLong = (strings = [], long = 0) => {
  let allAre = false;
  for (let i = 0; i < strings.length; i++) {
    const next = strings[i];
    if (next.length < long) {
      allAre = false;
      break;
    } else {
      allAre = true;
    }
  }
  return allAre;
};


