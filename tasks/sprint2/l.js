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

function fibonacci(n, k) {
  if (n < 2) return 1;

  let result = 2;

  for(let i = 3, j = 1; i <= n; i++) {
    let tmp = j + result;
    j = result;
    result = tmp % (Math.pow(10, k));
  }

  return result;
}


function solve() {
  const [a, b] = readLine();
  const result = fibonacci(a, b);
  console.log(result);
}

function readLine() {
  const [a, b] = _inputLines[_curLine].trim(' ').split(' ');
  _curLine++;

  return [+a, +b];
}
