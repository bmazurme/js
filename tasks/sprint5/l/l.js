function siftDown(heap, idx) {
  const left = 2 * idx;
  const right = 2 * idx + 1;

  if (left >= heap.length) {
    return idx;
  }

  const indexLargest = (right < heap.length && heap[right] > heap[left]) ? right : left;

  if (heap[indexLargest] > heap[idx]) {
    [heap[idx], heap[indexLargest]] = [heap[indexLargest], heap[idx]];
    return siftDown(heap, indexLargest);
  }

  return idx;
}

function test() {
  const sample = [-1, 12, 1, 8, 3, 4, 7];
  // console.log(siftDown(sample, 2));
  console.assert(siftDown(sample, 2) === 5);
}
