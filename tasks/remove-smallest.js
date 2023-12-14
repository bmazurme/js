function removeSmallest(n, arr) {  
  while(n > 0) {
    const current = Math.min(...arr);
    const index = arr.findIndex((x) => current === x);
    arr = arr.slice(0, index).concat(arr.slice(index + 1));
    n--;
  }
 
  return arr;
}
 
// let res = arr.slice(0);
// while( n-- > 0 ) res.splice(res.indexOf( Math.min(...res) ),1);
// return res
 
console.log(removeSmallest ((-10), [1,2,3,4,5]) , [1,2,3,4,5]);
console.log(removeSmallest (0, [1,2,3,4,5]) , [1,2,3,4,5]);
console.log(removeSmallest (2, [5,3,2,1,4]) , [5,3,4]);
console.log(removeSmallest (3, [5,3,2,1,4]) , [5,4]);
console.log(removeSmallest (3, [1,2,3,4,5]) , [4,5]);
console.log(removeSmallest (5, [1,2,3,4,5]) , []);
console.log(removeSmallest (9, [1,2,3,4,5]) , []);
