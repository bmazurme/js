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

function prefixFunction(s) {
  const n = s.length;
  const pi = new Array(n).fill(0);
  
  for (let i = 1; i < n; ++i) {
    let k = pi[i - 1];

    while (k > 0 && s[k] !== s[i]) {
      k = pi[k - 1];
    }

    if (s[k] === s[i]) {
      ++k;
    }

    pi[i] = k;
  }

  return pi;
}

const initData = new InitData();
const solve = () => console.log(prefixFunction(initData.s).join(' '));
initData.stream.on('end', solve);
