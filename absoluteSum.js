function getAbsSum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      sum += (arr[i] * -1);
    } else {
      sum += arr[i];
    }
  }
  return sum;
}
