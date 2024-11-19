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

function getSubstr(line, n, k) {
  const dict = {};
  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length + 1; j++) {
      const key = line.substring(i, j);
      if (dict[key] === undefined) {
        dict[key] = { lenght: j - i, count: 1, value: key, index: i };
      } else {
        dict[key].count += 1;
      }
    }
  }
  return Object.values(dict).filter((x) => x.lenght === n && x.count >= k).map((x) => x.index);
}

function solve() {
  const [n, k] = readInt();
  const line = readLine();

  console.time();
  const result = getSubstr(line, n, k);
  console.timeEnd();
  console.log(result.join(' '));
}

function readInt() {
  const n = _inputLines[_curLine].trim(' ').split(' ').map(Number);
  _curLine++;

  return n;
}

function readLine() {
  const str = _inputLines[_curLine].trim(' ');
  _curLine++;

  return str;
}
