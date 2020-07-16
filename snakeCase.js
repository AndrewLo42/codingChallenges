// Some programming languages like Python prefers Pothole case over Camel case.

// For instance: in JavaScript, you’d write yellowMonkey but in Python you’d write yellow_monkey.In case you forget, you should just build a function where you convert any string in Camel case to Pothole case.

function snakeCase(name) {
  let splitName = name.split('');
  for (let i = 0; i < splitName.length; i++) {
    if (splitName[i] === splitName[i].toUpperCase()) {
      splitName[i] = splitName[i].toLowerCase();
      splitName.splice(i,0,"_");
    }
  }
  return splitName.join('');
}

console.log(snakeCase("yellowMonkey"));
