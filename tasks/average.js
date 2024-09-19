function movingAverage(array, windowSize) {
  // Ваше решение
  const result = [];
  let currentSum = array.slice(0, windowSize).reduce((a, x) => a + x, 0);
  result.push(currentSum / windowSize);

  for (let i = 0; i < array.length - windowSize; i++) {
    currentSum -= array[i];
    currentSum += array[i + windowSize];
    const currentAvg = currentSum / windowSize;
  
    result.push(currentAvg);
  }

  return result;
}

function solve() {
  const n = readInt();
  const arr = readArray();
  const windowSize = readInt();
  // process.stdout.write(`${movingAverage(arr, windowSize).join(' ')}`);
  console.log(`${movingAverage(arr, windowSize).join(' ')}`);
}

function readInt() {
  // const n = Number(_inputLines[_curLine]);
  // _curLine++;
  // return n;
  return 4;
}

function readArray() {
  // var arr = _inputLines[_curLine].trim(' ').split(' ').map(num => Number(num));
  // _curLine++;
  // return arr;
  return [1, 2, 3, 4, 5, 6, 7];
}


// [1 2 3 4 5 6 7]
// 4
solve();
