var Stack = function () {
  let someInstance = {};
  let storage = {};
  _.extend(someInstance, stackMethods);
  someInstance.storage = storage;
  someInstance.length = 0;
  return someInstance;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.length] = value;
    this.length++;
    return this.storage;
  },
  pop: function () {
    if (this.length) {
      var output = this.storage[this.length - 1];
      delete this.storage[this.length - 1];
      this.length--;
      return output;
    }
  },
  size: function () {
    return this.length;
  }
};