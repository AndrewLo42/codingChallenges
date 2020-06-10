// During your second round interview with a senior engineer, she asks you to determine the time complexity for the following function:

  const countUpAndDown = (n) => {

    console.log("You are going up!");

    for (let i = 1; i < n; i++) { console.log(i); }

    console.log("At the top!\nGoing down...");

    for (let j = n - 1; j >= 0; j--) { console.log(j); }

    console.log("Back down. Bye!");

  }

// You have 5 minutes to think about it and tell her what the time complexity is and why ?

O(n) + O(n) = 2 * O(n) = O(n)
Thus, the answer is O(n)
// It does not matter how many non nested loops do you have(if this number is a constant and does not depends on n) the complexity would be linear and would equal to the maximum number of iterations in the loop.
