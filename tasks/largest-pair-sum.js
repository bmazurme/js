function largestPairSum (numbers) {
  const arr = numbers.sort((a, b) => a - b).reverse();
 
  return arr[0] + arr[1];
}

// numbers.sort(function(a, b){ return b - a });
// return numbers[0] + numbers[1];
 
console.log(largestPairSum([10,14,2,23,19]), 42);
console.log(largestPairSum([-100,-29,-24,-19,19]), 0);
console.log(largestPairSum([1,2,3,4,6,-1,2]), 10);
console.log(largestPairSum([-10, -8, -16, -18, -19]), -18);
 
console.log(largestPairSum([45, 35, -50, 58, -80, 16, 35, 95, 70, -45, 59, -30, 22, -1, 15, 71, -74, -56, -83, -66, -24, 33, 60, -76]), 166);
 