// What IS a date ? Can your code recognize a date ? Robin challenges you to write a function that determines if an input is a date object or not.

function isDate(date) {

  return (date instanceof Date && !isNaN(date.valueOf()));
}


console.log(isDate("October 13, 2014 11:13:00"));

console.log(isDate(new Date(86400000)));

console.log(isDate(new Date(99, 5, 24, 11, 33, 30, 0)));

console.log(isDate([1, 2, 4, 0]));
