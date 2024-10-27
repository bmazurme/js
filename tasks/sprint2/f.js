const _readline = require('readline');
const fileStream = require('fs').createReadStream('input.txt');

const _reader = _readline.createInterface({
  input: fileStream
  // input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
  _inputLines.push(line);
});

// process.stdin.on('end', solve);
fileStream.on('end', solve);

class StackMax {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.items.length) return 'error';
    this.items.pop();
  }

  get_max() {
    if (!this.items.length) return 'None';
    return Math.max(...this.items);
  }
}

function solve() {
  const rows = readInt();
  const array = readArray(rows);
  const stack = new StackMax();

  array.map((x) => {
    const [action, arg] = x.split(' ');
    return stack[action](+arg);
    // process.stdout.write(`${stack[action](arg)}`);
  }).filter((x) => x !== undefined).forEach((x) => console.log(x));
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;
  
  return n;
}

function readArray(rows) {
  const array = [];

  for (let i = 0; i < rows; i++) {
    array.push(_inputLines[_curLine].trim(' '));
    _curLine++;
  }

  return array;
}
