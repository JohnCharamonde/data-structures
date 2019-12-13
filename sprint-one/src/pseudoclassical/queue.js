var Queue = function () {
  this.currentIndex = 0;
  this.firstIndex = 0;
  this.storage = {};
  this.length = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.currentIndex] = value;
  this.currentIndex++;
  this.length++;
  return this.length;
};

Queue.prototype.dequeue = function () {
  if (this.length) {
    this.deleted = this.storage[this.firstIndex];
    delete this.storage[this.firstIndex];
    this.firstIndex++;
    this.length--;
    return this.deleted;
  }
};

Queue.prototype.size = function () {
  return this.length;
};