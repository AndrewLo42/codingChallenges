// Here is one of the questions brought to our attention from an engineer who had an interview at Google.

// "I would like you to write a function to check how many times the number 8 appears from 1 to 10,000. Instead of counting how many numbers contain the number 8, you need to count all instances that "8" appears.

// In case you may ask the question to me, I'd like to mention first that, for instance, 1882 should be counted as 2, 8880 as 3)."

function countEights()  {
  let count = 0;
  for (let i = 1; i < 10000; i++){
    let splitNum = `${i}`.split('');
    for (let j = 0; j < splitNum.length; j++) {
      if(splitNum[j] === "8") {
        count++;
      }
    }
  }
  return count;
}

console.log(countEights());
