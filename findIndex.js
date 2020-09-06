// Short and sweet: Create a function that finds the index of a given item in an array.

//   example: findMyIndex([1, 2, 3], 3) ➞ 2

function findMyIndex(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
      return i;
    }
  }
  return "Not found"
}

console.log(findMyIndex([1, 2, 3], 3))
