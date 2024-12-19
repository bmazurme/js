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
    this.size = Number(this.readLine());
    this.matrix = this.readLine().split(' ').map(Number);
  }
}

function getMax(data) {
  const dp = Array.from({ length: data.size }, () => 1);
  const prev = Array.from({ length: data.size }, () => -1);

  let size = 1;
  let index = 0;

  let result = '';

  for (let i = 1; i < data.size; i++) {
    for (let j = 0; j < i; j++) {
      if (data.matrix[i] > data.matrix[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }

    if (dp[i] > size) {
      size = dp[i];
      index = i;
    }
  }

  for (let i = index; i >= 0; i = prev[i]) {
    result = `${i + 1} ${result}` 
  }

  return [size, result];
}

function solve() {
  const initData = new InitData();
  initData.readData();
  const [size, array] = getMax(initData);
  console.log(size);
  console.log(array);
}
