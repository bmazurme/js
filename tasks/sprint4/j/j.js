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

function getLength(arr1, arr2) {
  if (arr1.length < arr2.length) {
    [arr1, arr2] = [arr2, arr1];
  }

  let sub = 0;
  let max = 0;
  let k = 0;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        sub++;
        k++;
        i++;
        max = sub > max ? sub : max;

        if (j === arr2.length - 1) {
          sub = 0;
        }
      } else {
        sub = 0;
        if (k > 0) {
          i -= k;
          k = 0;
          j--;
        }
      }
      if (i === arr2.length) {
        return max;
      }
    }
  }

  return max;
}
 
function solve() {
  const n1 = readInt();
  const arr1 = readArray(); //new Array(100000).fill(1); // readArray();
  const n2 = readInt();
  const arr2 = readArray(); //new Array(50000).fill(1); // readArray();

  console.time();
  const result = getLength(arr1, arr2);
  console.log(result);
  console.timeEnd();
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
