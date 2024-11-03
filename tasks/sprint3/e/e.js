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
 
function houses(k, arr) {
  arr.sort((a, b) => a - b);
  let result = 0;
  
  for (let i = 0; i < arr.length; i++) {
    k -= arr[i];
    if (k >= 0) {
      result++;
    } else {
      break;
    }
  }
 
  return result;
}
 
function solve() {
  const [n, k] = readLine();
  const arr = readLine();
  console.log(houses(k, arr));
}
 
function readLine() {
  const arr = _inputLines[_curLine].trim(' ').split(' ').map((x) => Number(x));
  _curLine++;
 
  return arr;
}
