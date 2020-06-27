// Have you heard about balanced words ? If a word is balanced, the sum of the values on the left - hand side of the word is equal to the sum of the values on the right - hand side.Each letter's value comes from its position in the alphabet (a=1, b=2, etc.) and can be summed to determine the left and right hand sums. If a word has an odd number of characters, the middle character should be ignored. Can you write a function that determines whether or not a word is balanced?
//"a".charCodeAt(0) returns 97

function balancedWord(word) {
  let half = parseInt(word.length / 2);
  let oddLength = (word.length % 2 !== 0);
  let firstHalf = 0;
  let secondHalf = 0;
  for (let i = 0; i < word.length; i++) {
    if (i < half) {
      firstHalf += (word.toLowerCase().charCodeAt(i) - 96);
    } else  {
      if (oddLength && i !== half) {
        secondHalf += (word.toLowerCase().charCodeAt(i) - 96);
      } else if (!oddLength) {
        secondHalf += (word.toLowerCase().charCodeAt(i) - 96);
      }
    }
  }
  return (firstHalf === secondHalf);
}

console.log(balancedWord("polop"));
console.log(balancedWord("Cheese"));
console.log(balancedWord("WoOw"));
