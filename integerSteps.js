// Write a function that, when given a list of integers, prints the pair of numbers with the shortest number of steps in between.In this case, you can assume that the array of points is already sorted.For example, if S = { 1, 3, 4, 8, 13, 17, 20} is given, the result will be(3, 4).

function integerSteps(arr) {
  let shortestStep = arr[arr.length - 1] - arr[0];
  let pair = [arr[0], arr[arr.length-1]];
  for (let i = 0; i < arr.length-1; i++) {
    if((arr[i+1] - arr[i]) < shortestStep) {
      shortestStep = (arr[i + 1] - arr[i]);
      pair[0] = arr[i];
      pair[1] = arr[i+1];
    }
  }
  return pair;
}

console.log(integerSteps([1, 3, 4, 8, 13, 17, 20]));
