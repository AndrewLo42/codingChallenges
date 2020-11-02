// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

function firstNonRepeatingLetter(str) {
   for(var i in str) {
    if(str.match(new RegExp(str[i],"gi")).length === 1) {
      return str[i];
    }
  }
  return '';
}

console.log(firstNonRepeatingLetter("stress"))


//non regex
function firstNonRepeatingLetterNoRegex(s) {
  let str = s.toLowerCase();
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return "";
}
console.log(firstNonRepeatingLetterNoRegex("stress"))
