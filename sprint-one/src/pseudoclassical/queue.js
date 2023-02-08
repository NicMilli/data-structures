var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.top = 0;
  this.bottom = 1;
};

Queue.prototype.enqueue = function(value) {
  this.top++;
  this.storage[this.top] = value;
  return value;
};

Queue.prototype.dequeue = function() {
  var popped = this.storage[this.bottom];
  delete this.storage[this.bottom];
  this.bottom++;
  return popped;
};

Queue.prototype.size = function() {
  var length = this.top - this.bottom + 1;
  return length > 0 ? length : 0;
};