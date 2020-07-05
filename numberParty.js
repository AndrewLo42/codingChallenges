// How are our lovely number people doing today ? We're going to have an exclusive numbers-only party next week. You can bring any type of friends that wear "String" clothes as long as they are real number. As we expect the infinite number of numbers to come to the party, we should rather build a scanner that will scan every guest and validate whether they are a real numbers. If any number brings a fake guest, it will be kicked out of our world! Can your team build a special function that will be used in the scanner? Please remember, all guests will be wearing string clothes.

// For example,

//   numScanner("2.2") ➞ true

// numScanner("1208") ➞ true

// numScanner("number") ➞ false

// numScanner("0x71e") ➞ false

// numScanner("2.5.9") ➞ false

function numScanner(guest) {
  if(!isNaN(guest)) {
    let split = guest.toLowerCase().split("");
    for(let i = 0; i < split.length; i++) {
      if ((/^[a-z]+$/).test(split[i]) ) {
        return false;
      }
    }
  }
  return (!isNaN(guest));

}

console.log(numScanner("2.2"));
console.log(numScanner("1208"));
console.log(numScanner("0x71e"));
console.log(numScanner("number"));
console.log(numScanner("2.5.9"));
