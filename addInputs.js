// Beginner programmer John Doe wants to make a program that adds and outputs each positive digit entered by the user(range is int).For instance, the result of 5528 is 20 and the result of 6714283 is 31.

function addInput(input){
  let splitInput = (""+input).split("");
  let sum = 0;
  for (let i = 0; i < splitInput.length; i++) {
    sum += parseInt(splitInput[i]);
  }
  return sum;
}
console.log(addInput(6714283));
console.log(addInput(5528));
