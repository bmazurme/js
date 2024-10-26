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

function psp(n, line = '', left = 0, right = 0, flag = false, result = []) {
  if (left === n && right === n) {
    result.push(line);
  } else {
    if (left < n) {
      psp(n, line + '(', left + 1, right, true, result);
    }
 
    if (right < left && flag) {
      psp(n, line + ')', left, right + 1, flag, result);
    }
  }
 
  return result;
}


function solve() {
  const n = readInt();
  const result = psp(n);
  result.forEach((x) => console.log(x));
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;

  return n;
}
