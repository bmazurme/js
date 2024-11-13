if (process.env.REMOTE_JUDGE !== 'true') {
  class CNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
}

function find(node) {
  if (!node) {
    return 0;
  }

  const left = find(node.left);

  if (left === -1) {
    return -1;
  }

  const right = find(node.right);

  if (right === -1) {
    return -1;
  }

  if (Math.abs(left - right) > 1) {
    return -1;
  }

  return Math.max(left, right) + 1;
}

function solution(root) {
  return find(root) !== -1;
}

function test() {
  let node1 = new CNode(1);
  let node2 = new CNode(-5);
  let node3 = new CNode(3);
  node3.left = node1;
  node3.right = node2;
  let node4 = new CNode(10);
  let node5 = new CNode(2);
  node5.left = node3;
  node5.right = node4;
  console.assert(solution(node5));
}
