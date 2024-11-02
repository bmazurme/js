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

function search(arr, min, max, k) {
  if (min === max) {
    return min;
  }

  const mid = min + Math.floor((max - min) / 2);
  let count = 0;
  let left = 0;

  for (let right = 1; right < arr.length; right++) {
    while (arr[right] - arr[left] > mid) {
      left++;
    }
    count += right - left;
  }

  if (count >= k) {
    min = search(arr, min, mid, k);
  } else {
    min= search(arr, mid + 1, max, k);
  }

  return min;
}


function getDifIndexes(arr, k) {
  arr.sort((a, b) => a - b);
  const min = 0;
  const max = arr[arr.length - 1] - arr[0];
  console.log(search(arr, min, max, k));
}
 
function solve() {
  const n = readInt();
  const arr = readArray();
  const k = readInt();
  // console.time();
  getDifIndexes(arr, k);
  // console.timeEnd();
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;
 
  return n;
}

function readArray() {
  const array = _inputLines[_curLine].trim(' ').split(' ').map((x) => Number(x));
  _curLine++;

  return array;
}
