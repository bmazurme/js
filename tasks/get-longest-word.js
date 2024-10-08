function getLongestWord(length, line) {
  // Ваше решение
  return line.split(' ').reduce((a, x) => x.length > a.length ? x : a, '');
}

console.log(getLongestWord(19, 'i love segment tree'), 'segment', 7);
console.log(getLongestWord(21, 'frog jumps from river'), 'jumps', 5);

