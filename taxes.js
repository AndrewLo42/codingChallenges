 //It’s tax season! Your CPA has requested that you provide your tax amounts in cents this year. 
 //Rather than using pen and paper, wouldn’t it be faster for you to write a function that accepts a dollar amount and a tax percentage and returns the taxed amount in cents?

function taxes(dollars, percent) {
  let dollarAmount = dollars.split('');
  dollarAmount.shift();
  dollarAmount = dollarAmount.join('');

  let percentTax = percent.split('')
  percentTax.pop()
  percentTax = percentTax.join('');
  return dollarAmount * (percentTax/100);
}

console.log(taxes('$100', '5%'));
