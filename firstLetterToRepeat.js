/*
Given a string s consisting of lowercase English letters, return the first letter to appear twice.

Note:

    A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
    s will contain at least one letter that appears twice.
Input: s = "abcdd"
Output: "d"
Explanation:
The only letter that appears twice is 'd' so we return 'd'.

LC 2351
*/

// Map or array? 
var repeatedCharacter = function(s) {
    let seenLetters = {};
    for (let i = 0; i < s.length; i++) {
        if (seenLetters[s[i]]) {
            return s[i];
        } else {
            seenLetters[s[i]] = s[i];
        }
    }
};