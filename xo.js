// Write a function that receives a string and checks if that string has equal numbers of 'x's and 'o's.If it does, return true.Otherwise, return false.If there are no 'x's or 'o's, return true.

function equalXO(str){
  let xs=0;
  let os=0;
  let splitStr = str.split("");
  for(let i = 0; i < str.length; i++) {
    if(splitStr[i].toLowerCase() === 'x'){
      xs++;
    } else if(splitStr[i].toLowerCase() === "o"){
      os++;
    }
  }
  if(xs === os){
    return true;
  }
  return false;
}
console.log(equalXO("asdf"));
console.log(equalXO("xoo"));
console.log(equalXO("xoxo"));
