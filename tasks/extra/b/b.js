const _readline = require('readline');

class InitData {
  constructor(stream = require('fs').createReadStream('input.txt')) {
    this._curLine = 0;
    this.n = 0;
    this.arr = null;
    this.stream = stream;
    this._readline = _readline
      .createInterface({ input: stream })
      .on('line', (line) => this.set(line));
  }

  set(line) {
    if (this._curLine === 0) {
      this.n = Number(line);
    } else {
      this.arr = line.split(' ').map((x) => Number(x));
    }
    this._curLine++;
  }
}

function find(arr) {
  const MOD = 200;
  let pairs = 0;
  const obj = {};
  arr = arr.map((x) => Math.abs(x % MOD));
  arr.forEach((x) => obj[x] ? obj[x]++ : obj[x] = 1);

  for (let count of Object.values(obj)) {
    if (count > 1) {
      pairs += (count * (count - 1)) / 2;
    }
  }

  return pairs;
}

const initData = new InitData();
const solve = () => console.log(find(initData.arr));
initData.stream.on('end', solve);
