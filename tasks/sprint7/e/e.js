const _readline = require('readline');
const fileStream = require('fs').createReadStream('input.txt');
const _reader = _readline.createInterface({ input: fileStream });
const _inputLines = [];
_reader.on('line', line => _inputLines.push(line));
fileStream.on('end', solve);

class InitData {
  constructor() {
    this._curLine = 0;
    this.target = 0;
    this.rows = 0;
    this.nominals = [];
  }

  readLine() {
    const line = _inputLines[this._curLine];
    this._curLine++;

    return line;
  }
 
  readData() {
    this.target = Number(this.readLine());
    this.rows = Number(this.readLine());
    this.nominals = this.readLine().split(' ').map(Number);
  }
}

function getMin(data) {
  const dp = Array.from({ length: data.target + 1 }, (_, i) => i === 0 ? 0 : Infinity);

  for (let j of data.nominals) {
    for (let i = j; i <= data.target; i++) {
      dp[i] = Math.min(dp[i], dp[i - j] + 1);
    }
  }

  return dp[data.target] === Infinity ? -1 : dp[data.target];
}

function solve() {
  const initData = new InitData();
  initData.readData();
  console.log(getMin(initData));
}
