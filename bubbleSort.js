//bubblesort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j+1]) {
        let temporary = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temporary;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1,4,3,2]))
