if (process.env.REMOTE_JUDGE !== 'true') {
  class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
}

function insert(node, key) {
  if (node.value > key) {
    if (node.left) {
      insert(node.left, key);
    } else {
      node.left = new Node(key);
    }
  }

  if (node.value <= key) {
    if (node.right) {
      insert(node.right, key);
    } else {
      node.right = new Node(key);
    }
  }

  return node;
}

function test() {
  let node1 = new Node(7, null, null);
  let node2 = new Node(8, node1, null);
  let node3 = new Node(7, null, node2);
  let newHead = insert(node3, 6);
  console.assert(newHead === node3);
  console.assert(newHead.left.value === 6);
}
