var Stack = function () {
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.length = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.length] = value;
  this.length++;
  return this.storage;
};

stackMethods.pop = function () {
  if (this.length) {
    this.deleted = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return this.deleted;
  }
};

stackMethods.size = function () {
  return this.length;
};
