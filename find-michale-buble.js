// The interviewer asked you to design a function to determine whether a company employee list includes Michale Buble.

function findMichaleBuble(list) {
  for(let i = 0; i < list.length; i++) {
    if(list[i] === "Michale Buble") {
      return true;
    }
  }
  return false;
}

console.log(findMichaleBuble(["John Legend", "Ryan Seacrest", "Michale Buble", "Dan Rathernot"]))
