// Write a function that takes a string and returns a coded version of the string.Your function should replace all 'a's with '4's, 'e's with '3's, 'i's with '1's, 'o's with '0's, and 's's with '5's.

function codedString(str) {
  let splitStr = str.split('');
  for (let i = 0; i < splitStr.length; i++) {
    if(splitStr[i].toLowerCase() === 'a') {
      splitStr[i] = '4';
    } else if (splitStr[i].toLowerCase() === 'e') {
      splitStr[i] = '3';
    } else if (splitStr[i].toLowerCase() === 'i') {
      splitStr[i] = '1';
    } else if (splitStr[i].toLowerCase() === 'o') {
      splitStr[i] = '0';
    } else if (splitStr[i].toLowerCase() === 's') {
      splitStr[i] = '5';
    }
  }
  return splitStr.join('');
}

console.log(codedString("Hello, I think eggs are tasty"));
