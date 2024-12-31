const _readline = require('readline');

class InitData {
  constructor(stream = require('fs').createReadStream('input.txt')) {
    this._curLine = 0;
    this.n = 0;
    this.m = 0;
    this.t = [];
    this.stream = stream;
    this._readline = _readline
      .createInterface({ input: stream })
      .on('line', (line) => this.set(line));
  }

  set(line) {
    if (this._curLine === 0) {
      this.s = line;
    } else if (this._curLine === 1) {
      this.m = Number(line);
    } else {
      const [str, position] = line.split(' ');
      this.t.push([str, Number(position)]);
    }

    this._curLine++;
  }
}

function insert(s, items) {
  let x = 0;
  let result = '';

  for (let [c, n] of items) {
    result += s.substring(x, n) + c;
    x = n;
  }

  return result += s.substring(x);
}

const initData = new InitData();
const solve = () => console.log(insert(initData.s, initData.t.sort((a, b) => a[1] - b[1])));
initData.stream.on('end', solve);
