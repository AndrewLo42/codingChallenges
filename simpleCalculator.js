// You're at an in-person interview for a software engineering role that you applied to last week. The interview starts off as expected, until the hiring manager asks you this: "If I give you any two numbers and ask you to add them together, subtract one from the other, multiply them, or divide one from the other, could you do it?" You pause at first, because you aren't a math genius.But then you realize something - this is a technical interview! You could just write a function that receives two numbers, an operator(+, -, x, or / ) and returns the correct answer.Right ? Let's ace this interview! Don't forget, dividing by 0 is an illegal operation, so make sure to return a message when that case appears.

function simpleCalculator(num1, num2, operator) {
  switch(operator) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    case '/':
      if(num2 === 0){
        return "Cannot divide by 0";
      } else {
        return num1 / num2;
      }

    default:
      return "Illegal number or operation";

  }
}

console.log(simpleCalculator(1,2,'+'))
