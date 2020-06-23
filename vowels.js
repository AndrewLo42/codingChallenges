// Supercalifragilisticexpialidocious - now you can say it backwards which is Dociousaliexpisticfragicalirupus! But that's going a bit too far, don't you think ? This is not a string reversal challenge - did you think it was ? Instead, can you write a function that returns the number of vowels in a string ? In particular, the team at Robin REALLY wants to know how many vowels are in "supercalifragilisticexpialidocious"!

function vowelCounter(word) {
  let vowels = ['a','e','i','o','u'];
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if(vowels.includes(word.charAt(i).toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log(vowelCounter('Supercalifragilisticexpialidocious'));
