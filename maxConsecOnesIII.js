/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

*/

var longestOnes = function(nums, k) {
    let maximum = 0;
    let zeros = 0;
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros += 1;
        }

        while (zeros > k) {
            if (nums[j] === 0) {
                zeros -= 1;
            }
            j += 1;
        }
        maximum = Math.max(maximum, (i - j + 1));
    }
    return maximum;
};


/*
Since one of the loops doesn’t loop over the array, it doesn’t become O(n^2). 
An O(n^2) would be a loop that iterates over each element in another for loop that iterates over each element. 
The while loop only loops based on the number of zeroes being greater than k, not the length of the list.
*/