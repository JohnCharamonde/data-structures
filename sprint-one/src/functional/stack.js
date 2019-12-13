var Stack = function () {
  var someInstance = {};
  var storage = {};
  var length = 0;

  someInstance.push = function (value) {
    key = length;
    storage[key] = value;
    length++;
    return length;
  };

  someInstance.pop = function () {
    if (length) {
      var deleted = storage[length - 1];
      delete storage[length - 1];
      length--;
      return deleted;
    }
  };

  someInstance.size = function () {
    return length;
  };
  return someInstance;
};
