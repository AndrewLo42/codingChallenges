//Robin team recently interviewed a former software engineer at Amazon and was able to get some of the actual interview questions asked in the last 5 years.

//You are given an array of[j1, j2, j3, j4, j5, jn …, k1, k2, k3, k4, k5, kn], how would you arrange the given array to[j1, k1, j2, k2, …]?

function sortBySecond(arr){
  return arr.sort((a, b) => {
    return a.charAt(1) - b.charAt(1);
  });
}

console.log(sortBySecond(["j1","j2", "j3", "j4", "j5", "k1", "k2", "k3", "k4", "k5"]));
