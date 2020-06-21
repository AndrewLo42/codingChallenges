// Your friends have invited you to play a virtual game of poker! How exciting...until you realize that you know nothing about Poker.Don't worry, this Robin challenge will at least help you figure out if you or your friends have a Full House. A Full House is a hand of 5 cards that have one pair of cards and one three of a kind. Let's write a function that takes in an array of 5 cards and tells us if the hand is a full house or not!

// isFullHouse(["K", "K", "A", "K", "A"]) should return true

// isFullHouse(["A", "J", "10", "3", "3"]) should return false

function isFullHouse(hand){
  let handCount = {};
  for (let i of hand) {
    handCount[i] = (handCount[i] || 0) + 1;
  }
  let countValues = Object.values(handCount);
  if ((countValues[0] === 2 && countValues[1] === 3) || (countValues[0] === 3 && countValues[1] === 2)){
    return true;
  }
  return false;
}

console.log(isFullHouse(["A", "J", "10", "3", "3"]));
console.log(isFullHouse(["K", "K", "A", "K", "A"] ));
