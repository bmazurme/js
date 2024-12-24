const _readline = require('readline');

class InitData {
  constructor(stream = require('fs').createReadStream('input.txt')) {
    this._curLine = 0;
    this.s = '';
    this.stream = stream;
    this._readline = _readline
      .createInterface({ input: stream })
      .on('line', (line) => this.set(line));
  }

  set(line) {
    this.s = line;
    this._curLine++;
  }
}

function reverse(s) {
  return s.split(' ').reverse().join(' ');
}

const initData = new InitData();
const solve = () => console.log(reverse(initData.s,));
initData.stream.on('end', solve);
