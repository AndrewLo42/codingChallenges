// You've been hired at a new company, and you earn one penny on your first day. However, for each sequential day of work, your base amount doubles. This mean that you will earn two pennies on your second day and four pennies on your third day. Write a function that, give a number of days that you provide, will return the total number of cumulative pennies that you will have.

function salaryDoubler(days) {
  let salary = null;
  for(let i = 0; i < days; i++) {
    salary = days * 2;
  }
  return salary;
}

console.log(salaryDoubler(3));
