function getBinaryNumber(number) {
  // Ваше решение
  if (number === 0) {
    return '0';
  }
  let result = '';

  for (i = number; i > 0; i = Math.trunc(i / 2)) {
    result = (i % 2) + result;
  }

  return result;
}

console.log(getBinaryNumber(5), 101);
console.log(getBinaryNumber(14), 1110);

