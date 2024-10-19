// if (process.env.REMOTE_JUDGE !== 'true') {
  class Node {
    constructor(value = null, next = null) {
      this.value = value;
      this.next = next;
    }
  }
// }

function getNodeByIndex(node, index) {
  while (index) {
    node = node.next;
    index -= 1;
  }

  return node;
}

function solution(head, idx) {
  if (idx === 0) {
    return getNodeByIndex(head, idx + 1);
  }
  const previousNode = getNodeByIndex(head, idx - 1);
  const nextNode = getNodeByIndex(head, idx + 1);
  previousNode.next = nextNode;

  return head;
}

function test() {
  let node3 = new Node('node3');
  let node2 = new Node('node2', node3);
  let node1 = new Node('node1', node2);
  let node0 = new Node('node0', node1);
  let newHead = solution(node0, 3);
  console.log(newHead);
  // result is node0 -> node2 -> node3
}

test();
