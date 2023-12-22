function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce((a, x) => a + Number(x), 0);
}
 
console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
