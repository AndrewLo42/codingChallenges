//Anagrams are words that contain the exact same letters in the same quantity.
//Write a function that accepts two words and returns true if they are anagrams.
//BONUS: write the function so that it can receive any number of words and returns true if all of them are anagrams of each other.

//only 2 params
function simpleAnagram(w1, w2) {
  if (w1.split('').sort().join('') === w2.split('').sort().join('')) {
    return true;
  }
  return false;
}

//any amount of params
function advancedAnagram(...words) {
  let ans = null;
  for (let i = 1; i < words.length; i++) {
    if (simpleAnagram(words[0], words[i])) {
      ans = true;
    } else { ans = false }
  }
  return ans;
}
