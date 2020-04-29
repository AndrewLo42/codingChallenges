function oddishOrEvenish(num) {
  let splitNum = ("" + num).split('');
  let sum = 0;
  for (let i = 0; i < splitNum.length; i++) {
    sum += parseInt(splitNum[i]);
  }
  if (sum % 2 === 0) {
    return "Evenish";
  } else {
    return "Oddish";
  }
}
