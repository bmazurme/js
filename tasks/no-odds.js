function noOdds(values) {
  return values.filter((x) => x % 2 === 0);
}
 
console.log(noOdds([0, 1]), [0]);
console.log(noOdds([0, 1, 2, 3]), [0, 2]);
