const _readline = require('readline');

class InitData {
  constructor(stream = require('fs').createReadStream('input.txt')) {
    this._curLine = 0;
    this.n = 0;
    this.k = 0;
    this.cards = null;
    this.stream = stream;
    this._readline = _readline
      .createInterface({ input: stream })
      .on('line', (line) => this.set(line));
  }

  set(line) {
    if (this._curLine === 0) {
      this.n = Number(line);
    } else if (this._curLine === 1) {
      this.k = Number(line);
    } else {
      this.cards = line.split(' ').map((x) => Number(x));
    }
    this._curLine++;
  }
}

function find(n, k, cards) {
  let sum = 0;
  let left = Array.from({ length: k + 1 }, () => 0);
  let right = Array.from({ length: k + 1 }, () => 0);

  for (let i = 0; i < k; i++) {
    left[i + 1] = left[i] + cards[i];
    right[i + 1] = right[i] + cards[n - 1 - i];
  }

  for (let i = 0; i <= k; i++) {
    sum = Math.max(sum, left[i] + right[k - i]);
  }

  return sum;
}

const initData = new InitData();
const solve = () => console.log(find(initData.n, initData.k, initData.cards));
initData.stream.on('end', solve);
