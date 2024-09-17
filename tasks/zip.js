function zip(a, b) {
  // Ваше решение
  return a.reduce((a, x, i) => [...a, x, b[i]], []);
}

console.log(zip([1, 2, 3], [4, 5, 6]));
