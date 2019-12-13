class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.currentIndex = 0;
    this.firstIndex = 0;
    this.length = 0;
    this.storage = {};
  }
  enqueue (value) {
    this.storage[this.currentIndex] = value;
    this.length++;
    this.currentIndex++;
    return this.length;
  }
  dequeue () {
    if (this.length) {
      this.deleted = this.storage[this.firstIndex];
      delete this.storage[this.firstIndex];
      this.firstIndex++;
      this.length--;
      return this.deleted;
    }
  }
  size () {
    return this.length;
  }
}
