/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b) {
  let first = a;
  let second = b;
  let sum = '';
  if (a.length < b.length) {
    first = b;
    second = a;
  }

  let lenDiff = second.length - first.length;
  let carryOver = 0;
  for (let i = first.length - 1; i >= 0; i--) {
    let temp = (Number(first.charAt(i)) % 10) + (Number(second.charAt(i + lenDiff)) % 10) + carryOver;
    if (temp >= 10) {
      sum = (temp % 10) + sum;
      carryOver = Math.floor(temp / 10);
    } else {
      sum = temp + sum;
      carryOver = 0;
    }
  }
  if (carryOver) {
    sum = carryOver + sum;
  }
  return sum;
}

//Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
