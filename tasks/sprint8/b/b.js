const _readline = require('readline');

class InitData {
  constructor(stream = require('fs').createReadStream('input.txt')) {
    this._curLine = 0;
    this.s = '';
    this.t = '';
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

function reverse(s, t) {
  let diff = 0;

  for (let i = 0; i < s.length;) {
    for (let j = 0; j < t.length;) {
      if (s[i] === t[j]) {
        i++;
        j++;
      } else {
        diff++;

        if (diff > 1) {
          return false;
        } else {
          if (s.length === t.length) {
            i++;
            j++;
          } else if (s.length < t.length) {
            j++;
          } else {
            i++;
          }
        }
      }
    }
  }

  return true;
}

const initData = new InitData();
const solve = () => console.log(reverse(initData.s, initData.t) ? 'OK' : 'FAIL');
initData.stream.on('end', solve);
