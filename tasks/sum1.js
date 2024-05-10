function sum(numbers) {
  return numbers.reduce((a, x) => a + x, 0);
}
 
console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);