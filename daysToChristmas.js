// Today's prompt is simple - write a function to determine how many days are left until Christmas!

function daysToChristmas(){
  let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  let christmasDay = new Date(new Date().getFullYear(), 11, 25);
  let today = new Date();
  return `${Math.round(Math.abs((today - christmasDay) / oneDay))} days to Christmas!`;
}

console.log(daysToChristmas());
