// Let's have some review: it is up to you to create your own queue data structure. Queues are FIFO - first in first out - in nature. Your queue should be a class that has the methods "add" and "remove". Adding to the queue should store an element until it is removed.

class Queue{
  constructor(){
    this.stack = []
  }

  add(element) {
    this.stack.push(element);
  }
  remove(element) {
    this.stack.shift(element);
  }
  show(){
    return this.stack;
  }
}

let newLine = new Queue();
newLine.add(1);
newLine.add(2);
newLine.remove();
newLine.add(3);
newLine.add(4);
newLine.remove();
newLine.add(5);
console.log(newLine.show())
