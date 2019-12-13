var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    let temp;
    if (list.head) {
      temp = list.tail;
    }
    list.tail = Node(value);
    if (temp) {
      temp.next = list.tail;
    } else {
      list.head = list.tail;
    }
  };// Complexity is O(1)

  list.removeHead = function () {
    if (list.head) {
      let deleted = list.head;
      delete list.head;
      list.head = deleted.next;
      return deleted.value;
    }
  };// Complexity is O(1)

  list.contains = function (target) {
    // evaluate list.head.value against target
    // evaluate list.head.next.value against target
    for (currentNode = list.head; currentNode !== null; currentNode = currentNode.next) {
      if (currentNode.value === target) {
        return true;
      }
    }
    return false;
  };//Complexity is O(n)

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */