// You've been practicing for an upcoming poker tournament. In terms of how to play the game, you're all set.But don't you want to impress everyone with some fancy deck shuffling? You can practice by creating a function that shuffles an array of items. The values can be whatever you would like - feel free to replicate an entire card deck if you wish!

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log(shuffleArray(["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]))
