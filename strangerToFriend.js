// Let's look at a long string of words. If you see a word one time, it is considered a stranger. Once you've seen it three times, that word becomes an acquaintance.If you see it five times, it then becomes a friend.

// You can write a function to determine who your friends and acquaintances are.This function will read in a string and return an array of two arrays.The first array holds all the acquaintance words in the order that they became an acquaintance.The second array holds all of the friend words in the order that they became friends.If a word is in the friend array, it should not be in the acquaintance array.

function strangerToFriend(str) {
  let familiarity = {}
  let friends = [];
  let acquaintances = [];
  let splitFam = str.split(' ');
  for(let i = 0; i < splitFam.length; i++) {
    if(!familiarity[splitFam[i]]) {
      familiarity[splitFam[i]] = 1;
    } else {
      familiarity[splitFam[i]] += 1;
    }
  }
  for(const familiar in familiarity) {
    if(familiarity[familiar] >= 5){
      friends.push(familiar);
    } else if (familiarity[familiar] >= 3) {
      acquaintances.push(familiar);
    }
  }
// return([friends, acquaintances]);
  return(`Friends: ${friends.join(', ')}; Aquaintances: ${acquaintances.join(', ')}`);
}

console.log(strangerToFriend("Mark Mark Kelly Mark Dave Mark Bran Bran Mark Dave Peter Dave Cyrus Peter Peter Cyrus Kelly Kelly Kelly Kelly"));
