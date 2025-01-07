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
    if (this._curLine === 0) {
      this.s = line;
    } else {
      this.t = line;
    }
    this._curLine++;
  }
}

function compare(s, t) {
  const fnFix = (str) => str.split('').filter((x) => !(x.charCodeAt(0) % 2)).join('');
  s = fnFix(s);
  t = fnFix(t);
  return s < t ? -1 : s > t ? 1 : 0;
}

const initData = new InitData();
const solve = () => console.log(compare(initData.s, initData.t));
initData.stream.on('end', solve);
