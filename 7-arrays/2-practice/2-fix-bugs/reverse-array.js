// #todo

/**
 *
 */
export const reverseArray = (arr = []) => {
  const newArray = [];
  for (const item of arr) {
    newArray.push(item);
  }
  const backwards = newArray.reverse();
  return backwards;
};
