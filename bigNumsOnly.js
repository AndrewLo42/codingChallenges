// Write a function that reads an array and will return every element in the array that is greater than both the number on their left and the number on their right.The first and last number in the array do not count.If no numbers like this exist, return an empty array.

function bigNumsOnly(arr) {
  let bigNums = [];
  for (let i = 1; i < arr.length-1; i++){
    if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
      bigNums.push(arr[i]);
    }
  }
  return bigNums;
}
console.log(bigNumsOnly([1,3,2,4,1]));
