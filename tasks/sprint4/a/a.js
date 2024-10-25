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

function getUnique(arr) {
  const array = [...new Set(arr)];
  return array;
}


function solve() {
  const rows = readInt();
  const array = readArray(rows);
  const result = getUnique(array);
  result.forEach((x) => console.log(x));
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;

  return n;
}

function readArray(rows) {
  const array = [];

  for (let i = 0; i < rows; i++) {
    array.push(_inputLines[_curLine].trim(' '));
    _curLine++;
  }

  return array;
}
