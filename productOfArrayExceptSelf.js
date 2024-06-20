/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

#238
*/

// o(n) bad space usage
// using 2 arrays going left and right then combining at the end

var productExceptSelf = function(nums) {
    let ans = Array(nums.length);
    let right = Array(nums.length);
    let left = Array(nums.length);
    right[0] = 1;
    left[nums.length - 1] = 1;
    for (let i = 1; i < nums.length; i++) {
        right[i] = right[i - 1] * nums[i - 1]
    }
    for (let j = nums.length - 2; j >= 0; j--) {
        left[j] = left[j + 1] * nums[j + 1]; 
    }

    for (let k = 0; k < nums.length; k++) {
        ans[k] = right[k] * left[k];
    }

    return ans;
};

// o(n) approach good space usage
var productExceptSelf = function(nums) {
    let ans = Array(nums.length).fill(1);
    let cumulative = 1;
    for (let i = 0; i < nums.length; i++) {
        ans[i] *= cumulative;
        cumulative *= nums[i];
    }
    cumulative = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] *= cumulative;
        cumulative *= nums[i];
    }
    return ans;
};