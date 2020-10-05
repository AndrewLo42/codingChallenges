// you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers(Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example(just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function findMiddleElement (inputArray) {
 if (inputArray[0] > inputArray[1]) {
   if(inputArray[1] > inputArray[2]) {
     return 1;
   } else if (inputArray[0] > inputArray[2]) {
     return 2;
   } else {
     return 0;
   }
 } else {
   if(inputArray[0] > inputArray[2]) {
     return 0;
   } else if(inputArray[1] > inputArray[2]) {
     return 2;
   } else {
     return 1;
   }
 }
}

console.log(findMiddleElement([1,3,2]));
