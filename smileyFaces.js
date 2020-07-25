// Today you are tasked with calculating how much happiness there is.How can you do that ? By counting the number of smiley faces in an array of strings! You should write a function that accepts an array of strings and returns the number of smiley faces inside it.A smiley face is something that:

// Has eyes - eyes are: or;
// Has or doesn't have a nose. A nose is - or ~
// Has a mouth.A mouth is ) or D

function smiles(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;

}
console.log(smiles([":)", ";)", ":-)", ";-)", ";~)", ":~)", ":D", ";D", ":-D", ":~D", ";-D", ";~D"]))
