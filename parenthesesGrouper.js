// For some odd reason, your computer science professor has become obsessed with parentheses - she probably spent too much time coding these days...In any case, she wants you to write a function that will turn each group of parentheses in a string into separate groups - these groups should be balanced.

// For example:

// group("()()()") ➞["()", "()", "()"]

// group("((())())(()(()()))") ➞["((())())", "(()(()()))"]

function group(parens){
  let splitParen = parens.split("");
  let finalGroup = [];
  let currentGroup = "";
  let openCount = 0;
  for(let i = 0; i < splitParen.length; i++) {
    if(splitParen[i] === "(") {
      currentGroup += splitParen[i];
      openCount++;
    } else {
      currentGroup += splitParen[i];
      if(openCount === 1) {
        finalGroup.push(currentGroup);
        currentGroup = "";
        openCount = 0;
      } else {
        openCount--;
      }
    }
  }
  return finalGroup;
}
console.log(group("()()()"));
console.log(group("((())())(()(()()))"));
