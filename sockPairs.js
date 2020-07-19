// While doing laundry, you notice that your socks are all mixed up and you can't tell if you have all matching pairs or not. Write a function that returns the number of sock pairs you find in the pile. Two instances of the same letter, in our case, will represent a sock pair. For example, "ss".

// pairs("ammtaxt")-- > 3

function pairs(socks) {
  let pairedList = {}
  let splitSocks = socks.split("");
  let sockPairs = 0;
  for(let i = 0; i < splitSocks.length; i++) {
    if(!pairedList[splitSocks[i]]) {
      pairedList[splitSocks[i]] = 1;
    } else {
      pairedList[splitSocks[i]] += 1;
    }
  }

  for (const sock in pairedList) {
    if(pairedList[sock] % 2 === 0) {
      sockPairs++;
    }
  }

  return sockPairs;

}

console.log(pairs("ammtaxt"));
