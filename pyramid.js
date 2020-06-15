// Traveling in Cairo, Egypt, with the Twitter executive team, you encounter thieves in the middle of a desert.These thieves heard about your travels from an informant a month prior to your trip, so they knew the great Twitter team was going to be there.It turns out that the thieves were former interviewees at Twitter who didn't get hired into the software engineering positions that they had applied for. With anger, they ask you the following question:

// Write a function that accepts a positive number X.

// The function should console log a pyramid shape with X levels using the #(Twitter's invention) character. Make sure the pyramid has spaces on both the left and right hand sides

// For example,

//   pyramid(1)

// '#'

// pyramid(2)

// ' # '

// '###'

// pyramid(3)

// ' #  '

// ' ### '

// '#####'

// If you get it right, the thieves will steal your money.If you get it wrong, the thieves will steal your money AND you will be forced to give them engineering jobs at Twitter.


function pyramid(layers) {
  printLayer(layers, 1);
}
function printLayer(layers, start) {
  if (layers === 0) {
    return layers;
  }
  printRow(start);
  printLayer(layers - 1, start + 1);
}
function printRow(layer) {
  let output = '';
  for (let i = 1; i <= layer; i++) {
    if (i === 1) {
      output += '#'
    } else {
      output += '##';
    }
  }
  console.log(output);
}

console.log(pyramid(4))


//non recursively

function doubleLoopPyramid(layers) {
  let output = '';
  for (let i = 1; i <= layers; i++) {
    for (let j = 1; j <= i; j++) {
      if(j === 1){
        output += '#'
      } else  {
        output += '##';
      }
    }
    console.log(output);
    output = '';
  }
}
console.log(doubleLoopPyramid(3))
