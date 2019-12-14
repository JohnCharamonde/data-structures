var Set = function () {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  if (!this.contains(item)) {
    this.storage.push(item);
  }
};
// complexity O(n)

setPrototype.contains = function (item) {
  for (let i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      return true;
    }
  }
  return false;
};
//compexity O(n)

setPrototype.remove = function (item) {
  for (let i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      this.storage.splice(i, 1);
      break;
    }
  }
};
// complexity: O(n)
/*
 * Complexity: What is the time complexity of the above functions?
 */
