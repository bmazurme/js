// if (process.env.REMOTE_JUDGE !== 'true') {
  class Node {
    constructor(value = null, next = null) {
      this.value = value;
      this.next = next;
    }
  }
// }

function solution(node) {
  // Your code
  // ヽ(´▽`)/
  console.log(node.value);
  if (node.next) solution(node.next);
}

function test() {
  let node3 = new Node('node3');
  let node2 = new Node('node2', node3);
  let node1 = new Node('node1', node2);
  let node0 = new Node('node0', node1);
  solution(node0);
  /*
  Output is:
  node0
  node1
  node2
  node3
  */
}
test();
