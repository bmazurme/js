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
 
function sort(arr) {
  const acc = [[], [], []];
 
  for (let i = 0; i < arr.length; i++) {
    acc[arr[i]].push(arr[i]);
  }
 
  return acc.flat().join(' ');
}
 
function solve() {
  const n = readInt();
  if (n > 0) {
    const arr = readLine();
    console.log(sort(arr));
  }
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
