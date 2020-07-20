// You've most likely heard of the game Loves me, loves me not. Someone has a flower - each time the pluck off a petal, they say "Loves me"...then the next time they pluck off a flower, they say "Loves me not"... and so on and so on until they pull off the last petal. Whatever phrase they speak out when they pull off the last petal determines whether someone they have interest in loves them back or not.

// Write a function to simulate this game! Pass in a number of petals.Return "Loves me, Loves me not, Loves me...etc".On the LAST phrase, write it in ALL CAPS.

//   doYouLoveMe(4) ==> "Loves me, Loves me not, Loves me, LOVES ME NOT"

function doYouLoveMe(plucks) {
  let response = [];
  for(let i = 0; i < plucks; i++) {
    if (i % 2 === 0) {
      response.push("Loves me")
    } else {
      response.push("Loves me not")
    }
  }
  response[plucks - 1] = response[plucks - 1].toUpperCase();
  return response.join(", ");
}

console.log(doYouLoveMe(4));
