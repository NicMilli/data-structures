class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.top = 0;
    this.bottom = 1;
  }

  enqueue(value) {
    this.top++;
    this.storage[this.top] = value;
    return value;
  }

  dequeue() {
    var popped = this.storage[this.bottom];
    delete this.storage[this.bottom];
    this.bottom++;
    return popped;
  }

  size() {
    var length = this.top - this.bottom + 1;
    return length > 0 ? length : 0;
  }

}
