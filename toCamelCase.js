// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str) {
  let splitStr = str.split(/[-_]/);

  for (let i = 0; i < splitStr.length; i++) {
    if(i) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
      console.log(splitStr, i)
  }
  return splitStr.join('');
}

console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("The-Tank-Warrior"))
