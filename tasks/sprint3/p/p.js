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

function getMaxBlocks(arr) {
  let blocks = 0;
  let indexesSum = 0;
  let currentSum = 0;

  arr.forEach((value, i) => {
    indexesSum += i;
    currentSum += value;

    if (currentSum === indexesSum) {
      indexesSum = 0;
      currentSum = 0;
      blocks += 1;
    }
  });

  return blocks;
}
 
function solve() {
  const n = readInt();
  const arr = readArray();
  // console.time();
  console.log(getMaxBlocks(arr));
  // console.timeEnd();
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;
 
  return n;
}

function readArray() {
  const array = _inputLines[_curLine].trim(' ').split(' ').map((x) => Number(x));
  _curLine++;

  return array;
}
