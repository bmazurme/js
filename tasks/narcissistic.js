function narcissistic(value) {
  const arr = value.toString().split('');
  const len = arr.length;

  return arr.reduce((a, x) => a + x ** len, 0) === value;
}

console.log(narcissistic(7), true);
console.log(narcissistic(153), true);
console.log(narcissistic(122), false);
console.log(narcissistic(487), false);
