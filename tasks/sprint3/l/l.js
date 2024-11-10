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

function getDays(arr, k, left = 0, right = arr.length - 1, mid = Math.floor(arr.length / 2)) {
  result = -1;

  if (arr[mid] >= k) {
    console.log(left, mid, right);

    if (right - left === 1) {
      if (arr[left] >= k) return left + 1
      return mid + 1;
    }

    result = getDays(arr, k, left, mid, Math.floor((left + right) / 2));
  } else if (arr[mid] < k) {
    if (right - left === 1) {
      return arr[right] >= k ? right + 1 : -1;
    }

    result = getDays(arr, k, mid, right, Math.floor((mid + right) / 2));
  }

  return result;
}
 
function solve() {
  const n = readInt();
  const arr = readLine();
  const k = readInt();
  // console.log(getDays(arr, 2*k));
  console.log([getDays(arr, k), getDays(arr, 2 * k)].join(' '));
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
