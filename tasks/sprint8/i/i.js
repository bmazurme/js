const _readline = require('readline');

class InitData {
  constructor(stream = require('fs').createReadStream('input.txt')) {
    this._curLine = 0;
    this.s = null;
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

function search(s) {
  let repeat = s[0];
  let i = 1;

  while (i + repeat.length <= s.length) {
    if (repeat === s.substring(i, i + repeat.length)) {
      i += repeat.length;
    } else {
      repeat = s.substring(0, i + 1);
      i++;
    }
  }

  if (repeat.length > s.length / 2) {
    repeat = s;
  }

  return s.length % repeat.length === 0 ? s.length / repeat.length : 1;
}

const initData = new InitData();
const solve = () => console.log(search(initData.s));
initData.stream.on('end', solve);
