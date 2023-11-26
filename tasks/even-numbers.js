function evenNumbers(array, number) {
  const result = [];
  
  for(i = array.length -1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
    }
 
    if (result.length === number) {
      break;
    }
  }
 
  return result.reverse();
}
 
// const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);
 
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
