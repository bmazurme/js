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

function fibonacci(n) {
  return (n <= 1) ? 1 : fibonacci(n - 2) + fibonacci(n - 1);
}


function solve() {
  const number = readInt();
  const result = fibonacci(number);
  console.log(result);
}

function readInt() {
  const number = Number(_inputLines[_curLine]);
  _curLine++;

  return number;
}
