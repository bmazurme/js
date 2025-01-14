const _readline = require('readline');
const fs = require('fs');

class InitData {
  constructor(stream = fs.createReadStream('input.txt')) {
    this._curLine = 0;
    this.n = 0;
    this.k = 0;
    this.line = null;
    this.stream = stream;
    this._readline = _readline
      .createInterface({ input: stream })
      .on('line', (line) => this.set(line));
  }

  set(line) {
    if (this._curLine === 0) {
      const [n, k] = line.split(' ').map(Number);
      this.n = n;
      this.k = k;
    } else {
      this.line = line;
    }

    this._curLine++;
  }
}

function prefixHash(a, m, s) {
  const acc = [s[0].charCodeAt() % m];

  for (let i = 1; i < s.length; i++) {
    acc[i] = ((acc[i - 1] * a % m) + s[i].charCodeAt()) % m;
  }

  return acc;
}

function modFix(n, m) {
  return ((n % m) + m) % m;
}

function powFix(a, pow, m) {
  let result = 1;
  let base = a % m;

  while (pow > 0) {
    if (pow % 2 === 1) {
      result = (result * base) % m;
    }
    base = (base * base) % m;
    pow = Math.floor(pow / 2);
  }

  return result;
}

function getKey(left, right, acc, m, x) {
  return modFix(acc[right - 1] - modFix(((acc[left - 2] | 0) * x), m), m);
}

function getSubstr(line, n, k) {
  const a = 31;
  const a1 = 37;
  const m = 10000003;
  const m1 = 10000009;
  const dict = new Map();
  const result = [];
  const acc = prefixHash(a, m, line);
  const acc1 = prefixHash(a1, m1, line);
  const x = powFix(a, n, m);
  const x1 = powFix(a1, n, m1);

  for (let left = 0; left <= line.length - n; left++) {
    let right = left + n - 1;
    const key = `${getKey(left, right, acc, m, x)}${getKey(left, right, acc1, m1, x1)}`;

    if (dict.has(key)) {
      dict.get(key).count++;
    } else {
      dict.set(key, { count: 1, index: left - 1 });
    }
  }

  for (const [key, value] of dict) {
    if (value.count >= k) {
      result.push(value.index);
    }
  }

  return result;
}

const initData = new InitData();
const solve = () => console.log(getSubstr(initData.line, initData.n, initData.k).join(' '));
initData.stream.on('end', solve);
