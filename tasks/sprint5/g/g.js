// if (process.env.REMOTE_JUDGE !== 'true') {
  class CNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
// }
 
function findMax(node, path) {
  if (node === null) {
    return 0;
  }

  const leftSum = Math.max(findMax(node.left, path), 0);
  const rightSum = Math.max(findMax(node.right, path), 0);

  path.max = Math.max(path.max, leftSum + rightSum + node.value);

  return node.value + Math.max(leftSum, rightSum);
}
 
function solution(root) {
  let path = { max: -Infinity };
  findMax(root, path);

  return path.max;
}

function test() {
  let node1 = new CNode(5, null, null);
  let node2 = new CNode(1, null, null);
  let node3 = new CNode(-3, node2, node1);
  let node4 = new CNode(2, null, null);
  let node5 = new CNode(2, node4, node3);
  console.assert(solution(node5) === 6);
}
 
test()