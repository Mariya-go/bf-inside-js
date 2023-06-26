/**
 * Returns a new string without given characters
 * @param {string} [toFilter=''] - Some text to remove characters from.
 * @param {string} [removeThese=''] - The characters to remove.
 * @returns {string} - String without given characters
 */
debugger;
export const filter = (toFilter, removeThese) => {
let filteredText = '';
if(toFilter === '' || removeThese === undefined){
  return toFilter;
} else {
for (const char of toFilter.toLowerCase()){
  if(!removeThese.includes(char)){
    filteredText += char;
  }
}
}

return filteredText;
};
filter('test');