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

function getLength(arr) {
  let counter = 0;
  let result = 0;
  const acc = { 0: [0] };

  arr.forEach((item, i) => {
    counter = item ? counter += 1 : counter -= 1;
    const index = i + 1;

    if (acc[counter]) {
      const curr = index - acc[counter][0];
      result = curr > result ? curr : result;
      acc[counter].push(index);
    } else {
      acc[counter] = [index];
    }
  });

  return result;
}
 
function solve() {
  const n = readInt();
  const arr = n === 0 ? [] : readLine();
  console.time();
  const result = getLength(arr);
  console.timeLog();
  console.log(result);
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
