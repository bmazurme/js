const findAverage = function (nums) {
  return nums.reduce((a, x) => a + x) / nums.length;
}
 
console.log(findAverage([1]), 1);
console.log(findAverage([1, 3, 5, 7]), 4);
