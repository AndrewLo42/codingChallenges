// Its raining...words ? We need to collect words into our buckets! Let's try to write a function that splits a sentence into buckets of words. Each bucket can have a provided number of characters or less (spaces count as one character). If the whole sentence is unable to fit inside buckets, then we have to return an empty array :( Here is an example:

// collectWords("the mouse can creep", 10)
// ➞["the mouse", "can creep",]

function wordBucket(str, size) {
  let splitStr = str.split('');
  var half = Math.ceil(splitStr.length / 2);
  let firstHalf = splitStr.splice(0,half);
  if(firstHalf.length <= size && splitStr.length <= size) {
    return [firstHalf.join(''), splitStr.join('')];
  }
}

console.log(wordBucket("the mouse can creep", 10));
