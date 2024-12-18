const _readline = require('readline');
const fileStream = require('fs').createReadStream('input.txt');
const _reader = _readline.createInterface({ input: fileStream });
const _inputLines = [];
_reader.on('line', line => _inputLines.push(line));
fileStream.on('end', solve);

class InitData {
  constructor() {
    this._curLine = 0;
    this.size = 0;
    this.matrix = [];
  }

  readLine() {
    const line = _inputLines[this._curLine];
    this._curLine++;

    return line;
  }
  
  readData() {
    this.size = this.readLine().split(' ').map(Number);
    const [n, m] = this.size;

    for (let i = 0; i < n + 2; i++) {
      if (i === 0 || i === n + 1) {
        this.matrix.push(Array.from({ length: m + 1 }, () => -Infinity));
      } else {
        const arr = this.readLine().split('').map(Number);
        arr.push(-Infinity);
        this.matrix.push([-Infinity].concat(arr));
      }
    }
  }
}

function getMax(data) {
  const dp = Array.from({ length: data.size[0] }, () => [] );
  let path = '';

  for (let i = 0; i <= data.size[0] + 1; i++) {
    dp[i] = new Array(data.size[1] + 2).fill(-1);
  }

  dp[data.size[0]][1] = data.matrix[data.size[0]][1];

  for (let i = data.size[0]; i > 0; i--) {
    for (let j = 1; j <= data.size[1]; j++) {
      if (i !== data.size[0] || j !== 1) {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]) + data.matrix[i][j];
      }
    }
  }

  let i = 1;
  let j = data.size[1];

  while (i < data.size[0] || j > 1) {
    if (dp[i][j - 1] >= dp[i + 1][j]) {
      path = 'R' + path;
      j--;
    } else {
      path = 'U' + path;
      i++;
    }
  }

  return [dp[1][data.size[1]], path];
}

function solve() {
  const initData = new InitData();
  initData.readData();
  const [flowers, path] = getMax(initData);
  console.log(flowers);
  console.log(path);
}
