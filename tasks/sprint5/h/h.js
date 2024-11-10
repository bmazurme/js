if (process.env.REMOTE_JUDGE !== 'true') {
  class CNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
}

function getRoutes(root, last = '', arr = []) {
  if (!root?.left && !root?.right) {
    arr.push(last + root.value.toString());
  }

  if (root.left) {
    getRoutes(root.left, last + root.value, arr);
  }

  if (root.right) {
    getRoutes(root.right, last + root.value, arr);
  }

  return arr;
}

function solution(root) {
  const routes = getRoutes(root);
  return routes.reduce((a, x) => a + Number(x), 0);
}

function test() {
  let node1 = new CNode(2, null, null);
  let node2 = new CNode(1, null, null);
  let node3 = new CNode(3, node1, node2);
  let node4 = new CNode(2, null, null);
  let node5 = new CNode(1, node4, node3);
  console.assert(solution(node5) === 275);
}

test();
