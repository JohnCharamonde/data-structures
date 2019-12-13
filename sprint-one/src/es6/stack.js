class Stack {
  constructor() {
    this.storage = {};
    this.length = 0;

  }

  push(value) {
    this.storage[this.length] = value;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length) {
      this.deleted = this.storage[this.length - 1];
      delete this.storage[this.length - 1];
      this.length--;
      return this.deleted;
    }
  }

  size() {
    return this.length;
  }
}