function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }
 
  const arr1 = a1.map((x) => x.length).sort((a, b) => a - b);
  const arr2 = a2.map((x) => x.length).sort((a, b) => a - b);
 
  const r1 = arr1[0] - arr2[arr2.length - 1] > 0 ? arr1[0] - arr2[arr2.length - 1] : arr2[arr2.length - 1] - arr1[0];
  const r2 = arr2[0] - arr1[arr1.length - 1] > 0 ? arr2[0] - arr1[arr1.length - 1] : arr1[arr1.length - 1] - arr2[0];
 
  return r1 >= r2 ? r1 : r2;
}
 
// if (a1.length === 0 || a2.length === 0) return -1
// let l1 = a1.map(str => str.length)
// let l2 = a2.map(str => str.length)
// return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1));
 
const s1 = ['hoqq', 'bbllkw', 'oox', 'ejjuyyy', 'plmiis', 'xxxzgpsssa', 'xxwwkktt', 'znnnnfqknaz', 'qqquuhii', 'dvvvwz'];
const s2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];
 
console.log(mxdiflg(s1, s2), 13);