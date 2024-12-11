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
    this.rows = 0;
    this.array = [];
  }

  readLine() {
    const line = _inputLines[this._curLine];
    this._curLine++;

    return line;
  }
 
  readData() {
    this.size = Number(this.readLine());
    this.rows = Number(this.readLine());

    for (let i = 0; i < this.rows; i++) {
      this.array.push(this.readLine().split(' ').map(Number));
    }
  }
}

function getMax(arr, max) {
  let result = 0;
  arr.sort((a, b) => a[0] - b[0]);

  while (arr.length && max) {
    let [weight, cost] = arr.pop();

    while (cost && max) {
      result += weight;
      cost--;
      max--;
    }
  }

  return result;
}

function solve() {
  const initData = new InitData();
  initData.readData();
  console.log(getMax(initData.array, initData.size));
}
