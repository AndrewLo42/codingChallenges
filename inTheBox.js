// What's in the box!? Let's check first if there is actually something IN the box before we figure out WHAT it is...

// Check if the asterisk is inside of the box.The function you write must return true only if the asterisk is INSIDE - not if it is anywhere else on or outside of the box.

function inBox(box) {
  for(let i = 0; i < box.length; i++) {
    if (box[i].charAt(0) === '*' || box[i].charAt(box[i].length)) {
      return false;
    }
  }
  return true;
}

console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]));

console.log(inBox([
  "*####",
  "#  #",
  "#  #",
  "####"
]));
