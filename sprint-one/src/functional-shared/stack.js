var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  let someInstance = {};
  let storage = {};
  _.extend(someInstance, stackMethods);
  someInstance.storage = storage;
  return someInstance;
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  push: function (value) {
    this.storage[Object.keys(this.storage).length] = value;
    return this.storage;
  },
  pop: function () {
    var output = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage[Object.keys(this.storage).length - 1];
    return output;
  },
  size: function () {
    return Object.keys(this.storage).length;
  }
};