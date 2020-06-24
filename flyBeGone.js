// * buzz buzz buzz * Flies...again ? Didn't you just get rid of them this morning? In a world like the one seen in Tron, you could just write a function to get rid of each "fly" you see. Why don't you do the same: write a function that removes each "fly" you see in a string, as well as any letter from the word "fly"(f, l, or y), just to be safe! For example, if you passed in a string like "flyflyfflllgoflyyyyflynefffff", it would return the string "gone".If there are no "fly"s or traces of "fly"s, return the string "No flies here!" Give it a try!

function removeOnlyFlies(str) {
  return str.replace(/fly/g, '');
}

console.log(removeOnlyFlies("flyflyfflllgoflyyyyflynefffff"));


function removeFlies(str) {
  str = str.toLowerCase();
  var fTest = new RegExp("f");
  var lTest = new RegExp("l");
  var yTest = new RegExp("y");
  if (fTest.test(str) || lTest.test(str) || yTest.test(str)) {
    let noFlies = str.replace(/f/g, '');
    noFlies = noFlies.replace(/l/g, '');
    noFlies = noFlies.replace(/y/g, '');
    return noFlies;
  }
  return "No flies here!"
}

console.log(removeFlies("flyflyfflllgoflyyyyflynefffff"));
