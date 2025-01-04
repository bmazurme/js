const _readline = require('readline');

class InitData {
  constructor(stream = require('fs').createReadStream('input.txt')) {
    this._curLine = 0;
    this.n = 0;
    this.m = 0;
    this.arr1 = [];
    this.arr2 = [];
    this.stream = stream;
    this._readline = _readline
      .createInterface({ input: stream })
      .on('line', (line) => this.set(line));
  }

  set(line) {
    if (this._curLine === 0) {
      this.n = Number(line);
    } else if (this._curLine > 0 && this._curLine < this.n + 1) {
      this.arr1.push(line);
    } else if (this._curLine === this.n + 1) {
      this.m = Number(line);
    } else if (this._curLine > this.n + 1 && this._curLine < this.n + this.m + 2) {
      this.arr2.push(line);
    }
    this._curLine++;
  }
}

function getMatchingClassNames(pattern, patternMap) {
  let result = [];

  for (let [key, value] of patternMap) {
    if (key.startsWith(pattern)) {
      result.push(...value);
    }
  }

  return result;
}

function find({ arr1, arr2 }) {
  const patternMap = new Map();

  arr1.forEach((className) => {
    let pattern = '';
    for (let char of className) {
      if (char === char.toUpperCase()) {
        pattern += char;
      }
    }
    
    if (!patternMap.has(pattern)) {
      patternMap.set(pattern, []);
    }
    patternMap.get(pattern).push(className);
  });

  for (let i = 0; i < arr2.length; i++) {
    getMatchingClassNames(arr2[i], patternMap).sort().forEach((x) => console.log(x));
  }
}

const initData = new InitData();
const solve = () => find(initData);
initData.stream.on('end', solve);
