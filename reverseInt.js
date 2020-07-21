// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// take int and turn it into a string
// str.split().reverse()
// for loop iterate through our array
// var isStart to track beginning of the reversed array, make sure we don't get rid of 0s later on
// var ans array
// if [i] === 0 && var isStart  shift and inc down
// if [i] === '-' pop & save into temp var and unshift to move it from back to front
// if [i] !== 0 (ok) isStart = false
// [this should be a reversed version in array form]
// parse back into an in and str.join('')

function reverseInt(n) {
  let splitNum = (`${n}`).split('');
  let reversedSplitNum = splitNum.reverse();
  console.log(reversedSplitNum)
  let isStart = true;
  if (n === 0) {
    return n;
  }
  for (let i = 0; i < reversedSplitNum.length; i++) {
    if (reversedSplitNum[i] === '0' && isStart) {
      reversedSplitNum.shift();
      i--;
    } else if (reversedSplitNum[i] === '-') {
      console.log('ye')
      let temp = reversedSplitNum.pop();
      reversedSplitNum.unshift(temp);
    } else if (reversedSplitNum[i] !== "0") {
      isStart = false;
    }
    console.log(i, reversedSplitNum[i])
  }

  return parseInt(reversedSplitNum.join(''));

}
console.log(reverseInt(-5010))
