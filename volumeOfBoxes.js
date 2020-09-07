// It's almost moving day! You have various boxes of different sizes and want to know the total volume of all the boxes together. Why don't you write a function that calculates the volume ? The function will receive multiple arrays - each array will represent a box.The arrays will have three elements each: length, width, and height.Good luck!

function boxesVolume(boxes) {
  let total = 0;
  for(let i = 0; i < boxes.length; i++) {
    let volume = 1;
    for(let j = 0; j < boxes[i].length; j++) {
      volume = volume * boxes[i][j];
    }
    total += volume;
  }
  return total;
}

console.log(boxesVolume([[3,4,5], [1,1,1], [2,2,2]]))
