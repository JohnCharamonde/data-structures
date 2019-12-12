var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function (value) {
    key = Object.keys(storage).length;
    storage[key] = value;
    return Object.keys(storage).length;
  };

  someInstance.pop = function () {
    var output = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1];
    return output;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };
  return someInstance;
};
