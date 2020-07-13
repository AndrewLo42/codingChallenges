// Do you remember the joke "Why was 6 afraid of 7? Because 7, 8, 9!" ? Well, that joke was wrong.A number can only eat the number to the right of it if the number is SMALLER.Once it eats that number, it turns into the sum of itself and that number.In our case, only one number will be eating - this number is the first in the array.You need to create a function that returns the final array after this number has finished eating.

function eatNum(arr){
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] > arr[i + 1]) {
      arr[i] += arr[i+1];
      arr.splice(i+1,1);
      i--;
    }
  }
  return arr;
}

console.log(eatNum([3,4,3,2,4]));
