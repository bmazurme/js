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

function get4Sum(arr, summ) {
  arr.sort((a, b) => a - b);
  const result = [];

  for (let j = 0; j < arr.length - 3; j++) {
    if (arr[j] !== arr[j - 1]) {
      for (let i = j + 1; i < arr.length - 2; i++) {
        if (!(i > j + 1 && arr[i] === arr[i - 1])) {
          let left = i + 1;
          let right = arr.length - 1;

          while (left < right) {
            const target = arr[j] + arr[i] + arr[left] + arr[right];
  
            if (target === summ) {
              result.push([arr[j], arr[i], arr[left], arr[right]].join(' '));
              while(arr[left] === arr[left + 1]) {
                left++;
              }
              while(arr[right] === arr[right - 1]) {
                right -= 1;
              }
              left += 1;
              right -= 1;
            } else {
              if (target < summ) {
                left += 1;
              } else {
                right -= 1;
              }
            }
          }
        }
      }
    }
  }

  return result;
}
 
function solve() {
  const n = readInt();
  const s = readInt();
  const arr = readArray();
  const result = get4Sum(arr, s);
  console.log(result.length);
  result.forEach((x) => console.log(x));
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;

  return n;
}

function readArray() {
  const arr = _inputLines[_curLine].trim(' ').split(' ').map((x) => Number(x));
  _curLine++;

  return arr;
}
