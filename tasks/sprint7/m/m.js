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
    this.c = 0;
    this.array = [];
  }

  readLine() {
    const line = _inputLines[this._curLine];
    this._curLine++;

    return line;
  }
  
  readData() {
    const [n, c] = this.readLine().split(' ').map(Number);
    this.n = n;
    this.c = c;

    for (let i = 0; i < this.n; i++) {
      const [m, c] = this.readLine().split(' ').map(Number);
      this.array.push({ m, c });
    }
  }
}

function getMax(data) {
  const dp = Array.from({ length: data.n + 1 }, () => Array(data.c + 1).fill(0));
  const matrix = Array.from({ length: data.n + 1 }, () => Array(data.c + 1).fill(false));

  for (let i = 1; i <= data.n; i++) {
    for (let w = 0; w <= data.c; w++) {
      if (data.array[i - 1].m <= w) {
        if (dp[i - 1][w - data.array[i - 1].m] + data.array[i - 1].c > dp[i - 1][w]) {
          dp[i][w] = dp[i - 1][w - data.array[i - 1].m] + data.array[i - 1].c;
          matrix[i][w] = true;
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  let maxValue = dp[data.n][data.c];
  let result = [];
  let w = data.c;

  for (let i = data.n; i > 0 && maxValue > 0; i--) {
    if (matrix[i][w]) {
      result.push(i);
      maxValue -= data.array[i - 1].c;
      w -= data.array[i - 1].m;
    }
  }

  return result;
}

function solve() {
  const initData = new InitData();
  initData.readData();
  const result = getMax(initData);
  console.log(result.length);
  console.log(result.join(' '));
}
