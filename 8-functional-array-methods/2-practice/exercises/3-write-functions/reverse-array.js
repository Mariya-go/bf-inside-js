// #todo

/**
 * reverses an array of anything
 * @param {any[]} [arr = []] - an array of anything
 * @returns {any[]} - reversed array
 */
export const reverseArray = (arr = []) => {
  const newArr = [];
  for (let item of arr){
    newArr.push(item);
  }
  return newArr.reverse();
};
