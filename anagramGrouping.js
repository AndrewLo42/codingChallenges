function groupAnagrams(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let sortedWord = arr[i].split("").sort().join("");
        if (result[sortedWord]) {
          result[sortedWord].push(arr[i]);
        } else {
          result[sortedWord] = [arr[i]];
        }
      }
    return Object.values(result);
 }

 groupAnagrams(["cat", "dog", "tac", "god", "act", "good"])
