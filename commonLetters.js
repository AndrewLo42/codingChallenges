// Write a function that receives two strings and returns a string that contains only the letters that are shared between both strings.If there are none, return an empty string.Put the string in alphabetical order before returning it.

function commonLetters(str1, str2) {
  let splitStr1 = str1.toLowerCase().split('');
  let splitStr2 = str2.toLowerCase().split('');
  let sameLetters = [];
  // if(splitStr1.length > splitStr2.length) {
  //   splitLength = splitStr1.length;
  // } else {
  //   splitLength = splitStr2.length;
  // }
  for(let i = 0; i < splitStr1.length; i++) {
    if(splitStr2.includes(splitStr1[i]) && !sameLetters.includes(splitStr1[i])) {
      sameLetters.push(splitStr1[i]);
    }
  }
  return(sameLetters.sort((a,b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
  }));
}

console.log(commonLetters("hello", "moto"));
console.log(commonLetters("chicken", "cheese"));
