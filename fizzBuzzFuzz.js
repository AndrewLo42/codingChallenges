// You've been preparing for your next big interview, and have gone over the classic FizzBuzz problem over and over.
//You decide to visit your Robin dashboard, and it looks like the question of the day is not FizzBuzz, but FizzBuzzFuzz!
//Here are the rules: Write a function that will write out all the numbers from 1 to 150 to the console.
//For multiples of 3, instead of writing "3", you should write "Fizz". When a number is a multiple of "5", you should write "Buzz". If a number is a multiple of "7", print "Fuzz". For multiples of 7 AND 3, write out "FizzFuzz".
//When a number is a multiple of 7 AND 5, write out "BuzzFuzz". When a number is a multiple of 3,5, AND 7, you should write out "FizzBuzZFuzz".

function fizzBuzzFuzz(num) {
  let arr = [];
  for(let i = 1; i < num; i++) {
    if(i%3 === 0 && i%5 === 0 && i%7 === 0){
      arr.push("FizzBuzzFuzz");
    } else if (i%3 === 0 && i%7 === 0){
      arr.push("FizzFuzz");
    } else if (i%7 === 0 && i%5 === 0) {
      arr.push("BuzzFuzz");
    } else if (i%3===0) {
      arr.push("Fizz");
    } else if (i%5===0) {
      arr.push("Buzz");
    } else if (i%7 === 0) {
      arr.push("Fuzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

console.log(fizzBuzzFuzz(150));
