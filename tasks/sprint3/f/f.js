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
 
function perimeter(arr) {
  arr.sort((a, b) => b - a);
  let result = 0;
  
  for (let i = 0; i < arr.length - 2; i++) {
    const a = arr[i];
    const b = arr[i + 1];
    const c = arr[i + 2];
    
    if (a + b > c && a + c > b && b + c > a) {
      result = a + b + c;
      break;
    }
  }
 
  return result;
}
 
// 2 2 3 4
 
function solve() {
  const n = readInt();
  const arr = readLine();
  console.log(perimeter(arr));
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
