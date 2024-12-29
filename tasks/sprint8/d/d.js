const _readline = require('readline');

class InitData {
  constructor(stream = require('fs').createReadStream('input.txt')) {
    this._curLine = 0;
    this.n = null;
    this.arr = [];
    this.stream = stream;
    this._readline = _readline
      .createInterface({ input: stream })
      .on('line', (line) => this.set(line));
  }

  set(line) {
    if (this._curLine === 0) {
      this.n = Number(line);
    } else {
      this.arr.push(line);
    }
    this._curLine++;
  }
}

function find(arr) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let j = 0;

    while (j < result.length &&
      j < arr[i].length &&
      arr[i][j] === result[j]) {
      j++;
    }

    if (result.length !== j) {
      result = arr[i].substring(0, j);
    }
  }

  return result.length;
}

const initData = new InitData();
const solve = () => console.log(find(initData.arr));
initData.stream.on('end', solve);
