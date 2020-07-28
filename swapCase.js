// Write a function that accepts a string and returns the string with alternating case.For example, "Hi there" would turn into "hI tHeRe".Make sure to ignore spaces!


function swapCase(phrase) {
  let splitPhrase = phrase.split('');
  for(let i = 0; i < splitPhrase.length; i++) {
    if(splitPhrase[i] === splitPhrase[i].toUpperCase()){
      splitPhrase[i] = splitPhrase[i].toLowerCase();
    } else {
      splitPhrase[i] = splitPhrase[i].toUpperCase();
    }
  }
  return splitPhrase.join('');
}

console.log(swapCase("Hello There"))
