function twoSum(array, targetSum) {
  // Ваше решение
  array.sort((a, b) => a - b);
 
  let left = 0;
  let right = array.length - 1;
 
  while (left < right) {
    let currentSum = array[left] + array[right];
    
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
 
  return [];
}
