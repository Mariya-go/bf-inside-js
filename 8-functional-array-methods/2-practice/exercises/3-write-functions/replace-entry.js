/**
 * replaces a specific entry in an array
 * this function does not modify the original array
 *
 * @param {Array} [arr=[]] - an array of items, one will be changed
 * @param {number} [index=0] - the index to replace
 * @param {any} newEntry - the value to put at that index
 *
 * @returns {Array} a copy of the array with one entry modified
 */
export const replaceEntry = (arr = [], index = 0, newEntry) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
     newArr.push(arr[i]);
    if (i === index) {
      newArr[i] = newEntry;
    }
   
  }

  return newArr;
};
