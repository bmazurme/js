const _readline = require('readline');
const fileStream = require('fs').createReadStream('input.txt');
 
const _reader = _readline.createInterface({
  // input: process.stdin
  input: fileStream
});
 
const _inputLines = [];
let _curLine = 0;
 
_reader.on('line', line => {
  _inputLines.push(line);
});
 
// process.stdin.on('end', solve);
fileStream.on('end', solve);


function merge(leftArr, rightArr) {
  const result = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }

  return result.concat(leftArr).concat(rightArr);
}

function getMedian(n, m, an, am) {
  const length = n + m;
  const combine = merge(an, am);
  const mid = Math.floor(length / 2);

  if (length % 2) {
    return combine[mid];
  } else {
    return (combine[mid] + combine[mid - 1]) / 2;
  }
}
 
function solve() {
  const n = readInt();
  const m = readInt();
  const an = readLine();
  const am = readLine();
  console.log(getMedian(n, m, an, am));
}
 
function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;
 
  return n;
}
 
function readLine() {
  const arr = _inputLines[_curLine].trim(' ').split(' ').map((x) => Number(x));
  _curLine++;
 
  return arr;
}
