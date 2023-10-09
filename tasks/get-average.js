function getAverage(marks){
  return Math.floor(marks.reduce((a, x) => a + x, 0) / marks.length);
}

console.log(getAverage([2,2,2,2]),2);
console.log(getAverage([1,5,87,45,8,8]),2);


