function palindromeDate(date) {
  let chunkedDate = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).split('/').join('');
  if(chunkedDate === (chunkedDate.split('').reverse().join(''))){
    return true;
  }
  return false;
}

let date = new Date(2020, 1, 2);
console.log(palindromeDate(date))
