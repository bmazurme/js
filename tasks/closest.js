function closest(arr) {
  const result = arr.reduce((a, x) => {
    if (x <= 0 && x > a.left) {
      return { ...a, left: x };
    } else if (x >= 0 && x < a.right) {
      return { ...a, right: x };
    }
 
    return a;
  }, { left: -Infinity, right: Infinity});
 
  return Math.abs(result.left) === Math.abs(result.right) 
    ? null 
    : Math.abs(result.left) > result.right ? result.right : result.left;
}
 
// const sorted = [...new Set(arr)].sort((a, b) => Math.abs(a) - Math.abs(b));
// return Math.abs(sorted[0]) !== Math.abs(sorted[1]) ? sorted[0] : null;
 
console.log(closest([10, 3, 9, 1]), 1)
console.log(closest([2, 4, -1, -3]), -1)
console.log(closest([13, 0, -6]), 0)
console.log(closest([5, 1, -1, 2, -10]), null)
console.log(closest([5, 11, 11, 2, -1, 1]), null)
