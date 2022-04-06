// add_binary_strings("110", "11", 2) # "1001"

// """
//   110
// +  11
// -----
//  1001
// """

// add_binary_strings("110", "011", 2) # "1001"
// add_binary_strings("110", "110", 2) # "1100"
// add_binary_strings("111", "111", 2) # "1110"
// add_binary_strings("101", "101", 2) # "1010"
// add_binary_strings("110", "111", 2) # "1101"
// add_binary_strings("1111", "1", 2) # "10000"

  // base3 -> add_strings("12", "11", 3) -> "100"
  // 12
  // 11
  // ---
  // 100


//121
function add_binary_strings(a, b) {
  let binSum = '';
  let intSum = (parseInt(a) +  parseInt(b) + '');
  let carry = 0;
  for (let i = intSum.length - 1; i >= 0; i--) {
    let current = (parseInt(intSum[i]) + carry).toString();
    if(current === '3') {
      binSum = '1' + binSum;
      carry = 1;
    } else if (current === '2') {
      binSum = '0' + binSum;
      carry = 1;
    } else if (current === '1') {
      binSum = '1' + binSum;
      carry = 0;
    } else if (current === '0') {
      binSum = '0' + binSum;
      carry = 0;
    }
    if(carry === 1 && i ===0) {
      binSum = '1' + binSum;
    }
  }
  return binSum;
}

console.log(add_binary_strings("1111", "1"));
