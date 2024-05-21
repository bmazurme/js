function sumOfDifferences(arr) {
  const sorted = arr.sort((a, b) => b - a);
  const array = sorted.reduce((a, x, i) => i < sorted.length - 1 ? [...a, sorted[i] - sorted[i + 1]] : a, []);

  return array.reduce((a, x) => a + x, 0);
}

// return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);
