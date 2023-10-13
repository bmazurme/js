function removeElement (nums, val) {
  return nums.filter((x) => x !== val )
};

console.log(removeElement([3,2,2,3], 3));
