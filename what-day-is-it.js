// Do you ever get confused when someone says "In 5 days from now..." ? Which day will it be ? Write a function that takes in an array of days(like["Monday", "Wednesday", "Thursday"]) and a single number n, and return an array of what day it will be in n number of days.For the example provided above, if we asked what day it would be in 3 days, we would return ["Thursday", "Saturday", "Sunday"]

function daysAdvance(days, n) {
  let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let result = [];
  for (let i = 0; i < days.length; i++) {
    let currentDay = week.indexOf(days[i]);
    let daysAfter = currentDay + n;

    if(daysAfter >= 7) {
      result.push(week[daysAfter - 7]);
    } else {
      result.push(week[daysAfter])
    }
  }
  return result;
}

console.log(daysAdvance(["Monday", "Wednesday", "Thursday", "Sunday"], 3));
