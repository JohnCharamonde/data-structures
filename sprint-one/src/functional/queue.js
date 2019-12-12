var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var currentIndex = 0;
  var firstIndex = 0;
  someInstance.enqueue = function(value) {
    // add value to key at end of storage object



    storage[currentIndex] = value;
    currentIndex++;
    // return storage
    return storage;
  };

  someInstance.dequeue = function() {
    // declare variable for output
    var output = storage[firstIndex];
    // remove key value pair from beginning of object
    delete storage[firstIndex];
    firstIndex++;
    // return value that was removed
    //debugger;
    return output;
  };

  someInstance.size = function() {
    // return size of storage object
    return Object.keys(storage).length;
  };

  return someInstance;
};


