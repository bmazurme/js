multiplicationTable = function(size) {
  const arr = [...new Array(size)].map((_, i) => (i + 1));
  return arr.map((_, i) => arr.map((x) => (x * (i + 1))));
}

console.log(multiplicationTable(1))
console.log(multiplicationTable(2))
console.log(multiplicationTable(3))
// console.log(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]])