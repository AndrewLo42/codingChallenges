// Do you remember learning your multiplication tables ? For some, it was really easy.For others, they still have to perform multiplication using odd tricks.Today, we're all lucky, because we can practice by writing code that will print all the multiplication tables from 1 to X. The format could look something like this: '1 x 1 = 1' . Have fun taking a trip down memory lane!

function multiplicationTable(num) {
  if(num < 1) {
    return ("invalid number for the table")
  }
  for (let i = 1; i <= num; i++) {
    for (let mults = 1; mults <= 9; mults++) {
      console.log(`${i} * ${mults} = ${i * mults}`);
    }
  }
}

console.log(multiplicationTable(3))
