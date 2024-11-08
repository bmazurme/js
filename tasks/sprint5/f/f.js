// if (process.env.REMOTE_JUDGE !== 'true') {
  class CNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
// }


function solution(root) {
  if (!root?.left && !root?.right) {
    return 1;
  }

  const l = solution(root.left);
  const r = solution(root.right);

  if (l > r) {
    return l + 1;
  }
  return r + 1;
}

function test() {
  // let node1 = new CNode(1, null, null);
  // let node2 = new CNode(4, null, null);
  // let node3 = new CNode(3, node1, node2);
  // let node4 = new CNode(8, null, null);
  // let node5 = new CNode(5, node3, node4);
  // console.assert(solution(node5) === 3);

  // let node1 = new CNode(5, 1, 2);
  // let node2 = new CNode(3, 3, 4);
  // let node3 = new CNode(8, 5, 6);
  // let node4 = new CNode(1, null, null);
  // let node5 = new CNode(4, null, null);
  // let node6 = new CNode(6, null, null);
  // let node7 = new CNode(9, null, 7);
  // let node8 = new CNode(19, null, 8);
  // let node9 = new CNode(138, 9, 10);
  // let node10 = new CNode(9, null, 7);
  // let node11 = new CNode(19, null, 8);
  // let node12 = new CNode(138, 9, 10);

  let node1 = new CNode(1, null, null);
  let node2 = new CNode(1, node1, null);
  console.log(solution(node2));
}

test();
