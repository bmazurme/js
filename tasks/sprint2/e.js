if (process.env.REMOTE_JUDGE !== 'true') {
  class Node {
    constructor(value = null, next = null, prev = null) {
      this.value = value;
      this.next = next;
      this.prev = prev;
    }
  }
}

function solution(node) {
  if (!node.next) {
    return node;
  }
  let current = node;
  let newNode = new Node(current.value);
  current = current.next;

  while (current) {
    newNode.prev = new Node(current.value);
    newNode.prev.next = newNode;
    newNode = newNode.prev;
    current = current.next;
  }

  return newNode;
}

function getNodeByIndex(node, index) {
  while (index) {
    node = node.next;
    index -= 1;
  }

  return node;
}

function test() {
  var node3 = new Node('node3');
  var node2 = new Node('node2', node3);
  var node1 = new Node('node1', node2);
  var node0 = new Node('node0', node1);
  node1.prev = node0;
  node2.prev = node1;
  node3.prev = node2;
  var newHead = solution(node0);

  // console.log(getNodeByIndex(newHead, 0).prev);
  // console.log(getNodeByIndex(newHead, 1).prev.value);
  // console.log(getNodeByIndex(newHead, 2).prev.value);
  // console.log(getNodeByIndex(newHead, 3).prev.value);

  // console.log(newHead)
  /*
  result is newHead === node3
  node0.prev === node1
  node1.next === node0
  node1.prev === node2
  node2.next === node1
  node2.prev === node3
  node3.next === node2
  */
}
test();