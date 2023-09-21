function sumArray(array) {
  if (!array || array?.length < 3) {
    return 0;
  }
  const arr = array.sort((a, b) => a - b);

  return arr.reduce((a, x, i) => i > 0 && i < arr.length - 1 ? a + x : a + 0, 0);
}

console.log(sumArray(null)                     , 0 );
console.log(sumArray([ ])                      , 0 );
console.log(sumArray([ 3 ])                    , 0 );
console.log(sumArray([ 3, 5 ])                 , 0 );
console.log(sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
console.log(sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
console.log(sumArray([ -6, -20, -1, -10, -12 ]), -28 );
console.log(sumArray([ -6, 20, -1, 10, -12 ])  , 3 );