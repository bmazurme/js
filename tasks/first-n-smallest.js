function firstNSmallest(array, n) {
  const keys = [...array].sort((a, b) => a - b).slice(0, n);
  const range = [...new Set(keys)];
  let tmp = array.reduce((a, x) => keys.some((k) => k === x) ? [...a, x] : a, []);
  
  while(tmp.length > n) {
    const val = range[range.length - 1];
 
    for(let i = tmp.length - 1; i >= 0; i--) {     
      if (tmp[i] === val) {
        tmp = [...tmp.slice(0, i), ...tmp.slice(i + 1)];
        if (!tmp.find((x) => x === val)) {
          range.pop();
        }
 
        break;
      }
    }    
  }
 
  return tmp;
}
 
// while(array.length != n) {
//   array.splice(array.lastIndexOf(Math.max(...array)), 1)
//   }
//   return array
 
console.log(firstNSmallest([1,2,3,4,5], 3), [1,2,3]);
console.log(firstNSmallest([5,4,3,2,1], 3), [3,2,1]);
console.log(firstNSmallest([1,2,3,1,2], 3), [1,2,1]);
console.log(firstNSmallest([1,2,3,-4,0], 3), [1,-4,0]);
console.log(firstNSmallest([1,2,3,4,5], 0), []);
console.log(firstNSmallest([1,2,3,4,5], 5), [1,2,3,4,5]);
console.log(firstNSmallest([1,2,3,4,2], 4), [1,2,3,2]);
console.log(firstNSmallest([2,1,2,3,4,2], 2), [2,1]);
console.log(firstNSmallest([2,1,2,3,4,2], 3), [2,1,2]);
console.log(firstNSmallest([2,1,2,3,4,2], 4), [2,1,2,2]);
console.log(firstNSmallest([8,-9,-6,-6,3,-5,-1,-10,3], 3), [-9,-6,-10]);
