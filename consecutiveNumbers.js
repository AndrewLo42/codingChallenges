// I'm sure by now you know that computers operate in binary, right? Just a whole bunch of 0s and 1s. These are very powerful numbers. A computer's processor is made up of circuits that are composed of billions of transistors - switches that are activated by the electronic signals it receives.The 1s and 0s reflect each on and off state of a transistor.

// Can you write a function that accepts a string of 0s and 1s and returns true if every consecutive sequence of 1s is followed by a consecutive sequence of 0s of the same length.

// For example:

// 111000110010 -- > true

// 1001101110 -- > false

function consecutive(str) {
  let splitStr = str.split("");
  let count1 = 1;
  let count0 = 0;
  for(let i = 1; i < splitStr.length; i++) {
    if((splitStr[i] === "1") && (splitStr[i - 1] === "1") && (count0 === 0)){
      count1++;
    } else if ((splitStr[i] === "0") && (splitStr[i - 1] === "0")) {
      count0++;
    } else {
      if(count1 !== count0) {
        return false;
      }
    }
    return true;
  }

}
console.log(consecutive('111000110010'));
console.log(consecutive('1001101110'));
