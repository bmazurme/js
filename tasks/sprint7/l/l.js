const _readline = require('readline');
const fileStream = require('fs').createReadStream('input.txt');
const _reader = _readline.createInterface({ input: fileStream });
const _inputLines = [];
_reader.on('line', line => _inputLines.push(line));
fileStream.on('end', solve);

class InitData {
  constructor() {
    this._curLine = 0;
    this.n = 0;
    this.m = 0;
    this.array = [];
  }

  readLine() {
    const line = _inputLines[this._curLine];
    this._curLine++;

    return line;
  }
  
  readData() {
    const [n, m] = this.readLine().split(' ').map(Number);
    this.n = n;
    this.m = m;
    this.array = this.readLine().split(' ').map(Number);
  }
}

function getMax(data) {
  const dp = Array.from({ length: data.m + 1 }, (_, i) => i === 0 ? 1 : 0);
  let result = 0;

  for (let j = 0; j < data.n; j++) {
    for (let i = data.m; i >= data.array[j]; i--) {
      if (dp[i - data.array[j]] === 1) {
        dp[i] = 1;
        result = Math.max(result, i);
      }
    }
  }

  return result;
}

function solve() {
  const initData = new InitData();
  initData.readData();
  console.log(getMax(initData));
}
