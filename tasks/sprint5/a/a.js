if (process.env.REMOTE_JUDGE !== 'true') {
  class CNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
}

function solution(root, res = -Infinity) {
  res = root.value > res ? root.value : res;

  if (root.left !== null) {
    res = solution(root.left, res);
  }

  if (root.right !== null) {
    res = solution(root.right, res);
  }

  return res;
}

function test() {
  let node1 = new CNode(1);
  let node2 = new CNode(-5);
  let node3 = new CNode(3);
  node3.left = node1;
  node3.right = node2;
  let node4 = new CNode(2);
  node4.left = node3;
  console.assert(solution(node4) === 3);
}
