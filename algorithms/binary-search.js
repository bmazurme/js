function binarySearch(sortedNumbers, n) {
  let start = 0;
  let end = sortedNumbers.length;
    
  while (start < end) {
    const middle = Math.floor((start + end) / 2);
    const value = sortedNumbers[middle];
    
    if (n == value) {
      return middle;
    }

    if (n < value) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }

  return -1;
} 