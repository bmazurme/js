const _readline = require('readline');
const fileStream = require('fs').createReadStream('input.txt');
const _reader = _readline.createInterface({
  input: fileStream
});
const _inputLines = [];
 
_reader.on('line', line => {
  _inputLines.push(line);
});
 
fileStream.on('end', solve);
 
class InitData {
  constructor() {
    this._curLine = 0;
  }
 
  readInt() {
    const n = Number(_inputLines[this._curLine]);
    this._curLine++;
  
    return n;
  }
 
  readArray(rows) {
    const array = [];
  
    for (let i = 0; i < rows; i++) {
      array.push(_inputLines[this._curLine].trim(' '));
      this._curLine++;
    }
  
    return array;
  }
}
 
function factorial(n) {
  return n === 0 ? 1 : factorial(n - 1) * n;
}

function solution(n) {
  return Math.round(factorial(2 * n) / (factorial(n) * factorial(n + 1)));
}
 
function solve() {
  const initData = new InitData();
  const n = initData.readInt();
  const result = solution(n);
  console.log(result);
} 
