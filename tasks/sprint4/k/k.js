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

function getNumber(metro, bus) {
  let dx = 0;
  let dy = 0;
  let max = 0;
  let result = 0;

  for (let i = 0; i < metro.length; i++) {
    let value = 0;

    for (let j = 0; j < bus.length; j++) {
      dx = metro[i][0] - bus[j][0];
      dy = metro[i][1] - bus[j][1];

      // if (dx > 20 && dx < -20 || dy > 20 && dy < -20) continue;

      if (dx <= 14 && dx >= -14 && dy <= 14 && dy >= -14) {
        value += 1;
      } else if (dx === 20 && dy === 0 || dx === 0 && dy === 20) {
        value += 1;
      } else if (dx <= 20 && dx >= -20 || dy <= 20 && dy >= -20) {
        // const distance = dx ** 2 + dy ** 2;

        // if (distance <= 400) {
          value += 1;
        // }
      }
    }
    if (value > max) {
      max = value;
      result = i;
    }
  }

  return result + 1;
}

function solve() {
  const n = readInt();
  const metro = new Array(10000).fill(1).map((x) => [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
  // const metro = readArray(n);
  const m = readInt();
  const bus = new Array(100000).fill(1).map((x) => [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
  // const bus = readArray(m);
  console.time();
  const result = getNumber(metro, bus);
  console.timeEnd();
  console.log(result);
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
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
