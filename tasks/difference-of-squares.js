function differenceOfSquares(n) {
  const arr = [...new Array(n)].map((_, i) => i + 1);
  const val1 = arr.reduce((a, x) => a + x, 0);
  const val2 = arr.reduce((a, x) => a + x * x, 0);
 
  return val1 * val1 - val2;
}
 
//   var sum = 0, squareSum = 0, i;
//   for (i =1 ; i <= x; i++) {
//     sum += i*i;
//     squareSum += i;
//   }
//   return squareSum*squareSum - sum;
 
// differenceOfSquares=x=>x*(x*x-1)*(3*x+2)/12
 
console.log(differenceOfSquares(5), 170);
console.log(differenceOfSquares(10), 2640);
console.log(differenceOfSquares(100), 25164150);
