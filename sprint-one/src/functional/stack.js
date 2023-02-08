var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var top = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    top++;
    storage[top] = value;
  };

  someInstance.pop = function() {
    var popped = storage[top];
    delete storage[top];
    top !== 0 ? top-- : top;
    return popped;
  };

  someInstance.size = function() {
    return top;
  };

  return someInstance;
};
