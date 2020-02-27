function firstDuplicate(a) {
  let duplicates = {};
  for (let arrIdx = 0; arrIdx < a.length; arrIdx++) {
    if (duplicates[a[arrIdx]] !== undefined) {

      return a[arrIdx];
    } else {
      duplicates[a[arrIdx]] = a[arrIdx];
    }
  }
  return -1;
}
/*
Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return
*/
