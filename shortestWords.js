// Today's challenge lets us give respect to short words - words that are often overlooked but are also often the most important glue in a sentence! Can you write a function that, provided a string as an argument, returns the shortest words in the string lowercase and in sorted in alphabetical order?


function shortestWords(str) {
  let splitStr = str.toLowerCase().split(' ');
  let result = [];
  splitStr.sort((a,b) => {
    return a.length - b.length;
  });
  let shortestLength = splitStr[0].length;

  for (let i = 0; i < splitStr.length; i++) {
    if(splitStr[i].length === shortestLength){
      result.push(splitStr[i])
    }
  }
  return result.sort(function (a, b) {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  })
}

console.log(shortestWords("Hello I am Paul"))
console.log(shortestWords("The quick brown fox jumped over the lazy dog"))
