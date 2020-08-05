// Sometimes, you may be too lazy to add a comma between 0s to separate every thousand.If you have your own converter that will just print out a number with commas in right position you'd be happy! Today, write a function that converts numeric strings to comma-separated strings. ※ However, do not use the money conversion library supported by the programming language.

// For example, 2000 -- > 2, 000 | -1224.10 -- > -1, 224.10

function commasInThousands(num){
  var parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

console.log(commasInThousands(1000))
