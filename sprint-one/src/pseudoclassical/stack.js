var Stack = function () {
  this.length = 0;
  this.storage = {};
};

Stack.prototype.push = function (value) {
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function () {
  if (this.length) {
    var deleted = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return deleted;
  }
};

Stack.prototype.size = function () {
  return this.length;
};