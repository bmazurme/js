function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError('RangeError');
  }
 
  return [...new Array(n)].map((x, i) => i + 1).reduce((a, x) => a * x, 1);
}
 
// if (n < 0 || n > 12)
//   throw new RangeError();
// return n <= 1 ? 1 : n * factorial(n - 1);
 
console.log(factorial(0), 1, 'factorial for 0 is 1');
console.log(factorial(1), 1, 'factorial for 1 is 1');
console.log(factorial(2), 2, 'factorial for 2 is 2');
console.log(factorial(3), 6, 'factorial for 3 is 6');
console.log(factorial(13), 6, 'factorial for 3 is 6');
