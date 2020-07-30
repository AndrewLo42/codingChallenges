// Time for something short and sweet - please write a function that removes the last vowel from each word in a sentence.Only remove the LAST instance of a vowel.For example, "moon" would turn into "mon".

function removeLastVowel(sentence) {
  return sentence.replace(
    /[aeiou]([^aeiou]*?)(?= |$)/gi,
    '$1');
}

console.log(removeLastVowel("Hello moon"));

//no regex

function noLastVowels(sentence) {
  let splitSentence = sentence.split(" ");
  for (let i = 0; i < splitSentence.length; i++) {
    for (let j = splitSentence[i].length - 1; j >= 0; j--) {
      if (
        splitSentence[i][j].toLowerCase() == "a" ||
        splitSentence[i][j].toLowerCase() == "e" ||
        splitSentence[i][j].toLowerCase() == "i" ||
        splitSentence[i][j].toLowerCase() == "o" ||
        splitSentence[i][j].toLowerCase() == "u"
      ) {
        splitSentence[i] = splitSentence[i].slice(0, j) + splitSentence[i].slice(j + 1);
        // go to next word
        break;
      }
    }
  }
  return splitSentence.join(' ');
}

console.log(noLastVowels("Hello moon"));
