// You've heard about Magic Squares, right? A magic square is one big square split into separate squares (usually it is nine separate squares, but can be more), each containing a unique number. Each horizontal, vertical, and diagonal row MUST add up to the same number in order for it to be considered a magic square.

// Now, it's up to you to write a function that accepts a two-dimensional array and checks if it is a magic square or not.

// Examples:

// isMagic([
//   [6, 1, 8],
//   [7, 5, 3],
//   [2, 9, 4]
// ]) ➞ true


// isMagic([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]) ➞ false

const sum = row => row.reduce((a, b) => a + b);
const diag = lane => lane.map((row, i) => row[i]);
const rotate = arr =>
  arr.map((_, i) => arr.map((_, j) => arr[j][i]).reverse())
;
function isMagic (square) {
  const targetSum = square.length && sum(square[0]);
  const valid = a => sum(a) === targetSum;
  const rotated = rotate(square);
  const flat = square.flat();
  return new Set(flat).size === flat.length &&
    square.every(valid) &&
    rotated.every(valid) &&
    valid(diag(square)) &&
    valid(diag(rotated))
}

console.log(isMagic([
  [6, 1, 8],
  [7, 5, 3],
  [2, 9, 4]
]));
console.log(
  isMagic([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))
