// #todo

'use strict';

// alert with instructions for inform the ruls
alert(`Remembery, the game of remembering.

You will be prompted to enter 3 phrases.
next you will be prompted to remember one of them

if you enter it exactly, you wi n!`);

// prompt a user for input for store it
let input2 = '';
let input1 = '';
let input3 = '';

while (input1 === '' || input1 === null) {
  input1 = prompt('enter your first phrase to remember:');
}
while (input2 === '' || input2 === null) {
  input2 = prompt('enter your second phrase to remember:');
}
while (input3 === '' || input3 === null) {
  input3 = prompt('enter your third phrase to remember:');
}

alert('all saved! get ready to remember');

// generate random number for ask a user remember input with this number
const randomNumber = Math.random();
const randomNumberFrom3 = randomNumber * 3;
const randomEnd = Math.ceil(randomNumberFrom3);

// ask user to promt phrase with random number

const userGuess = prompt('Please type phrase number ' + randomEnd);

// compare user prompte with correct phrase
let correctAnswer = '';
if (randomEnd === 1) {
correctAnswer = input1;
} else if (randomEnd === 2) {
  correctAnswer = input2;
} else if (randomEnd === 3) {
  correctAnswer = input3;
}

(correctAnswer === userGuess) 
? alert('Correct! Phrase ' + randomEnd + ' was ' + correctAnswer)
: alert('nope :(');