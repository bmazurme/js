// if (process.env.REMOTE_JUDGE !== 'true') {
  class Node {
    constructor(value, left = null, right = null, size = 0) {
      this.value = value;
      this.left = left;
      this.right = right;
      this.size = size;
    }
  }
// }

// function findKth(root, k) {
//   // Вычисляем размер левого поддерева с учётом того,
//   // что оно может быть пустым.
//   const leftSize = (root.left === null) ? 0 : root.left.size;
//   // Если слева ровно k вершин, то искомая вершина - корень.
//   if (leftSize === k) {
//       return root.value;
//   }
//   // Если левое поддерево слишком мало, то продолжим
//   // поиск в правом поддереве.
//   if (leftSize < k) {
//       return findKth(root.right, k - leftSize - 1);
//   }
//   // Иначе продолжим поиск в левом поддереве.
//   return findKth(root.left, k);
// } 

function split(root, k) {
  const leftSize = (root.left === null) ? 0 : root.left.size;

  if (leftSize === k) {
    console.log(1);
    // console.log('v', root.value, leftSize);
    return [root.left, root];
  }

  if (leftSize < k) {
    console.log(2);
    const [left, right] = split(root.right, k - leftSize - 1);
    console.log('=', root);

    const l = {...root};
    const r = {...root.right};

    l.right = left;
    // r.left = right;

    console.log('==', r);
    return [l, r];
  }

  console.log(3);
  const [left, right] = split(root.left, k);
  // left.right = null;
  // root.left = right;

  return [left, right];
}

function test() {
  const node1 = new Node(3, null, null, 1);
  const node2 = new Node(2, null, node1, 2);
  const node3 = new Node(8, null, null, 1);
  const node4 = new Node(11, null, null, 1);
  const node5 = new Node(10, node3, node4, 3);
  const node6 = new Node(5, node2, node5, 6);
  // console.log(findKth(node6, 1));
  const res = split(node6, 1);
  // console.log(res[0].size);
  console.log(res);

  // console.assert(res[0].size === 4);
  // console.assert(res[1].size === 2);
}

test();

//        5
//   2        10
//      3    8   11