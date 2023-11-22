function isValidWalk(walk) {
  const keys = {
    n: 1,
    s: -1,
    w: 2,
    e: -2,
  };
  return walk.length === 10 && walk.reduce((a, x) => a + keys[x], 0) === 0;
}
 
// let dx = 0
// let dy = 0
// let dt = walk.length
 
// for (let i = 0; i < walk.length; i++) {
//   switch (walk[i]) {
//     case 'n': dy--; break
//     case 's': dy++; break
//     case 'w': dx--; break
//     case 'e': dx++; break
//   }
// }
 
// return dt === 10 && dx === 0 && dy === 0
 
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');