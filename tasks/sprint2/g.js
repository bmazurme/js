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

class StackMaxEffective {
  constructor() {
    this.items = [];
    this.maxItems = [];
  }

  push(item) {
    this.items.push(item);
    this.length++;

    if (item >= this.maxItems[this.maxItems.length - 1] || !this.maxItems.length) {
      this.maxItems.push(item);
    }
  }

  pop() {
    if (!this.items.length) {
      return 'error';
    } else {
      const item = this.items.pop();
      if (item === this.maxItems[this.maxItems.length - 1]) this.maxItems.pop();
    }
  }

  get_max() {
    return !this.items.length ? 'None' : this.maxItems[this.maxItems.length - 1];
  }

  top() {
    return !this.items.length ? 'error' : this.items[this.items.length - 1];
  }
}

function solve() {
  const rows = readInt();
  const array = readArray(rows);
  const stack = new StackMaxEffective();

  array.map((x) => {
    const [action, arg] = x.split(' ');
    return stack[action](+arg);
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
