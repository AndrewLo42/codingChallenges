function firstNotRepeatingCharacter(s) {
  const split = s.split('');
  const dups = {};
  const banned = {};
  for (let i = 0; i < split.length; i++) {
    if (dups[split[i]] !== undefined) {
      delete dups[split[i]];
    } else {
      if (banned[split[i]] === undefined) {
        banned[split[i]] = split[i];
        dups[split[i]] = split[i];
      }
    }
  }
  if (Object.keys(dups).length > 0) {
    return Object.keys(dups)[0];
  }
  return '_';
}
/*
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
*/
