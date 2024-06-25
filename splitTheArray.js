/*
You are given an integer array nums of even length. You have to split the array into two parts nums1 and nums2 such that:

    nums1.length == nums2.length == nums.length / 2.
    nums1 should contain distinct elements.
    nums2 should also contain distinct elements.

Return true if it is possible to split the array, and false otherwise.

LC 3046
*/

// since it's just two parts, can check to see if anything appears more than twice

var isPossibleToSplit = function(nums) {
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        seen[nums[i]] ? seen[nums[i]] += 1 : seen[nums[i]] = 1;
        if (seen[nums[i]] > 2) {
            return false;
        }
    }
    return true;
};