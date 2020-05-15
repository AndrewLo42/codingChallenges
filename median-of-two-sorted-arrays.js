// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays.The overall run time complexity should be O(log(m + n)).

// You may assume nums1 and nums2 cannot be both empty.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let nums = nums1.concat(nums2);
  nums.sort((a, b) => a - b)
  let mid = parseInt(nums.length / 2)
  if (nums.length % 2 !== 0) {
    return (nums[mid]);
  } else {
    let otherMid = mid - 1;
    return ((nums[mid] + nums[otherMid]) / 2);
  }


};


//NOTES:
/*
  Sorting without a custom function/operation inside won't sort negatives correctly
    check this website for a rundown:
      http://www.javascriptkit.com/javatutors/arraysort.shtml
  Is concat cheating? Maybe, but it sure beats making a loop just to push the elements together
  YES the arrays are presorted, but for some reason using
    array.sort is faster than comparing the first two elements
      to see which arry should be placed where...
  with sort: 112ms, with comparisons, 128ms
*/
var findMedianSortedArrays2 = function (nums1, nums2) {
  let nums = [];
  if (nums1[0] > nums2[0]) {
    nums = nums1.concat(nums2);
  } else {
    nums = nums2.concat(nums1);
  }

  nums.sort((a, b) => a - b)
  let mid = parseInt(nums.length / 2)
  if (nums.length % 2 !== 0) {
    return (nums[mid]);
  } else {
    let otherMid = mid - 1;
    return ((nums[mid] + nums[otherMid]) / 2);
  }


};
