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

// function split(root, k) {
//   const leftSize = (root.left === null) ? 0 : root.left.size;

//   if (leftSize === k) {
//     const lSize = (root.left === null) ? 0 : root.left.size;
//     const left = root.left;
//     root.left = null;
//     root.size -= k;

//     return [left, root];
//   }

//   if (leftSize < k) {
//     const [left, right] = split(root.right, k - leftSize - 1);
//     root.right = left;

//     root.size -= root ? root.size : 0;

//     return [root, right];
//   }

//   const [left, right] = split(root.left, k);
//   root.left = right;
//   root.size -= k

//   return [left, root];
// }




if (process.env.REMOTE_JUDGE !== 'true') {
  class Node {
    constructor(value, left = null, right = null, size = 0) {
      this.value = value;
      this.left = left;
      this.right = right;
      this.size = size;
    }
  }
}

function split(root, k) {
  if (!root || k === 0){
    return [null, root];
  }

  if (k >= root.size) {
    return [root, null]
  }

  if (root.left && root.left.size >= k) {
    const [left, right] = split(root.left, k);
    root.left = right;
    root.size -= k;

    return [left, root]
  } else {
    let leftSize = root.left ? root.left?.size : 0;
    const [left, right] = split(root.right, k - leftSize - 1);
    root.right = left;
    root.size -= right ? right?.size : 0;

    return [root, right]
  }
}


function test() {
  const node1 = new Node(3, null, null, 1);
  const node2 = new Node(2, null, node1, 2);
  const node3 = new Node(8, null, null, 1);
  const node4 = new Node(11, null, null, 1);
  const node5 = new Node(10, node3, node4, 3);
  const node6 = new Node(5, node2, node5, 6);
  // console.log(findKth(node6, 1));
  const res = split(node6, 4);
  // console.log(res[0].size);
  // console.log(res);

  console.assert(res[0].size === 4);
  console.assert(res[1].size === 2);
}

test();

//        5
//   2        10
//      3    8   11