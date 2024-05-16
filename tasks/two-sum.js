function twoSum(numbers, target) {
  const length = numbers.length;

  for(let i = 0; i < length; i++) {
    for(let j = i + 1; j < length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }

  return null;
}

// let seen = new Map();
// for (let i = 0; i < numbers.length; i++) {
//   let x = numbers[i], y = target - x;
//   if (seen.has(y))
//     return [seen.get(y), i];
//   seen.set(x, i);
// }

console.log(twoSum([1, 2, 3], 4), [0, 2]);
console.log(twoSum([1234, 5678, 9012], 14690), [1, 2]);
console.log(twoSum([2, 2, 3], 4), [0, 1]);
console.log(twoSum([2, 3, 1], 3), [0,2]);
