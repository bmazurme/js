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
    this.m = 0;
    this.edges = [];
    this.A = 0;
    this.B = 0;
  }

  readLine() {
    const line = _inputLines[this._curLine];
    this._curLine++;

    return line;
  }
  
  readData() {
    const [n, m] = this.readLine().split(' ').map(Number);
    this.n = n;
    this.m = m;

    for (let i = 0; i < m; i++) {
      this.edges.push(this.readLine().split(' ').map(Number));
    }

    const [A, B] = this.readLine().split(' ').map(Number);
    this.A = A;
    this.B = B;
  }
}

function countPaths(data) {
  const MOD = 1e9+7;
  const graph = Array.from({ length: data.n + 1 }, () => []);
  data.edges.forEach(([u, v]) => graph[u].push(v));
  const paths = Array.from({ length: data.n + 1 }, () => 0);
  const inDegree = Array.from({ length: data.n + 1 }, () => 0);
  paths[data.A] = 1;
  data.edges.forEach(([u, v]) => inDegree[v]++);
  const queue = [];

  for (let i = 1; i <= data.edges.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const u = queue.shift();

    for (const v of graph[u]) {
      paths[v] = (paths[v] + paths[u]) % MOD;
      inDegree[v]--;

      if (inDegree[v] === 0) {
        queue.push(v);
      }
    }
  }

  return paths[data.B];
}

function solve() {
  const initData = new InitData();
  initData.readData();
  console.log(countPaths(initData));
}
