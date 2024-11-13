function siftUp(heap, idx) {
  if (idx === 1) {
    return idx;
  }

  const parentIndex = Math.floor(idx / 2);

  if (heap[parentIndex] < heap[idx]) {
    [heap[parentIndex], heap[idx]] = [heap[idx], heap[parentIndex]];
    
    return siftUp(heap, parentIndex);
  }

  return idx;
}

function test() {
  const sample = [-1, 12, 6, 8, 3, 15, 7];
  console.assert(siftUp(sample, 5) === 1);
}
