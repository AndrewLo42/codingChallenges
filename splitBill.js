// You and your friend go out to eat.You order dinner and she orders dessert.You decide to split the bill - you pay for the food items and she pays only for the dessert items.

// If you have two arrays, one with the type of dishes ordered and one with the corresponding price, create a function that returns an array where the first element is the amount that YOU pay and the second element is that amount that YOUR FRIEND pays.

//   ex)

// splitTheBill(["D", "D", "F", "D"], [1, 1, 3, 2]) ==> [3, 4]

function splitTheBill(bill, prices) {
  let payment = [0, 0];
  for(let i = 0; i < bill.length; i++) {
    if(bill[i] === "D") {
      payment[1] += prices[i];
    } else {
      payment[0] += prices[i];
    }
  }
  return payment;
}

console.log(splitTheBill(["D", "F", "F", "D"], [1, 4, 3, 2]));
console.log(splitTheBill(["D", "D", "F", "D"], [1, 1, 3, 2]));
