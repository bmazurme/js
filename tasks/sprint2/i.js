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
  constructor(maxSize) {
    this.queue = new Array(maxSize).fill(null);
    this.maxSize = maxSize;
    this.queueSize = 0;
    this.head = 0;
    this.tail = 0;
  }

  push(x) {
    if (this.queueSize < this.maxSize) {
      this.queue[this.tail] = x;
      this.tail = (this.tail + 1) % this.maxSize;
      this.queueSize += 1;
    } else {
      return 'error';
    }
  }
  isEmpty() {
    return this.queueSize === 0;
  }
  pop() {
    if (this.isEmpty()) {
      return 'None';
    }

    let x = this.queue[this.head];
    this.queue[this.head] = null;
    this.head = (this.head + 1) % this.maxSize;
    this.queueSize -= 1;

    return x;
  }
  peek() {
    return this.queue[this.head] || 'None';
  }
  size() {
    return this.queueSize;
  }
}

function solve() {
  const rows = readInt();
  const maxSize = readInt();
  const array = readArray(rows);

  const queue = new MyQueueSized(maxSize);

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
