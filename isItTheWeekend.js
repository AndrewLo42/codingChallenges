// Who doesn't love the weekend!? Can you write a function that, given a date in the following format, returns whether that date is a weekend or not? FORMAT: Oct 11, 2010
function isWeekend(date) {
  var dt = new Date(date);

  if (dt.getDay() == 6 || dt.getDay() == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isWeekend("Sept 12, 2020"))
