var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);
  newInstance.storage = {};
  newInstance.top = 0;
  return newInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.top++;
  this.storage[this.top] = value;
  return value;
};

stackMethods.pop = function() {
  var popped = this.storage[this.top];
  delete this.storage[this.top];
  this.top > 0 ? this.top-- : this.top = 0;
  return popped;
};

stackMethods.size = function() {
  return this.top;
};
