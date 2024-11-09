function merge_sort(arr, left, right) {
  if (right - left > 1) {
    const mid = Math.floor((right + left) / 2);
    merge_sort(arr, left, mid);
    merge_sort(arr, mid, right);
    const res = merge(arr, left, mid, right);
  	res.forEach((item,i) => arr[left + i] = item);
  }
}

function merge(arr, left, mid, right) {
  const leftArr = arr.slice(left, mid);
  const rightArr = arr.slice(mid, right);
  const result = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }

  return result.concat(leftArr).concat(rightArr);
}

function test() {
  var a = [1, 4, 9, 2, 10, 11];
  var b = merge(a, 0, 3, 6);
  var expected = [1, 2, 4, 9, 10, 11];

  var c = [1, 4, 2, 10, 1, 2];
  merge_sort(c, 0, 6)
  expected = [1, 1, 2, 2, 4, 10];
}
