/*
A word is considered valid if:

    It contains a minimum of 3 characters.
    It contains only digits (0-9), and English letters (uppercase and lowercase).
    It includes at least one vowel.
    It includes at least one consonant.

You are given a string word.

Return true if word is valid, otherwise, return false.

LC 3136
*/

var isValid = function(word) {
    let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    let vowels = ['a','e','i','o','u'];
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let allowed = consonants.concat(vowels).concat(numbers);

    if (word.length < 3) {
        return false;
    }
    let hasVowel = false;
    let hasConsonant = false;
    let splitWord = word.split('');
    for (let i = 0; i < splitWord.length; i++) {
        if (consonants.includes(splitWord[i].toLowerCase())) {
            hasConsonant = true;
        }
        if (vowels.includes(splitWord[i].toLowerCase())) {
            hasVowel = true;
        }
        if (!allowed.includes(splitWord[i].toLowerCase())) {
            return false;
        }
    }
    if (hasVowel && hasConsonant) {
        return true;
    } else {
        return false;
    }
}