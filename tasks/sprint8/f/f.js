const _readline = require('readline');

class InitData {
  constructor(stream = require('fs').createReadStream('input.txt')) {
    this._curLine = 0;
    this.n = 0;
    this.array = [];
    this.stream = stream;
    this._readline = _readline
      .createInterface({ input: stream })
      .on('line', (line) => this.set(line));
  }

  set(line) {
    if (this._curLine === 0) {
      this.n = Number(line);
    } else {
      this.array.push(line);
    }

    this._curLine++;
  }
}

function compare(a, b) {
  if (a[1] === b[1]) {
    return b[0] > a[0] ? -1 : b[0] > a[0] ? 1 : 0;
  }

  return b[1] - a[1];
}

function search(arr) {
  const acc = {};

  for (let i = 0; i < arr.length; i++) {
    acc[arr[i]] = !acc[arr[i]] ? 1 : acc[arr[i]] + 1;
  }

  return Object.entries(acc).sort(compare)[0];
}

const initData = new InitData();
const solve = () => console.log(search(initData.array)[0]);
initData.stream.on('end', solve);
