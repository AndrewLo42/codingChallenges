// Robin comes to you today with a challenge about arrays: can you write a function that receives two arrays of integers and one target integer value and determines if there is a pair of numbers that add up to the target value ? One number must come from each array and the other must come from the second array.Return true if at least one pair exists that adds up to the target value - otherwise, return false.

//   ex) addUp([1, 2], [2, 3, 5], 4)-- > true

function addPairsInArray(arr1, arr2, target) {
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if(arr1[i] + arr2[j] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(addPairsInArray([1, 2], [2, 3, 5], 4))
