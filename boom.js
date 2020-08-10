// Create a function that accepts a number and returns a string variation of the word "Boom".The string should include n number of "o"s, unless n is less than 2. If that is the case, return "boom").If n is evenly divisible by 2, add an exclamation point at the end of the string.If n is evenly divisible by 5, return the string in all CAPS.If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation point to the end of the strin

function boomBoom(n) {
  let boom = "b";
  for(let i = 0; i < n; i++) {
    boom = boom + "o";
  }
  boom = boom + "m";
  if (n%2 === 0) {
    boom = boom + "!"
  }
  if(n%5 === 0) {
    boom = boom.toUpperCase();
  }
  if (n <= 2) {
    return "boom";
  }
  return boom;
}
console.log(boomBoom(5));
