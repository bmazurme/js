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

const dict = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};
 
function comb(lines, prefix = '', index = 0, result = []) {
  if (index >= lines.length) {
    result.push(prefix);
  } else {
    for (let i = 0; i < lines[index].length; i++) {
      comb(lines, `${prefix}${lines[index][i]}`, index + 1, result);
    }
  }

  return result;
}
 
function solve() {
  const arr = readLine();
  const lines = arr.reduce((a, x) => [...a, dict[x]], []);
  const result = comb(lines);
  console.log(result.join(' '));
}

function readLine() {
  const arr = _inputLines[_curLine].trim(' ').split('');
  _curLine++;

  return arr;
}
