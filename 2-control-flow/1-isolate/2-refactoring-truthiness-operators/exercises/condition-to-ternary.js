// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a _?_:_ instead of a conditional

// try different values and different types
const isLoggedIn = true;
const secretInformation = "it's a secret!";
const warningMessage = "You need to logg in";
console.log(isLoggedIn, secretInformation, warningMessage);

let toDisplay;
(isLoggedIn)
 ? toDisplay = secretInformation
 : toDisplay = warningMessage;

console.log(toDisplay);

console.log('-- end --');
