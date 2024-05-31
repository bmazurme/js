function findLongest(array) {
  return array.reduce((a, x) => x.toString().length > a.toString().length ? x : a, array[0]);
}
 
console.log(findLongest([1, 10, 100]), 100);
console.log(findLongest([9000, 8, 800]), 9000);
console.log(findLongest([8, 900, 500]), 900);
