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

    for (let i = 0; i < n; i++) {
      this.matrix.push(this.readLine().split('').map(Number));
    }
    
    this.matrix.reverse();
  }
}

function getMax(data) {
  const dp = Array.from({ length: data.size[0] + 1 }, () => Array.from({ length: data.size[1] + 1 }, () => 0));

  for (let i = 1; i <= data.size[0]; i++) {
    for (let j = 1; j <= data.size[1]; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + data.matrix[i - 1][j - 1];
    }
  }

  return dp[data.size[0]][data.size[1]];
}

function solve() {
  const initData = new InitData();
  initData.readData();
  console.log(getMax(initData));
}
