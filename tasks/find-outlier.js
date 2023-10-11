function findOutlier(integers) {
  let flag = 0;
 
  for (let j = 0; j < 3; j++) {
    if (integers[j] % 2 === 0) {
      flag++;
    }
  }
 
  for (let i = 0; i < integers.length; i++) {
    if (flag > 1) {
      if (integers[i] % 2 !== 0) {
        return integers[i];
      }
    } else {
      if (integers[i] % 2 === 0) {
        return integers[i];        
      }
    }
  }
}
 
console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2,6,8,10,3]), 3);
console.log(findOutlier([0,0,3,0,0]), 3);
console.log(findOutlier([1,1,0,1,1]), 0);
