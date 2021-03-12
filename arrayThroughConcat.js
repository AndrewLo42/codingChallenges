var canFormArray = function(arr, pieces) {
    for (let i = 0; i < pieces.length; i++) {
    let ind = -1;
    for (let j = 0; j < pieces[i].length; j++) {
      if (j == 0) {
        ind = arr.indexOf(pieces[i][j]);
      }
      if (ind !== -1) {
        if (j >= 1) {
             ind = ind + 1;
          if (ind !== arr.indexOf(pieces[i][j])) return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};


console.log(canFormArray( [91,4,64,78], [[78],[4,64],[91]]))

/*
You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct.
Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

Return true if it is possible to form the array arr from pieces. Otherwise, return false.
*/
