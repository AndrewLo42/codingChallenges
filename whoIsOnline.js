// Write a function that returns the number of users who are online in your slack channel.Please include the following features:

// 1) If nobody is online, return "There is nobody online."

// 2) If one person is online, return "username online"

// 3) If there are two people online, return "username and username2 are online

// 4) If there are more than two people, return "username, username2, and # more are online." So, if there were 6 people total online, you could return "username, username2, and 4 more are online."

// ex) whoIsOnline(["user123", "user4"]) ➞ "user123 and user4 are online"

function listAllWhoAreOnline(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {

    if (i === (arr.length - 1)) {
      if(arr.length !== 1){
        output.push("and");
      }
      output.push(arr[i]);
    } else {
      output.push(arr[i]);
      if ((arr.length !== 2)) {
        output[output.length - 1] = output[output.length - 1] + ", "
      }
    }
  }
  let plural = arr.length === 1 ? "is online" : "are online";
  output.push(plural);
  return output.join(' ');
}

console.log(listAllWhoAreOnline([ "user4"]));
console.log(listAllWhoAreOnline(["user123", "user4"]));
console.log(listAllWhoAreOnline(["user123", "user4", "user1000"]));

function whoIsOnline(arr) {
  let output = [];
  if(arr.length === 0) {
    return "There is nobody online."
  }
  if (arr.length === 1) {
   return `${arr[0]} is online.`
  }
  if(arr.length === 2) {
    return `${arr[0]} and ${arr[1]} are online.`
  }
  for (let i = 0; i < 2; i++) {
    output.push(arr[i]+", ");
  }
  let remainder = arr.length - output.length;
  output.push(`and ${remainder} more are online.`)
  return output.join(' ');
}

console.log(whoIsOnline(["user4"]));
console.log(whoIsOnline(["user123", "user4"]));
console.log(whoIsOnline(["user123", "user4", "user1000", "user69"]));
