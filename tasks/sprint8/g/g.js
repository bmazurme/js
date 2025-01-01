const _readline = require('readline');

class InitData {
  constructor(stream = require('fs').createReadStream('input.txt')) {
    this._curLine = 0;
    this.s = null;
    this.t = null;
    this.stream = stream;
    this._readline = _readline
      .createInterface({ input: stream })
      .on('line', (line) => this.set(line));
  }

  set(line) {
    if (this._curLine === 1) {
      this.s = line.split(' ').map(Number);
    } else if (this._curLine === 3) {
      this.t = line.split(' ').map(Number);
    }
    this._curLine++;
  }
}

function findAll(text, pattern) {
  const occurrences = [];
  let start = 0;

  while ((position = find(text, pattern, start)) !== -1) {
    occurrences.push(position);
    start = position;
  }

  return occurrences.join(' ');
}

function find(text, pattern, start) {
  for (let i = start; i < text.length - pattern.length + 1; i++) {
    let match = true;
    let shift = pattern[0] - text[i];

    for (let j = 0; j < pattern.length; j++) {
      if (text[i + j] + shift !== pattern[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      return i + 1;
    }
  }

  return -1;
}

const initData = new InitData();
const solve = () => console.log(findAll(initData.s, initData.t));
initData.stream.on('end', solve);
