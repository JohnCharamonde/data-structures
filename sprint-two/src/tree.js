var Tree = function (value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};//Complexity O(1)

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value));
};//Complexity O(1)

treeMethods.contains = function (target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    let children = this.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};//Complexity O(n)