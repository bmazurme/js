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
 
function bigest(arr) {
  const fn = (a, b) => Number(a + b) > Number(b + a) ? -1 : 1;
  arr.sort(fn);
  return arr.reduce((a, x) => a + x, '');
}
 
function solve() {
  const n = readInt();
  const arr = readLine();
  console.log(bigest(arr));
}
 
function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;
 
  return n;
}
 
function readLine() {
  const arr = _inputLines[_curLine].trim(' ').split(' ');
  _curLine++;
 
  return arr;
}
