var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.top = 0;
};

Stack.prototype.push = function(value) {
  this.top++;
  this.storage[this.top] = value;
  return value;
};

Stack.prototype.pop = function() {
  var popped = this.storage[this.top];
  delete this.storage[this.top];
  this.top > 0 ? this.top-- : this.top = 0;
  return popped;
};

Stack.prototype.size = function() {
  return this.top;
};


