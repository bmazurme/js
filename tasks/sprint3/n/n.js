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

function getLines(arr) {
  arr.sort((a, b) => a[0] > b[0] ? 1 : -1);
  const stack = [];
  let i = 0;

  while (arr.length > i) {
    const item = arr[i];
    const length = stack.length;
    const index = length - 1;

    if (length === 0) {
      stack.push(item);
    } else {
      if (item[0] <= stack[index][1] && item[1] > stack[index][1]) {
        stack[index][1] = item[1];
      } else if (item[0] > stack[index][1]) {
        stack.push(item);
      }
    }
    i++;
  }

  return stack;
}
 
function solve() {
  const rows = readInt();
  const arr = readArray(rows);
  console.time();
  getLines(arr).forEach((x) => console.log(x.join(' ')));
  console.timeEnd();
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;
 
  return n;
}

function readArray(rows) {
  // const array = [];

  // for (let i = 0; i < rows; i++) {
  //   array.push(_inputLines[_curLine].trim(' ').split(' ').map((x) => Number(x)));
  //   _curLine++;
  // }

  // return array;
  return new Array(99999).fill(0).map((_, i) => [i, i + 1]);
}
