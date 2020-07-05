// Thanos believes that in order to balance the program, half of the elements in the list should be randomly deleted.Write an Infinity Gauntlet program that randomly deletes and returns half of the elements in the input list when Thanos bounces a finger(when running the program).(Since it is randomly deleted, the output value must be different every time even if the input value is the same)

// Input example: [2, 3, 1, 6, 5, 7]

// Output example 1: [2, 5, 7]

// Output example 2: [3, 6, 5]

function thanosSnap(arr) {
  let half = parseInt(arr.length/2);
  for(let i = 0; i < half; i++) {
    let randomIdx = Math.floor(Math.random() * arr.length);
    arr.splice(randomIdx,1);
  }
  return arr;
}

console.log(thanosSnap([2, 3, 1, 6, 5, 7]));
