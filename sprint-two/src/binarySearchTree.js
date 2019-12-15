var BinarySearchTree = function (value) {
  var thisTree = Object.create(BinarySearchTree.prototype);
  thisTree.value = value;
  thisTree.right = null;
  thisTree.left = null;
  thisTree.allNodes = [];
  return thisTree;
};
// binarySearchTree(5);
// binarySearchTree.insert(2);
// binarySearchTree.insert(3);
// binarySearchTree.insert(7);
// binarySearchTree.insert(6);
// expect(binarySearchTree.left.right.value).to.equal(3);
// expect(binarySearchTree.right.left.value).to.equal(6);

BinarySearchTree.prototype.insert = function (value) {
  // create our tempArray - all the nodes

  var allNodes = this.getAllNodes(this, true);
  //allNodes.sort();

  let node = BinarySearchTree(value);


  if (value < this.value) {
    if (!this.left) {
      this.left = node;
    } else {
      this.left.insert(value);
    }

  } else if (value > this.value) {
    if (!this.right) {
      this.right = node;
    } else {
      this.right.insert(value);
    }
  }

};
BinarySearchTree.prototype.resetAllNodes = function () {
  this.allNodes = [];
};
BinarySearchTree.prototype.getAllNodes = function (node, returnOnlyValues) {
  this.allNodes.push(returnOnlyValues ? node.value : node);
  if (node.left) {
    // allNodes.push(returnOnlyValues ? node.left.value : node.left);
    this.allNodes.concat(this.getAllNodes(node.left, returnOnlyValues));
  }
  if (node.right) {
    // allNodes.push(returnOnlyValues ? node.right.value : node.right);
    this.allNodes.concat(this.getAllNodes(node.right, returnOnlyValues));
  }
  return this.allNodes;
};

BinarySearchTree.prototype.contains = function (value) {
  this.resetAllNodes();
  var output = this.getAllNodes(this, true);
  output = output.includes(value);
  return output;
};

BinarySearchTree.prototype.depthFirstLog = function (func) {
  this.resetAllNodes();
  let allNodes = this.getAllNodes(this, false);
  for (let i = 0; i < this.allNodes.length; i++) {
    func(allNodes[i].value);
  }
};
