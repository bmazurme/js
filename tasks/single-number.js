function singleNumber(nums) {
  return nums.reduce((a, b) => a ^ b);
};

// [2,2,1]

console.log(singleNumber([2,2,1]));
