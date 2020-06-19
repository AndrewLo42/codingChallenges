// Being locked in during the pandemic, you have somehow managed to watch everything on Netflix, Hulu, and probably everything on Youtube as well.You decide to listen to your favorite radio station...wait...do you even HAVE a favorite radio station ? Anyways...the radio host suddenly announces that every caller to dial in within the next ten minutes will win a prize! You have no idea what the prize is, so you decide to dial this number: "888-YOU-RANG ".Unfortunately, you don't remember which letters correspond to which numbers. Why don't you write a function that will take a phone number with letters and return it, formatted, with all numbers.It could look something like this:

// formatPhone("888-YOU-RANG") will return 888 - 968 - 7264

// Use this chart for reference:

//   0: none

// 1: none

// 2: ABC

// 3: DEF

// 4: GHI

// 5: JKL

// 6: MNO

// 7: PQRS

// 8: TUV

// 9: WXYZ
function parsePhone(phoneNumber) {
  let newNumber = phoneNumber.toLowerCase();
  newNumber = newNumber.replace(/[a-c]/g, ([i]) => '2');
  newNumber = newNumber.replace(/[d-f]/g, ([i]) => '3');
  newNumber = newNumber.replace(/[g-i]/g, ([i]) => '4');
  newNumber = newNumber.replace(/[j-l]/g, ([i]) => '5');
  newNumber = newNumber.replace(/[m-o]/g, ([i]) => '6');
  newNumber = newNumber.replace(/[p-s]/g, ([i]) => '7');
  newNumber = newNumber.replace(/[t-v]/g, ([i]) => '8');
  newNumber = newNumber.replace(/[w-z]/g, ([i]) => '9');
  return newNumber;
}
console.log(parsePhone("888-YOU-RANG"));
