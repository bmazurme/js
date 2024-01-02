function multipleOfIndex(array) {
  return array.filter((x, i) => x % i === 0 || x === 0);
}
 
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]), [-6, 32, 25]);
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]), [-1, 10]);
console.log(multipleOfIndex([0, 2, 3, 6, 9]), [0, 2, 6]);
