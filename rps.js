function rps(choice) {
  let opponenet = Math.floor(Math.random() * 3 + 1);
  //rock = 1 paper = 2 scissors = 3
  if (choice === "scissors" && opponenet === 1) {
    return "lose";
  } else if (choice === "scissors" && opponenet === 2) {
    return "win"
  } else if (choice === "scissors" && opponenet === 3) {
    return "tie"
  } else if (choice === "paper" && opponenet === 3) {
    return "lose";
  } else if (choice === "paper" && opponenet === 2) {
    return "win"
  } else if (choice === "paper" && opponenet === 1) {
    return "tie"
  } else if (choice === "rock" && opponenet === 2) {
    return "lose";
  } else if (choice === "rock" && opponenet === 3) {
    return "win"
  } else if (choice === "rock" && opponenet === 1) {
    return "tie"
  }
}

console.log(rps("rock"));
