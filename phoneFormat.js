// You're building a social networking platform and save your user's phone numbers as integers.However, when you display the phone number on their profile, it isn't formatted and looks pretty ugly. It's time to write a function that takes in 10 integers and returns the phone number as a formatted string.The string would look something like this: (123) 456 - 7890

function phoneFormat(num) {
  let splitNum = (""+num).split('');
  if (splitNum.length < 10) {
    return ("Not valid 10 digit phone number");
  }
  return (`(${splitNum[0]}${splitNum[1]}${splitNum[2]}) ${splitNum[3]}${splitNum[4]}${splitNum[5]}-${splitNum[6]}${splitNum[7]}${splitNum[8]}${splitNum[9]}`)
}

console.log(phoneFormat(1234567890));
