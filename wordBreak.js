/*

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.



Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

*/

function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    const visited = Array(s.length).fill(false)
    const queue = [0];

    while(queue.length) {
        const start = queue.shift();
        if(visited[start]) continue;

        for(let end = start + 1; end <= s.length; end++) {
            if(!wordSet.has(s.slice(start, end))) continue;
            if(end === s.length) return true;
            queue.push(end);
        }
        visited[start] = true;
    }
    return false;
}

console.log(wordBreak("catsandog",  ["cats","dog","sand","and","cat"]))
console.log(wordBreak("applepenapple",   ["apple","pen"]))



//brute force
var wordBreak2 = function(s, wordDict) {
    var t = [];
    for (var i = 0; i< s.length; i++) {
        for (var j = 0; j <=i; j ++ ) {
            var word = s.slice(j, i + 1);
            if (wordDict.includes(word) && (j == 0 || t[j-1] == true )) {
                t[i] = true;
            }
        }
    }
    return t[s.length - 1] || false;
};


console.log(wordBreak2("catsandog",  ["cats","dog","sand","and","cat"]))
console.log(wordBreak2("applepenapple",   ["apple","pen"]))


//dynamic programming (dp) way
const wordBreak3 = (s, wordDict) => {
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      if (dp[start] && wordDict.includes(s.slice(start, end))) {
        dp[end] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

console.log(wordBreak3("catsandog",  ["cats","dog","sand","and","cat"]))
console.log(wordBreak3("applepenapple",   ["apple","pen"]))
