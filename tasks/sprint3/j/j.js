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
 
function binarySort(arr, n) {
  for (let j = 1; j < n; j++) {
    let isSorted = true;
    for (let i = 0; i < n - j; i++) {
      if (arr[i] > arr[i + 1]) {
        const tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        isSorted = false;
      }
    }
    

    if (isSorted) {
      if (j == 1) console.log(arr.join(' '));
      break;
    } else {
      console.log(arr.join(' '));
    }
  }
}
 
function solve() {
  const n = readInt();
  const arr = readLine();
  binarySort(arr, n)
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