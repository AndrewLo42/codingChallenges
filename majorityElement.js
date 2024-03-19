/*
LeetCode 169
The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array. 
*/

function majorityElementSlow() {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }
    let keys = Object.keys(map);
        keys.sort(function(a, b) {
        return map[b] - map[a]
    });
    return keys[0];
}

function majorityElementBetter() {
    let counter = 0;
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max) {
            counter++;
        } else {
            counter--;
            if (counter < 0) {
                counter = 1;
                max = nums[i];
            }
        }
    }
    return max;
}