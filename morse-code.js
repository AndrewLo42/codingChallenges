// You've been seeing strange series of flashing lights coming from a window in the house across your street. One night, it dawns on you - it's morse code! Quick - write a function that will decode the morse string and return the actual message.

let morseCode = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  "-.-.--": "!",
  "-....-": "-",
  "-..-.": "/",
  ".--.-.": "@",
  "-.--.": "(",
  "-.--.-": ")",
  " ": " ",
  "---...": ":",
  ".----.": "'",
}

function translateMorseCode(message){
  let converted = [];
  message.split("   ").map( (word) => {
    word.split(" ").map( (letter) => {
      converted.push(morseCode[letter]);
    });
    converted.push(" ");
  });
  return converted.join("");
}

console.log(translateMorseCode(".... . -.--   -.. ..- -.. ."));
console.log(translateMorseCode(".... . .-.. .-.. ---   - .... . .-. ."));
