/**
 * Sorts numbers from up to down and revers
 * @param {array of numbers} [numbers = []] - array of numbers to sort
 * @param {boolean} [up = true] - way of sorting: up or down
 * @returns {array of numbers} - array with sorted numbers
 */
export const sort = (numbers = [], up = true) => {
  // create a new array to avoid side-effects
  const numbersCopy = [];

  // copy items from the argument to the new array
  for (const num of numbers) {
    numbersCopy.push(num);
  }

  // sort the new array by side-effect
  numbersCopy.sort((a, b) => a - b);

  // reverse the new array if requested
  if (!up) {
    numbersCopy.reverse();
  }

  // return sorted numbers
  return numbersCopy;
};
