var Queue = function() {
  let someInstance = {};
  let storage = {};
  someInstance.storage = storage;
  someInstance.currentIndex = 0;
  someInstance.firstIndex = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.currentIndex] = value;
  this.currentIndex++;
  return this.storage;
};
queueMethods.dequeue = function() {
  let output = this.storage[this.firstIndex];
  delete this.storage[this.firstIndex];
  this.firstIndex++;
  return output;
};
queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
