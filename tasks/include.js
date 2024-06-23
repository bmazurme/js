function include(arr, item) {
  return arr.includes(item);
  // return arr.some((x) => item === x);
}
 
console.log(include([1,2,3,4], 3), true );
console.log(include([1,2,4,5], 3), false);
console.log(include([], 3),        false);
