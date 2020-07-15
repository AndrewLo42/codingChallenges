// Been doing most of your shopping online ? It looks like your favorite store is offering a promotion - if your total is greater than or equal to $30.00, then you get free shipping! Please write a function that returns true if your order is eligible for free shipping and false if it is not.

// freeShipping({ "Pens": 4.99, "Notebook": 3.99 }) ➞ false
// freeShipping({ "Laptop": 999.99 }) ➞ true

function freeShipping(cart) {
  let sum = 0;
  for (const item in cart) {
    sum += cart[item];
  }
  if (sum > 30) {
    return true;
  }
  return false;
}

console.log(freeShipping({ "Pens": 4.99, "Notebook": 3.99 }))
