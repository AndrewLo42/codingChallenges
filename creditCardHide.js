// You've been quarantined and have become addicted to online shopping and start hoarding ramen.
// Much to your surprise, you discover that your favorite online marketplace is not secure and displays your credit card details in plain text.
// Being the good samaritan that you are, you decide to
// write a function for them that takes in a credit card number
// and returns a string that replaces all but the last four digits with stars, like this: "************1111".
// Make sure that the number of stars matches with the exact number of digits being replaced.

function hideCard(cardNum) {
  let numStr = `${cardNum}`;
  let numStrSplit = numStr.split('');
  for (let i = 0; i < numStrSplit.length - 4; i++) {
    numStrSplit[i] = '*';
  }
  return numStrSplit.join('');
}

console.log(hideCard(8513845961237456));

// should output ************7456

//using regex
function hideCardRegex(cardNum) {
  let numStr = `${cardNum}`;
  return numStr.replace(/\d(?=\d{4})/mg, '*');
}

console.log(hideCardRegex(8513845961237456));
