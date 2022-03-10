/*
Tap code is a way to communicate using a series of taps and pauses for each letter. In this kata, we will use dots . for the taps and whitespaces for the pauses.

The number of taps needed for each letter matches its coordinates in the following polybius square (note the c/k position). Then you "tap" the row, a pause, then the column. Each letter is separated from others with a pause too.

   1  2  3  4  5
1  A  B C\K D  E
2  F  G  H  I  J
3  L  M  N  O  P
4  Q  R  S  T  U
5  V  W  X  Y  Z
Input:
A lowercase string of a single word (no whitespaces or punctuation, only letters).

Output:
The encoded string as taps and pauses.

Examples
text = "dot"
  "D" = (1, 4) = ". ...."
  "O" = (3, 4) = "... ...."
  "T" = (4, 4) = ".... ...."

output: ". .... ... .... .... ...."
*/

function tapCodeTranslation(text) {
  let codex = [['a', 'b', 'c', 'd', 'e'],
  ['f', 'g', 'h', 'i', 'j'],
  ['l', 'm', 'n', 'o', 'p'],
  ['q', 'r', 's', 't', 'u'],
  ['v', 'w', 'x', 'y', 'z']]
  let splitStr = text.split('');
  let tapCode = '';
  let findCoord = (letter) => {
    if (letter === 'k') {
      letter = 'c'
    }
    for (let i = 0; i < codex.length; i++) {
      let innerIdx = codex[i].indexOf(letter) + 1;
      if (innerIdx !== 0) {
        return [i + 1, innerIdx]
      }
    }
  }
  for (let i = 0; i < splitStr.length; i++) {
    let letterCoord = findCoord(splitStr[i]);
    let firstDot = '';
    let secondDot = '';
    for (let j = 1; j <= letterCoord[0]; j++) {
      firstDot += '.'
    }
    for (let k = 1; k <= letterCoord[1]; k++) {
      secondDot += '.'
    }
    let fullTaps = firstDot + " " + secondDot;
    if (i === 0) {
      tapCode += fullTaps
    } else {
      tapCode += " " + fullTaps
    }
  }
  return tapCode
}
