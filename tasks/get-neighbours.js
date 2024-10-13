function getNeighbours(matrix, row, col) {
  const result = [];
  const height = matrix.length;
  // width
  // [left, right, top, bottom]
  // add top
  if (row > 0 ) {
    // console.log('t', matrix[row - 1][col]);
    result.push(matrix[row - 1][col]);
  }
  // add bottom
  if (row + 1 < height) {
    // console.log('b', matrix[row][col]);
    result.push(matrix[row + 1][col]);
  }
  // add left
  if (col > 0) {
    result.push(matrix[row][col - 1]);
  }
   // add right
  if (col + 1 < matrix[0].length) {
    result.push(matrix[row][col + 1]);
  }
  return result.sort((a, b) => a - b);
}


console.log(getNeighbours([
  [1, 2, 3],
  [0, 2, 6],
  [7, 4, 1],
  [2, 7, 0]], 3, 0), 7, 7); // h, w

console.log(getNeighbours([
  [1, 2, 3],
  [0, 2, 6],
  [7, 4, 1],
  [2, 7, 0]], 0, 0), 0, 2); // h, w

