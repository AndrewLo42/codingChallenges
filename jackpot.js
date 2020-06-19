// Due to the fact that everywhere - including your favorite casino - is closed during the COVID pandemic, you decide to do some online gambling.Lucky for you, there is a major flaw in their system, and you can easily hit the jackpot - you just need to write a function to do so.This function should take in an array(each array element represents a slot item) and return true if all of the elements are the same.For example isJackpot(["@", "@", "@", "@"] will return true.If you want to win the jackpot, you just need to call the function with matching elements.Get ready, because Virtual Vegas Part 2 won't be as easy ;)

function jackpot(slots) {
  for (let i = 0; i < slots.length-1; i++) {
    if (slots[i] !== slots[i+1]){
      return false;
    }
  }
  return true;
}
console.log(jackpot(["@", "@", "@", "@"]));
