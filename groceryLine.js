// You've just received intel that your local market has received a huge shipment of toilet paper! In desperate need, you rush out to the store. Upon arrival, you discover that there is an enormously large line of people waiting to get in to the store. You step into the queue and start to wait. While you wait, you being to think about data structures and come up with a challenge to keep you busy. Your mission: create a queue data structure. Remember, queues are FIFO - first in first out - in nature. Your queue should be a class that has the methods "add" and "remove". Adding to the queue should store an element until it is removed.

class Line {
  constructor() {
    this.line = [];
  }

  add(spot) {
    this.line.push(spot);
  }

  remove() {
    this.line.shift();
  }
  showQueue() {
    return this.line;
  }
}

let GroceryQueue = new Line();
for (let i = 1; i <= 7; i++) {
  GroceryQueue.add(i);
}
console.log(GroceryQueue.showQueue());
GroceryQueue.remove();
console.log(GroceryQueue.showQueue());
