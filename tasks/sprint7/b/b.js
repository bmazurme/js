const _readline = require('readline');
const fileStream = require('fs').createReadStream('input.txt');
const _reader = _readline.createInterface({ input: fileStream });
const _inputLines = [];
_reader.on('line', line => _inputLines.push(line));
fileStream.on('end', solve);
 
class InitData {
  constructor() {
    this._curLine = 0;
    this.rows = 0;
    this.array = [];
  }

  readLine() {
    const line = _inputLines[this._curLine];
    this._curLine++;

    return line;
  }
 
  readData() {
    this.rows = Number(this.readLine());

    for (let i = 0; i < this.rows; i++) {
      this.array.push(this.readLine().split(' ').map(Number));
    }
  }
}

function getMax(arr) {
  arr.sort((a, b) => a[0] - b[0]);
  arr.sort((a, b) => a[1] - b[1]);
  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] >= result[result.length - 1][1]) {
      result.push(arr[i]);
    }
  }

  return result.map((x) => x.join(' '));
}

function solve() {
  const initData = new InitData();
  initData.readData();
  const result = getMax(initData.array);
  console.log(result.length);
  result.forEach((x) => console.log(x));
}
