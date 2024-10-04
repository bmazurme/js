function checkParity(a, b, c) {
  const absA = Math.abs(a) % 2;
  const absB = Math.abs(b) % 2;
  const absC = Math.abs(c) % 2;
 
  if (absA !== absB) return false;
  return absB !== absC ? false : true;
}
 
console.log(checkParity(1, 2, -3), 'FAIL');
console.log(checkParity(7, 11, 7), 'WIN');
console.log(checkParity(6, -2, 0), 'WIN');
console.log(checkParity(30, 24, 25), 'FAIL');
// 30 24 25
// 1 2 -3
