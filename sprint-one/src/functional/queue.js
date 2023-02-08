var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var top = 0;
  var bottom = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    top++;
    storage[top] = value;
    return value;
  };

  someInstance.dequeue = function() {
    var popped = storage[bottom];
    delete storage[bottom];
    bottom++;
    return popped;
  };

  someInstance.size = function() {
    var length = top - bottom + 1;
    return length > 0 ? length : 0;
  };

  return someInstance;
};
