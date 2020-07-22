// Can you write a function that takes an array of values and remove all duplicate elements in the array ? Make sure to return the array with only the unique values remaining.

function removeDuplicates(arr) {
  return arr.filter((value, idx, arr) => arr.indexOf(value) === idx)
}

console.log(removeDuplicates([1,2,3,1,3,4]))
