// Each term in the Fibonacci sequence is the sum of the two preceding terms.If you start with 1 and 2, this sequence is:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// What is the total number of all even numbers in the Fibonacci sequence that are less than 4, 000, 000 ?


function evenFibs(limit) {
  let evens = 0;
  let num = 0;
  let prev = 1;
  let holder = 0;
  while(num <= limit){
    holder = num;
    num = num + prev;
    prev = holder;
    if(num % 2 === 0) {
      evens++;
    }
    // console.log(num) //To see fib in action
  }
  return evens;
}

console.log(evenFibs(4000000));
