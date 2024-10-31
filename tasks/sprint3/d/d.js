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

function cookies(f, c) {
  f.sort((a, b) => a - b);
  c.sort((a, b) => a - b);
  
  let result = 0;
  let curr = 0;
  
  for (let i = 0; i < f.length; i++) {
    for (let j = curr; j < c.length; j++) {
      if (f[i] <= c[j]) {
        result++;
        curr = j + 1;
        break;
      }
    }
  }

  return result;
}
 
function solve() {
  const n = readInt();
  const f = readLine();
  const m = readInt();
  const c = readLine();
  console.log(cookies(f, c));
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