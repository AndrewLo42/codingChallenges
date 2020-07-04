// An adverb is typically any word that ends in 'ly'.Can you write a function that counts the number of words that ends in 'ly'.For this problem, even if the word is an adjective, it's still okay to count it as true. However, you must not count the word if it starts or contains 'ly' - it MUST be at the end. Happy coding!

function lyCount(phrase) {
  let splitPhrase = phrase.toLowerCase().split(" ");
  let count = 0;
  for(let i = 0; i < splitPhrase.length; i++) {
    let splitWord = splitPhrase[i].split('');
    if(splitWord[splitWord.length-1] === "y" && splitWord[splitWord.length-2] === "l"){
      count++;
    }
  }
  return count;
}

console.log(lyCount("really cooly made"));
