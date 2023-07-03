// #todo

/**
 * makes all long strings in an array upper case
 * @param {string[]} [strings = []] - array with strings to modify
 * @param {number} [long = 0]
 * @returns {string} - upercased long strings
 */
export const longToUpper = (strings = [], long = 0) => {
  const newStrings = [];
  for (const item of strings) {
    newStrings.push(item.toUpperCase());
  }
  const longToUpper = []
  for(const string of newStrings){
    if(string.length < long){
      longToUpper.push(string.toLowerCase())
    } 
    else {
      longToUpper.push(string)
    }
  }
  return longToUpper;
};
