// Write a function that returns the fewest number of steps it will take to convert a string into uppercase or into lower case, whichever takes the least number of steps.A step occurs when a character is changed from lower to upper case, or vice versa.Return 0 if the string is empty or if there are no steps needed to be taken.

function caseSteps(string) {
  let splitStr = string.split('');
  let lowerSteps = 0;
  let upperSteps = 0;
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] !== ' ' && splitStr[i] !== splitStr[i].toLowerCase()) {
      lowerSteps++;
    } else if (splitStr[i] !== ' ' && splitStr[i] !== splitStr[i].toUpperCase()) {
      upperSteps++;
    }
  }
  if (upperSteps > lowerSteps) {
    return `lowercase, ${lowerSteps}`;
  } else {
    if (upperSteps === 0) {
      return `lowercase, ${lowerSteps}`;
    }
    return `uppercase, ${upperSteps}`;
  }
}
console.log(caseSteps("BiG GOOBERS"))
console.log(caseSteps("Big Goobers"))
