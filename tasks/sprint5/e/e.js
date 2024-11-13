if (process.env.REMOTE_JUDGE !== 'true') {
  class CNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
}



function solution(root, left = -Infinity, right = Infinity) {
  if (!root) {
    return true;
  }

  if (root.value <= left || root.value >= right) {
    return false;
  }

  const l = solution(root.left, left, root.value);
  const r = solution(root.right, root.value, right);

  return l && r; 
}

function test() {
  let node1 = new CNode(1, null, null);
  let node2 = new CNode(4, null, null);
  let node3 = new CNode(3, node1, node2);
  let node4 = new CNode(8, null, null);
  let node5 = new CNode(5, node3, node4);
  console.assert(solution(node5));
  node4.value = 5;
  console.assert(!solution(node5));
}
