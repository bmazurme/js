function sumPairs(ints, s) {
  if (ints.length < 2) return undefined;
 
  const set = new Set()
  set.add(ints[0]);
 
  for (let i = 1; i < ints.length; ++i) {
    let needed = s - ints[i];
 
    if (set.has(needed)) {
      return [needed, ints[i]];
    }
 
    set.add(ints[i]);
  }
 
  return undefined;
}
 
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7]);
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6]);
console.log(sumPairs([20, -13, 40], -7), undefined);
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1]);
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7]);
console.log(sumPairs([4, -2, 3, 3, 4], 8), [4, 4]);
console.log(sumPairs([0, 2, 0], 0), [0, 0]);
console.log(sumPairs([5, 9, 13, -3], 10), [13, -3]);
