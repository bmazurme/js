function maxSequence(arr) {
  const acc = [0];
  
  for (let j = 0; j < arr.length; j++) {
    let sum = 0;
 
    for (let i = j; i < arr.length; i++) {
      sum += arr[i];
      acc.push(sum);
    }
  }
 
  return Math.max(...acc);
}
 
console.log(maxSequence([]), 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
