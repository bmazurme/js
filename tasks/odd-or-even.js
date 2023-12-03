function oddOrEven(array) {
  return array.reduce((a, x) => a + x, 0) % 2 ? 'odd' : 'even';
}

console.log(oddOrEven([0]), 'even');
console.log(oddOrEven([1]), 'odd');
console.log(oddOrEven([]), 'even');

console.log(oddOrEven([0, 1, 5]), 'even');
console.log(oddOrEven([0, 1, 3]), 'even');
console.log(oddOrEven([1023, 1, 2]), 'even');
