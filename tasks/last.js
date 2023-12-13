function last(arr) {
  const len = arr.length; 
  return len > 0 ? arr[len - 1] : null;
}

console.log( last([1,2,3]), 3);
console.log( last([]), null);
