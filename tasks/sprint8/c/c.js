const _readline = require('readline');

class InitData {
  constructor(stream = require('fs').createReadStream('input.txt')) {
    this._curLine = 0;
    this.s = null;
    this.stream = stream;
    this._readline = _readline
      .createInterface({ input: stream })
      .on('line', (line) => this.set(line));
  }

  set(line) {
    this.s = line;
    this._curLine++;
  }
}

function find(s) {
  const dict = s.split('').reduce((a, x) => !a[x] ? { ...a, [x]: 1 } : { ...a, [x]: a[x] += 1 }, {});
  const keys = Object.keys(dict).sort();
  const length = Object.values(dict).reduce((a, x) => a + x, 0);
  const result = Array.from({ length }, () => '');
  const center = Math.floor(length / 2) + 1;
  let j = 0;

  for (let char of keys) {
    if (dict[char] % 2 === 1) {
      if (!result[center]) {
        result[center] = char;
      }
      dict[char]--;
    }

    for (let i = 0; i < Math.floor(dict[char] / 2); i++) {
      result[j] = result[length - j] = char;
      j++;
    }
  }

  return result.join('');
}

const initData = new InitData();
const solve = () => console.log(find(initData.s));
initData.stream.on('end', solve);
