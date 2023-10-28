function squareOrSquareRoot(array) {
  return array.map((x) => {
    const r = Math.sqrt(x);
 
    return (r % 1 === 0) ? r : x * x;
  });
}
 
console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]), [ 2, 9, 3, 49, 4, 1 ]);
console.log(squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ]), [ 10, 10201, 25, 25, 1, 1 ]);
console.log(squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ], [ 1, 4, 9, 2, 25, 36 ]));
