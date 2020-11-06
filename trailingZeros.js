// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 * ... * N

// Be careful 1000! has 2568 digits...

function zeros(num) {
  let zeroCount = 0;
  for(let i = 5; i <=num; i += 5) {
    let num = i;
    while(num % 5 === 0) {
      num /= 5;
      zeroCount++;
    }
  }
  return zeroCount;
}

console.log(zeros(1));
//1
console.log(zeros(12));
//2

function efficientZeros(n) {
  let zeroCount = 0;
  while(n > 0) {
    n = Math.floor(n/5);
    zeroCount  += n;
  }
  return zeroCount;
}

console.log(efficientZeros(30));
