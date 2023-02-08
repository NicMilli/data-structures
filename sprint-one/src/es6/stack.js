class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.top = 0;
    this.storage = {};
  }

  push(value) {
    this.top++;
    this.storage[this.top] = value;
    return value;
  }

  pop() {
    var popped = this.storage[this.top];
    delete this.storage[this.top];
    this.top > 0 ? this.top-- : this.top = 0;
    return popped;
  }

  size() {
    return this.top;
  }

}