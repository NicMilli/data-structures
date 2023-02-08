var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(queueMethods);
  newInstance.storage = {};
  newInstance.top = 0;
  newInstance.bottom = 1;
  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.top++;
  this.storage[this.top] = value;
  return value;
};

queueMethods.dequeue = function() {
  var popped = this.storage[this.bottom];
  delete this.storage[this.bottom];
  this.bottom++;
  return popped;
};

queueMethods.size = function() {
  var length = this.top - this.bottom + 1;
  return length > 0 ? length : 0;
};
