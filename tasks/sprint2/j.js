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

class MyQueueSized {
  constructor() {
    this.queue = [];
    this.queueSize = 0;
    this.head = 0;
    this.tail = 0;
  }

  put(x) {
    this.queue[this.tail] = x;
    this.tail = (this.tail + 1);
    this.queueSize += 1;
  }

  isEmpty() {
    return this.queueSize === 0;
  }

  get() {
    if (this.isEmpty()) {
      return 'error';
    }

    let x = this.queue[this.head];
    this.queue[this.head] = null;
    this.head = (this.head + 1);
    this.queueSize -= 1;

    return x;
  }

  size() {
    return this.queueSize;
  }
}

function solve() {
  const rows = readInt();
  const array = readArray(rows);
  const queue = new MyQueueSized();

  array.map((x) => {
    const [action, arg] = x.split(' ');
    return queue[action](+arg);
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
