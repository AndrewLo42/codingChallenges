/*
ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.

An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

For example:

ISBN     : 1 1 1 2 2 2 3 3 3  9
position : 1 2 3 4 5 6 7 8 9 10
This is a valid ISBN, because:

(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0
*/

function validISBN10(isbn) {
    // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
  let splitIsbn = isbn.split('');
  let sum = 0;
  if(isbn.length !== 10) {
    return false;
  }
  for(let i = 0; i < isbn.length; i++) {
    let position = i + 1;
    if(position === isbn.length) {
      if(!isNaN(parseInt(isbn[i]))) {
        sum += (isbn[i] * position)
      } else if(isbn[i].toLowerCase() === 'x') {
        sum += (10 * position)
      } else {
        return false;
      }
    } else {
      if(!isNaN(parseInt(isbn[i]))) {
        sum += (isbn[i] * position)
      } else {
        return false;
      }
    }
  }
  if(sum % 11 === 0) {
    return true;
  } else {
    return false;
  }
}
