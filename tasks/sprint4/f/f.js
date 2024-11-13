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

function modFix(n, m) {
  return n - Math.floor(n / m) * m;
}

function powFix(a, pow, m) {
  if (pow === 1) {
    return a;
  }
  if (pow % 2 === 0) {
    return powFix(a, pow / 2, m) ** 2 % m;
  }
  return powFix(a, pow - 1, m) * a % m;
}

function prefixHash(a, m, s) {
  const acc = [s[0].charCodeAt() % m];

  for (let i = 1; i < s.length; i++) {
    acc[i] = ((acc[i - 1] * a % m) + s[i].charCodeAt()) % m;
  }

  return acc;
}

function solve() {
  const a = readInt();
  const m = readInt();
  const s = readLine();
  const rows = readInt();
  const array = readArray(rows);
  const acc = prefixHash(a, m, s);

  for ([left, right] of array) {
    const x = powFix(a, right - left + 1, m);
    const y = modFix(((acc[left - 2] | 0) * x), m);
    const z = modFix(acc[right - 1] - y, m);
    console.log(z);
  }
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;

  return n;
}

function readLine() {
  const n = _inputLines[_curLine];
  _curLine++;

  return n;
}

function readArray(rows) {
  const array = [];

  for (let i = 0; i < rows; i++) {
    array.push(_inputLines[_curLine].trim(' ').split(' ').map((x) => Number(x)));
    _curLine++;
  }

  return array;
}
