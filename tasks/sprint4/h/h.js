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

function getLength(line) {
  let max = 0;
  // let start = 0;
  let substr = '';

  for (let i = 0; i < line.length; i++) {
    let index = substr.indexOf(line[i]);

    if (index > -1) {
      substr = substr.substring(index + 1);
    }

    substr += line[i];
    let tmp = substr.length;
    max = tmp > max ? tmp : max;
  }

  return max;
}
 
function solve() {
  const line = readLine();
  const result = getLength(line);
  console.log(result);
}

function readLine() {
  const n = _inputLines[_curLine];
  _curLine++;

  return n;
}
