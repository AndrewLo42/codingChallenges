function rotateImage(a) {
  let rotated = [];

  for (let i = 0; i < a.length; i++) {
    let rotRow = a.map(row => row[i]).reverse();
    rotated.push(rotRow);
  }
  return rotated;
}


//You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
