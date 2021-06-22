class Queue {
  // Array is used to implement a Queue
  items;
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }
  isEmpty() {
    return this.items.length == 0;
  }
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
}

export default Queue;
