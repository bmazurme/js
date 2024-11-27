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

  readLine() {
    const [n, m] = _inputLines[this._curLine].trim(' ').split(' ');
    this._curLine++;
  
    return [n, m];
  }
 
  readArray(rows) {
    const array = [];

    for (let i = 0; i < rows; i++) {
      array.push(_inputLines[this._curLine].trim(' ').split(' '));
      this._curLine++;
    }
  
    return array;
  }
}

function solution(n, arr) {
  const matrix = new Array(n).fill(new Array(n).fill(0));
  arr.forEach(([u, v]) => matrix[u - 1] = matrix[u - 1].map((x, i) => i === v - 1 ? 1 : x));

  return matrix;
}
 
function solve() {
  const initData = new InitData();
  const [n, m] = initData.readLine().map((x) => Number(x));
  const arr = initData.readArray(m).map(([u, v]) => [+u, +v ]);
  const result = solution(n, arr);
  result.forEach((x) => console.log(x.join(' ')));
} 
