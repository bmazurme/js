const _readline = require('readline');
const fileStream = require('fs').createReadStream('input.txt');
const _reader = _readline.createInterface({ input: fileStream });
const _inputLines = [];
_reader.on('line', line => _inputLines.push(line));
fileStream.on('end', solve);

class InitData {
  constructor() {
    this._curLine = 0;
    this.n = 0;
    this.array = [];
  }

  readLine() {
    const line = _inputLines[this._curLine];
    this._curLine++;

    return  Number(line);
  }
  
  readData() {
    this.n = this.readLine();

    for (let i = 0; i < this.n; i++) {
      this.array.push(this.readLine());
    }
  }
}

function cafe(data) {
  const used = [];
  const dp = Array.from({ length: data.n + 1 }, (_, i) => 
    Array.from({ length: data.n + 1 }, (_, j) => i === 0 && j === 0 ? 0 : Infinity));

  for (let i = 1; i <= data.n; i++) {
    for (let j = 0; j < i; j++) {
      const price = data.array[i - 1];
      dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + price);

      if (price > 500) {
        dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i - 1][j] + price);
      }

      if (j >= 1) {
        dp[i][j - 1] = Math.min(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  const sum = dp[data.n][0];
  let j = 0;

  for (let index = dp[data.n].length - 1; index >= 0; index--) {
    if (dp[data.n][index] === sum) {
      j = index;
      break;
    }
  }

  for (let i = data.n; i >= 1; i--) {
    const cost = data.array[i - 1];
    const canAddCoupon = dp[i][j] === dp[i - 1][j + 1];

    if (j <= 0) {
      if (i >= 1) {
        if (cost > 500) {
          used.push(i);
          j += 1;
        } else if (canAddCoupon) {
          used.push(i);
          j += 1;
        }
      }
    } else {
      if (cost > 500) {
        if (canAddCoupon) {
          used.push(i);
          j += 1;
        } else {
          j -= 1;
        }
      } else if (canAddCoupon) {
        used.push(i);
        j += 1;
      }
    }
  }

  return [sum, used]
}

function solve() {
  const initData = new InitData();
  initData.readData();
  const [sum, used] = cafe(initData);
  console.log(`${sum} ${used.length}`);
  console.log(used.reverse().join(' '));
}
