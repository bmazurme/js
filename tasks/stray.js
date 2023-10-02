function stray(numbers) {
  // const arr = [...new Set(numbers)];
  // return numbers.filter((x) => x === arr[0]).length === 1 ? arr[0] : arr[1];
  return numbers.reduce((a, b) => a ^ b);
 
  // for (var i in numbers) {
  //   if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
  //     return numbers[i];
  //   }
  // }
}
 
// console.log(stray([1, 1, 2]), 2);
// console.log(stray([1, 2, 1]), 2);
// console.log(stray([2, 1, 1]), 2);
// console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3);