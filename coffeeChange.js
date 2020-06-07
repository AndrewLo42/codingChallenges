// Having no coffee left in the house, you run out to grab some, hastily leaving your wallet behind.
// You come to this realization after the barista hands over your Ristretto, and pull out some loose change from your pocket.
// Embarrassed, you go home empty - handed and start on a function to save you next time.
// Your function will accept a total amount due and an array that represents the change in your pocket, and holds values in this order: pennies, nickels, dimes, quarters.
// For example, if you provide this array: [1, 2, 3, 4], it means that the contents in your pocket consist of one penny, two nickels, three dimes, and four quarters.
// If you have enough change to cover your order, the function will return true.Otherwise, it'll return false. Good luck!

function looseChange(amount, coins) {
  let pocketAmount = 0;
  for (let i = 0; i < coins.length; i++) {
    if(i === 0){
      pocketAmount += (coins[i]);
    } else if (i === 1) {
      pocketAmount += (coins[i] * 5);
    } else if (i === 2) {
      pocketAmount += (coins[i] * 10);
    } else if (i === 3) {
      pocketAmount += (coins[i] * 25);
    }

  }
  pocketAmount = pocketAmount/100;
  console.log("you have $" + pocketAmount);
  return(pocketAmount >= amount);
}

console.log(looseChange(1.21, [1,4,5,3]));
console.log(looseChange(5.78, [3, 1, 9, 12]));
console.log(looseChange(2.01, [1, 0, 0, 8]));
