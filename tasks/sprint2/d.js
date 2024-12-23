// if (process.env.REMOTE_JUDGE !== 'true') {
  class Node {
    constructor(value = null, next = null) {
      this.value = value;
      this.next = next;
    }
  }
// }

function solution(node, elem) {
  let i = 0;

  while (node.next) {
    if (node.value === elem) {
      return i;
    }
    node = node.next;
    i++;
  }

  return node.value === elem ? i : -1;
}

function test() {
  var node3 = new Node('node3');
  var node2 = new Node('node2', node3);
  var node1 = new Node('node1', node2);
  var node0 = new Node('node0', node1);
  var idx = solution(node0, 'node');
  // result is idx === 2
  console.log(idx);
}

test();