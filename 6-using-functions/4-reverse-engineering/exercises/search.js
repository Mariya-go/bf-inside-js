/**
 * search characters in a string
 * @param {string} [str = ''] - the string to find
 * @param {string} [toFind = ''] - characters to be found
 * @returns {boolean} - is it found or not
 */
const isFound = (str = '', toFind = '') => {
  return str.includes(toFind);
};

//* main code using function *//

// get user input
let userText = '';
let caseSensitive;

while (true) {
  userText = prompt('Enter your phrase');
  if (userText === null) {
    continue;
  } else {
    const userConfirm = confirm(`is this correct: "${userText}"?`);
    if (userConfirm) {
      caseSensitive = confirm('Do you want case sensitive search?');
      break;
    } else {
      continue;
    }
  }
}

let toFind;
while (true) {
  toFind = prompt(
    'Enter a search query, this program will check if it exists in your phrase',
  );
  if (toFind === null) {
    continue;
  } else {
    const userConfirm = confirm(`is this correct: "${toFind}"?`);
    if (userConfirm) {
      break;
    } else {
      continue;
    }
  }
}

// make search
let searchResult;
if (caseSensitive) {
  searchResult = isFound(userText, toFind);
} else {
  searchResult = isFound(userText.toLowerCase(), toFind);
}

searchResult
  ? alert(`"${toFind}" is exsist in "${userText}"

  case sensitive: ${caseSensitive}`)
  : alert(`"${toFind}" is not exsist in "${userText}"
  
  case sensitive: ${caseSensitive}`);
