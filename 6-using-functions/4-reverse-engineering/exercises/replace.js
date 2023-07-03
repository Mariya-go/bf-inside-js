/**
 * This util function replace some characters in user text to getting characters
 * @param {string} [text=''] - some user string
 * @param {string} [forReplace=''] - characters for replace
 * @param {string} [replaseTo=''] - characters to replace
 * @returns {string} - new string with replaced characters
 */

const replace = (text = '', forReplace = '', replaseTo = '') => {
  let replacedText = text;
  for (const char of forReplace) {
    replacedText = replacedText.replaceAll(char, replaseTo);
  }

  return replacedText;
};

//* the main program using function *//
alert(`Enter some text, 

than enter characters you want to replace, 

than enter character for replacing`);

// get user inputs
let userText;
let charToReplace;
let replacedChar;
while (true) {
  userText = prompt('Enter some text');
  if (!userText) {
    continue;
  } else {
    charToReplace = prompt('Enter characters for replace');
    while (charToReplace === null) {
      alert('Put some characters');
      charToReplace = prompt('Enter characters for replace');
    }
    replacedChar = prompt('Enter character to replace');
    while (replacedChar === null) {
      replacedChar = prompt('Enter character to replace');
    } 
      break;
    
  }
}

// use function for replace

const newtext = replace(userText, charToReplace, replacedChar);

alert(`before: ${userText}
=>
after: ${newtext}`);
