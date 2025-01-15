https://contest.yandex.ru/contest/22450/run-report/119841751/

const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
  _inputLines.push(line); 
});

process.stdin.on('end', solve);

function getAllDistancesToNearestZeros(length, arr) {
  let lastMatch = null;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (item === 0) {
      lastMatch = i;
      result.push(0);
      continue;
    }

    if (item !== 0 && lastMatch !== null) {
      result.push(i - lastMatch);
    } else {
      result.push(length);
    }
  }

  lastMatch = null;

  for (let i = length - 1; i >= 0 ; i--) {
    const item = arr[i];

    if (item === 0) {
      lastMatch = i;
      continue;
    }

    if (item !== 0 && lastMatch !== null && result[i] > lastMatch - i) {
      result[i] = lastMatch - i;
    }
  }
  
  return result;
}

function solve() {
  const length = readInt();
  const numbers = readArray();
  console.log(getAllDistancesToNearestZeros(length, numbers).join(' '));
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;

  return n;
}

function readArray() {
  const arr = _inputLines[_curLine].trim(' ').split(' ').map(num => Number(num));
  _curLine++;

  return arr;
}
