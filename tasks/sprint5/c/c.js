if (process.env.REMOTE_JUDGE !== 'true') {
  class CNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
}

function getLeft(root) {
  return !root ? '' : `${getLeft(root.left)}${root.value}${getRight(root.right)}`;
}

function getRight(root) {
  return !root ? '' : `${getRight(root.right)}${root.value}${getLeft(root.left)}`;
}

function solution(root) {
  return getLeft(root.left) === getRight(root.right);
}

function test() {
  let node1 = new CNode(3,  null,  null);
  let node2 = new CNode(4,  null,  null);
  let node3 = new CNode(4,  null,  null);
  let node4 = new CNode(3,  null,  null);
  let node5 = new CNode(2, node1, node2);
  let node6 = new CNode(2, node3, node4);
  let node7 = new CNode(1, node5, node6);
  console.assert(solution(node7));
}