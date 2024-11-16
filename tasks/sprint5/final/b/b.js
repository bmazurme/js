// https://contest.yandex.ru/contest/24810/run-report/125094859/

if (process.env.REMOTE_JUDGE !== 'true') {
  class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
}

function findLeftBottomNode(node) {
  return node.left ? findLeftBottomNode(node.left) : node;
}

function remove(node, key) {
  if (!node) {
    return null;
  }

  if (key < node.value) {
    node.left = remove(node.left, key);
  } else if (key > node.value) {
    node.right = remove(node.right, key);
  } else {
    if (!node.left && !node.right) {
      return null;
    }

    if (!node.left) {
      return node.right;
    }

    if (!node.right) {
      return node.left;
    }

    const minNode = findMin(node.right);
    node.value = minNode.value;
    node.right = remove(node.right, minNode.value);
  }

  return node;
}

function test() {
  const node1 = new Node(2, null, null);
  const node2 = new Node(3, node1, null);
  const node3 = new Node(1, null, node2);
  const node4 = new Node(6, null, null);
  const node5 = new Node(8, node4, null);
  const node6 = new Node(10, node5, null);
  const node7 = new Node(5, node3, node6);
  const newHead = remove(node7, 2);
  console.assert(newHead.value === 5);
  console.assert(newHead.right === node5);
  console.assert(newHead.right.value === 8);
}

test();
