/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
    maxNumber,
    fbResults,
    fbText;

isInteger = false;

while (!isInteger) {
  let input = window.prompt('Enter a number greater than 0:');
  if (input === null) break;
  if (input.indexOf('.') < 0) {
    maxNumber = Number.parseInt(input);
    isInteger = Number.isSafeInteger(maxNumber) && maxNumber > 0;
  }
}

fbResults = [];

for (let i=1; i<= maxNumber; i++) {
  let outputString = '';
  if (i % 3 === 0) {
    outputString += 'Fizz';
  } 
  if (i % 5 === 0) {
    outputString += 'Buzz';
  }
  if (outputString.length === 0) {
    outputString = i;
  }
  fbResults.push(outputString);
}

// Concatenate the values of fbResults

fbText = '';

for (let value of fbResults){
  fbText += value + '\n';
}

// Alt option for concatenation
// fbText = fbResults.join('\n');

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector('#max-number');
numDisplay.innerHTML = maxNumber;
let output = document.querySelector('#output');
output.innerHTML = fbText;
