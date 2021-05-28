function encode(str) {
    let encodedStr = "";
    let result = [];
    let newStr = str.split(" ").join("");
    let row = Math.floor(Math.sqrt(newStr.length));
    let col = Math.ceil(Math.sqrt(newStr.length));
    let inner = [];
    for(let i = 0; i < str.length; i++) {
        inner.push(str[i]);
        if(inner.length === col) {
            result.push(inner);
            inner = [];
        }
    }

    if(inner.length) {
        result.push(inner)
    }
    for(let j = 0; j < col; j++) {
        for(let resultIdx = 0; resultIdx < result.length; resultIdx++) {
          if(result[resultIdx][j]) {
            encodedStr += result[resultIdx][j];
          }
        }
        if(j < col - 1){
            encodedStr += " ";
        }

    }

    return encodedStr;

}

console.log(encode("haveaniceday")) //hae and via ecy
console.log(encode("chillout")) //clu hlt io
console.log(encode("feedthedog")) //fto ehg ee dd
