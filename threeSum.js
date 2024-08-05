/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

LC 15
*/


// Two pointer approach
// Adjusts pointers based on the total sum of the proposed triplet
// Increments at other spots to prevent duplicate numbers since the array is sorted
var threeSum = function(nums) {
    let ans = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let low = i + 1;
            let high = nums.length - 1;

            while (low < high) {
                let sum = nums[i] + nums[low] + nums[high];
                if(sum > 0) {
                    high--;
                } else if (sum < 0) {
                    low++;
                } else {
                    ans.push([nums[i], nums[low], nums[high]]);
                    low++;
                    while (nums[low] === nums[low - 1] && low < high) {
                        low++;
                    }
                }
            }
        }
    }
    return ans;
};