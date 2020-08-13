// Write a function that takes in a string and returns the index of the first vowel in the string.Y is not considered a vowel, the string should always contain a vowel, and the string must be only one word.

function firstVowelIndex(str) {
  let vowels = ['a','e','i','o','u'];
  let splitStr = str.split('');
  if(splitStr.includes(' ')) {
    return "not a valid input"
  }
  for(let i = 0; i < splitStr.length; i++) {
    if(vowels.includes(splitStr[i])){
      return i;
    }
  }
}

console.log(firstVowelIndex("hello"));
