// We'd love to share one of the interview questions asked during some bootcamp students' first round interview at a Korean tech company.She was given one - dimensional points array L = [1, 3, 4, 8, 13, 17, 20].The interviewer asked her to find a pair of the shortest distances, given the one - dimensional points. (Assume that the array of points is all sorted.).Can you ace the interview question ?

function shortestDistance(arr) {
  let pair = [];
  let range = arr[1] - arr[0];
  for (let i = 0; i < arr.length-1; i++) {
    if ((arr[i + 1] - arr[i]) < range) {
      range = arr[i+1] - arr[i];
      pair = [arr[i], arr[i+1]];
    }
  }
  return pair;
}

console.log(shortestDistance([1, 3, 4, 8, 13, 17, 20]))
