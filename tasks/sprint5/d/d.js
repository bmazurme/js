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
  return !root ? '' : `${getLeft(root.left)}${root.value}${getLeft(root.right)}`;
}

function solution(root1, root2) {
  return getLeft(root1) === getLeft(root2);
}

function test() {
  let node1 = new CNode(1,  null,  null);
  let node2 = new CNode(2,  null,  null);
  let node3 = new CNode(3,  node1,  node2);

  let node4 = new CNode(1,  null,  null);
  let node5 = new CNode(2,  null,  null);
  let node6 = new CNode(3,  node4,  node5);
  
  console.assert(solution(node3, node6));
}
