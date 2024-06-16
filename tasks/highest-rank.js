function highestRank(arr) {
  arr.sort((a, b) => b - a);
  return arr.reduce((a, x, i) => {
    const len = arr.filter((k) => k === x).length;
    return i === 0 ? [x, len] : len > a[1] ? [x, len] : a;
  }, [])[0];
}
 
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12);
console.log(highestRank([1,2,3,4,5,6,7,8,9]), 9);
console.log(highestRank([4,4,16,21,13,3,2,30,13,25,25,2,22,5,10,30,12,19]), 30);
