function factorize(number) {
  // Ваше решение
  let x = 2;
  const arr = [];

  while (number >= x) {
    if (!(number % x)) {
      number = number / x;
      arr.push(x);
    } else {
      x++;
    }
  }
  return arr;
}

console.log(factorize(8), '2 2 2');
console.log(factorize(13), '13');
console.log(factorize(100), '2 2 5 5');
