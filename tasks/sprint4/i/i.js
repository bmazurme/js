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

function getAnagrames(arr, length) {
  const array = arr.map((x) => x.split('').sort().join(''));
  const obj = {};

  for(let i = 0; i < length; i++) {
    const path = array[i];

    if (!obj[path]) {
      obj[path] = [i];
    } else {
      obj[path].push(i);
    }
  }
  
  return Object.values(obj);
}
 
function solve() {
  const n = readInt();
  const arr = readArray();
  const result = getAnagrames(arr, n);
  result.forEach((x) => console.log(x.join(' ')));
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;

  return n;
}

function readArray() {
  const arr = _inputLines[_curLine].trim(' ').split(' ');
  _curLine++;

  return arr;
}
