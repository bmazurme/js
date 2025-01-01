const _readline = require('readline');

class InitData {
  constructor(stream = require('fs').createReadStream('input.txt')) {
    this._curLine = 0;
    this.s = null;
    this.st = null;
    this.t = null;
    this.stream = stream;
    this._readline = _readline
      .createInterface({ input: stream })
      .on('line', (line) => this.set(line));
  }

  set(line) {
    if (this._curLine === 0) {
      this.s = line;
    } else if (this._curLine === 1) {
      this.st = line;
    } else {
      this.t = line;
    }

    this._curLine++;
  }
}

function search(p, text) {
  let result = [];
  let s = p + '#' + text;
  let pi = Array.from({ length: text.length }, () => 0);
  let piPrev = 0;
  
  for (let i = 1; i < s.length; i++) {
    let k = piPrev;

    while (k > 0 && s[k] !== s[i]) {
      k = pi[k - 1];
    }

    if (s[k] === s[i]) {
      k++;
    }

    if (i < p.length) {
      pi[i] = k;
    }

    piPrev = k;

    if (k === p.length) {
      result.push(i - 2 * p.length);
    }
  }

  return result;
}

function replace(st, s, t) {
  const indexes = search(st, s);
  const result = [];
  let i = 0;

  indexes.forEach((x) => {
    result.push(s.substring(i, x));
    result.push(t);
    i = x + st.length;
  });
  result.push(s.substring(i));

  return result.join('');
}

const initData = new InitData();
const solve = () => console.log(replace(initData.st, initData.s, initData.t));
initData.stream.on('end', solve);
