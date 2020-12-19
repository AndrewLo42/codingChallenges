// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples

// The output expected would be:

// apples, pears
// grapes
// bananas

function solution(input, markers){
  return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))

//non regex
function solutionNoRegex(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}

console.log(solutionNoRegex("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))
