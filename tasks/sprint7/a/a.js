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
    this.array = this.readLine().split(' ').map(Number);
  }
}

function getMax(arr) {
  let result = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      result += arr[i] - arr[i - 1];
    }
  }

  return result;
}

function solve() {
  const initData = new InitData();
  initData.readData();
  console.log(getMax(initData.array));
}
