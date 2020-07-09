// Here's a fundamental search challenge for you to tackle! Binary search algorithms are often efficient, and they work by repeatedly dividing the list in half and working with the portion that may contain the item being looked for until the possible location is narrowed down to just one element. Try giving it a shot!

//for recursive version, need to have start and end as params
function binarySearch(list, target, start, end) {
  if (start > end ) {
    return false;
  }
  let mid = Math.floor((start+end )/2);
  if (list[mid] === target) {
    return true;
  }
  if(list[mid] > target) {
    return binarySearch(list, target, start, mid-1);
  } else {
    return binarySearch(list, target, mid + 1, end);
  }
}

let arr = [1, 2, 5, 8, 10, 9];
let target = 5;
console.log(binarySearch(arr, target, 0, arr.length-1));

function nonRecursive(list, target) {
  let start = 0;
  let end = list.length-1;

  while (start <= end) {
    let mid = Math.floor((start + end)/2);
    if(list[mid] === target) {
      return true;
    } else if (list[mid] < target) {
      start = mid + 1;
    } else {
      end = mid -1;
    }
  }
  return false;
}

console.log(nonRecursive([1, 2, 5, 8, 10, 9], 5));
console.log(nonRecursive([1, 2, 5, 8, 10, 9], 6));
