// How many mores days are left until you think the COVID - 19 pandemic will end ? Why not write a function to tell you so you don't have to calculate it yourself! Your function should be structured like below - it should take two dates and return the number of days between the two
function daysToFreedom(date1, date2) {
  let day1 = new Date(date1);
  let day2 = new Date(date2);
  let timeDiff = day2.getTime() - day1.getTime();
  let daysDiff = timeDiff / (1000 * 3600 * 24);
  return daysDiff;
}

console.log(daysToFreedom("6/20/2020", "6/25/2020"));
