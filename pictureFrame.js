// ou might want to decorate your living room with eccentric picture frames that you can create using your coding skills.You wish to build a machine that prints out a frame with the provided width, height, and any character as an input.For example, if you were to build a 4 x 4 frame with the # symbol, your frame would look like:

// [["####"], ["# #"], ["# #"], ["####"]]

// In this case, for all the enclosed brackets, there should 4 characters printed, and only the start and end of the bracket should have the # character printed - the remaining two characters should be two spaces.If the number were five, for example, we should display the two brackets each started and ending with # symbols and with three spaces in between.

// Since you do not own any small photos, you need to make sure that your machine won't make a frame if the width or height is 3 or less.

function pictureFrame(height, width, content) {

  let frame = [[],[],[],[]];
  let finalFrame = [];
  for(let i = 0; i < width; i++) {
    frame[0].push(`${content}`);
    frame[3].push(`${content}`);
  }
  for(let hidx = 0; hidx < height + 1; hidx++) {
    if (hidx === 0 || hidx === height) {
      frame[1].push(`${content}`);
      frame[2].push(`${content}`);
    } else {
      frame[1].push(' ');
      frame[2].push(' ');
    }
  }
  frame.forEach(border => finalFrame.push(([border.join('')])));
  return finalFrame;
}
console.log(pictureFrame(4,4,"*"));
