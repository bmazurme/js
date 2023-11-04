function rowSumOddNumbers(n) {
  // let arr = [n * n - n + 1];
 
  // for (let i = 0; i < n - 1; i++) {
  //   arr.push(arr[i] + 2);
  // }
 
  // return arr.reduce((a, x) => a + x, 0);
 
    /* The rows' start numbers are Hogben's centered polygonal numbers:
     1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.
     <https://oeis.org/A002061>
     
     The sum of one row is given by:
     s[n] = n^2 + n(b[n] - 1).
     <https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>
     
     Inline b[n]:
     s[n] = n^2 + n(n^2 - n + 1 - 1)
          = n^2 + n(n^2 - n)
          = n^2 + n^3 - n^2
          = n^3
     ... oh. */
     
  return n * n * n;
}
 
console.log(rowSumOddNumbers(1), '1');  // 0
console.log(rowSumOddNumbers(2), '3 - 5');  // 2
console.log(rowSumOddNumbers(3), '7 - 9 - 11'); // 4
console.log(rowSumOddNumbers(4), '13 - 15 - 17 - 19'); // 6
console.log(rowSumOddNumbers(5), '21 - 23 - 25 - 27 - 29'); // 10
console.log(rowSumOddNumbers(42), 74088);