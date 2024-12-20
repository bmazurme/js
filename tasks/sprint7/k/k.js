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
    this.a = [];
    this.b = [];
  }

  readLine() {
    const line = _inputLines[this._curLine];
    this._curLine++;

    return line;
  }
  
  readData() {
    this.n = Number(this.readLine());
    this.a = this.readLine().split(' ').map(Number);
    this.m = Number(this.readLine());
    this.b = this.readLine().split(' ').map(Number);
  }
}

function getMax(data) {
  const dp = Array.from({ length: data.n + 1 }, () => new Array(data.m + 1).fill(0));

  for (let i = 1; i <= data.n; i++) {
    for (let j = 1; j <= data.m; j++) {
      if (data.a[i - 1] === data.b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let resultA = '';
  let resultB = '';

  let i = data.n;
  let j = data.m;

  while (dp[i][j] !== 0) {
    if (dp[i - 1][j] === dp[i][j - 1]) {
      if (data.b[j - 1] === data.a[i - 1]) {
        resultA = `${i} ${resultA}`;
        resultB = `${j} ${resultB}`;
        i--;
        j--;
      } else {
        i--;
      }
    } else {
      if (dp[i - 1][j] >= dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  }

  return [dp[data.n][data.m], resultA, resultB];
}

function solve() {
  const initData = new InitData();
  initData.readData();
  const [size, resultA, resultB] = getMax(initData);
  console.log(size);
  console.log(resultA);
  console.log(resultB);
}
