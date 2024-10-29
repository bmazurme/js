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

function pod(s, t) {
  const large = s.length >= t.length ? s : t;
  const short = s.length < t.length ? s : t;
  let curr = 0;
  let result = '';

  for (let i = 0; i < short.length; i++) {
    for (let j = curr; j < large.length; j++) {
      if (short[i] === large[j]) {
        curr = j + 1;
        result += short[i];
        break;
      } 
    }
  }

  return short === result ? 'True' : 'False';
}
 
function solve() {
  const [a, b] = readArray(2);
  console.log(pod(a, b));
}

function readArray(rows) {
  const array = [];

  for (let i = 0; i < rows; i++) {
    array.push(_inputLines[_curLine].trim(' '));
    _curLine++;
  }

  return array;
}
