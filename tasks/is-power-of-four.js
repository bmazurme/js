 
function isPowerOfFour(number) {
  if (number === 1) return true;

  let i = 4;
  
  while (i <= number) {
    if (i === number) {
      return true;
    }
    i = i * 4;
  }
  return false;
  // console.log(Math.log(n) / Math.log(4));
  // if (number === 0) return false;
  // const n = Math.log(number);

  // console.log(n % Math.log(4));

  // if (n % Math.log(4) !== 0) return false;
  // return number === Math.pow(4, (n / Math.log(4)));
}
 
console.log(isPowerOfFour(1), false);
console.log(isPowerOfFour(15), false);
console.log(isPowerOfFour(16), true);
console.log(isPowerOfFour(96), false);
console.log(isPowerOfFour(5653), false);
console.log(isPowerOfFour(1575), false);
console.log(isPowerOfFour(8), false);
console.log(isPowerOfFour(128), false);
console.log(isPowerOfFour(1024), true);


 
// console.log(Math.log(15) / Math.log(4), Math.log(16) / Math.log(4));
 
// console.log(Math.log(16), Math.log(4));