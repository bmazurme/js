function getSum(a, b) {
  if (a === b) {
    return a;
  }
 
  let sum = 0;
  let left = a < b ? a : b;
  let right = a > b ? a : b;
 
  for(let i = left; i <= right; i++) {
    sum += i;
  }
 
  return sum;
}
 
console.log(getSum(0,-1), -1);
console.log(getSum(0, 1), 1);
console.log(getSum(2, 2), 2);
console.log(getSum(0, 1), 1);
