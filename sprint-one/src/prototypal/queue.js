var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.length = 0;
  someInstance.currentIndex = 0;
  someInstance.firstIndex = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.currentIndex] = value;
  this.currentIndex++;
  this.length++;
  return this.length;
};

queueMethods.dequeue = function () {
  if (this.length) {
    this.deleted = this.storage[this.firstIndex];
    delete this.storage[this.firstIndex];
    this.firstIndex++;
    this.length--;
    return this.deleted;
  }
};

queueMethods.size = function () {
  return this.length;
};
