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

function is_correct_bracket_seq(line) {
  const pairs = { '{': '}', '[': ']', '(': ')' };
  const openers = ['{', '[', '('];
  const stack = [];

  for (let i = 0; i < line.length; i++) {
    const current = line[i];
    
    if (openers.some((x) => x === current)) {
      stack.push(current);
    } else if (current === pairs[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

function solve() {
  const line = readLine();
  console.log(is_correct_bracket_seq(line) ? 'True' : 'False');
}

function readLine() {
  const line = _inputLines[_curLine];
  _curLine++;

  return line;
}
