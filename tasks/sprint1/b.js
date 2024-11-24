https://contest.yandex.ru/contest/22450/run-report/119841915/

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

function getMaximumPoints(k, array) {
  const PLAYERS = 2;
  const keysWithoutDot = array.join('').replace(/[.]/g, '').split('');
  const matches = keysWithoutDot.reduce((matches, key) => ({ ...matches, [key]: !matches[key] ? 1 : matches[key] += 1 }), {});
  const result = Object.values(matches).reduce((points, value) => value <= PLAYERS * k ? points + 1 : points, 0);
    
  return result;
}

function solve() {
  const LENGTH_MATRIX = 4;
  const k = readInt();
  const array = readMatrix(LENGTH_MATRIX);
  
  console.log(getMaximumPoints(k, array));
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;

  return n;
}

function readArray() {
  const arr = _inputLines[_curLine].trim(' ').split('');
  _curLine++;

  return arr;
}

function readMatrix(rowsCount) {
  let arr = [];

  for (let i = 0; i !== rowsCount; i++) {
    arr = arr.concat(readArray());
  }

  return arr;
}
