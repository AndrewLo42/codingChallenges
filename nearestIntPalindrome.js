// Sheltered at home, you are so bored out of your mind that you start thinking about palindromes.A palindrome, in our case, is a number that reads the same in reverse as it reads normally.Robin challenges you to write a function that returns the closest palindrome to any number of your choice.If your number is exactly in between two palindromes, return the smaller number.If the number you chose IS a palindrome, return itself.Have fun!

function nearestPalindrome(num) {
  for(let i = 1;i < 50 ;i++){
    if (isPalindrome(num - i)) {
      return num - i;
    }
    if (isPalindrome(num + i)) {
      return num + i;
    }
  }
}

function isPalindrome(n) {
  if (n < 0) return false;

  let reversed = 0;
  let nClone = n;

  while (nClone > 0) {
    const lastDigit = nClone % 10;
    reversed = (reversed * 10) + lastDigit;
    nClone = parseInt(nClone / 10);
  }
  return n === reversed;
}

console.log(nearestPalindrome(122));
