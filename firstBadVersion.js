/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
LC 278
*/

//Binary Search
// Getting middle as the average 
// If middle is bad, search lower half
// If middle is not bad, search upper half
// Once start and end meet (where loop ends), return value of start which will be the FIRST bad version

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1) return n;

        let start = 0;
        let end = n;
        while (start <= end) {
            let middle = start + Math.floor((end - start) / 2)
            if (isBadVersion(middle)) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }
        return start;
    };
};