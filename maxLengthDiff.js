// You are given two arrays a1 and a2 of strings.Each string is composed with letters from a to z.Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and / or a2 are empty return -1 in each language except in Haskell(F#) where you will return Nothing(None)


function maxDiffLength (a1, a2) {
  if (!a1.length || !a2.length) {
    return -1
  }

  let sortedA1 = a1.sort(function (a, b) {
    return b.length - a.length;
  });

  let sortedA2 = a2.sort(function (a, b) {
    return b.length - a.length;
  });


    let n1 = Math.abs(sortedA1[0].length - sortedA2[a2.length -1].length);
    let n2 = Math.abs(sortedA1[a1.length-1].length - sortedA2[0].length)

    if(n1 > n2) {
      return n1;
    } else {
      return n2;
    }

}
var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(maxDiffLength(s1, s2))
