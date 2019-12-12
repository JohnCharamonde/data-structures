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



// Work within the src/functional-shared/ folder
// Create an object that holds the methods that will be shared by all instances of the class
// Use the keyword this in your methods
// Use _.extend  to copy the methods onto the instance


// https://tylermcginnis.com/beginners-guide-to-javascript-prototype/

// const animalMethods = {
//   eat(amount) {
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
//   },
//   sleep(length) {
//     console.log(`${this.name} is sleeping.`)
//     this.energy += length
//   },
//   play(length) {
//     console.log(`${this.name} is playing.`)
//     this.energy -= length
//   }
// }

// function Animal (name, energy) {
//   let animal = {}
//   animal.name = name
//   animal.energy = energy
//   animal.eat = animalMethods.eat
//   animal.sleep = animalMethods.sleep
//   animal.play = animalMethods.play

//   return animal
// }

// const leo = Animal('Leo', 7)
// const snoop = Animal('Snoop', 10)
