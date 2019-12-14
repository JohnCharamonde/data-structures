// Instantiate a new graph
var Graph = function () {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  node = { value: node, edges: [] };
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      for (let j = 0; j < this.nodes[i].edges.length; j++) {
        this.removeEdge(this.nodes[i].edges[j].value, node);
      }
      this.nodes.splice(i, 1);
      return;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      for (let j = 0; j < this.nodes[i].edges.length; j++) {
        if (this.nodes[i].edges[j].value === toNode) {
          return true;
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    return;
  }
  let fromIndex = null;
  let toIndex = null;
  for (let i = 0; i < this.nodes.length || (fromIndex && toIndex); i++) {
    if (this.nodes[i].value === fromNode) {
      fromIndex = i;
    }
    if (this.nodes[i].value === toNode) {
      toIndex = i;
    }
  }
  this.nodes[fromIndex].edges.push(this.nodes[toIndex]);
  this.nodes[toIndex].edges.push(this.nodes[fromIndex]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  let fromIndex = null;
  let toIndex = null;
  for (let i = 0; i < this.nodes.length || (fromIndex && toIndex); i++) {
    if (this.nodes[i].value === fromNode) {
      fromIndex = i;
    }
    if (this.nodes[i].value === toNode) {
      toIndex = i;
    }
  }
  for (let i = 0; i < this.nodes[fromIndex].edges.length; i++) {
    if (this.nodes[fromIndex].edges[i].value === toNode) {
      this.nodes[fromIndex].edges.splice(i, 1);
      break;
    }
  }
  for (let i = 0; i < this.nodes[toIndex].edges.length; i++) {
    if (this.nodes[toIndex].edges[i].value === fromNode) {
      this.nodes[toIndex].edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (let i = 0; i < this.nodes.length; i++) {
    cb.call(this, this.nodes[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


