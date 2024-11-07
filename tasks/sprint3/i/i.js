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
 
function getTop(arr, k) {
  const keys = {};
  
  for (let i = 0; i < arr.length; i++) {
    keys[arr[i]] = keys[arr[i]] !== undefined ? keys[arr[i]] += 1 : 1;
  }
  const array = Object.entries(keys).sort((a, b) => a[1] > b[1] ? -1 : 1);
  
  return array.slice(0, k).map((x) => x[0]).join(' ');
}
 
function solve() {
  const n = readInt();
  const arr = readLine();
  const k = readInt();
  console.log(getTop(arr, k));
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