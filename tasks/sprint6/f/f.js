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

function BFS(graph, s, e) {
  let color = Array.from({ length: graph.length }, () => 'white');
  let distance = Array.from({ length: graph.length }, () => null);

  let route = [];
  let planned = [];
  planned.push(s);
  route.push(s);
  color[s - 1] = 'gray';
  distance[s - 1] = 0;

  while (planned.length > 0) {
    let u = planned.shift() - 1;
    graph[u].sort((a, b) => a - b);

    graph[u].forEach((v) => {
      if (color[v - 1] === 'white') {
        distance[v - 1] = distance[u] + 1;
        color[v - 1] = 'gray';
        planned.push(v);
        route.push(v);
      }
    });

    color[u] = 'black';
  }

  return distance[e - 1];
}

function solve() {
  const initData = new InitData();
  const [n, m] = initData.readLine().map((x) => Number(x));
  const edges = initData.readArray(m).map(([u, v]) => [+u, +v]);
  const [start, end] = initData.readLine().map((x) => Number(x));
  graph = new Array(n).fill(null).map(() => []);

  edges.forEach(([u, v]) => {
    graph[u - 1].push(v);
    graph[v - 1].push(u);
  });

  const result = BFS(graph, start, end);
  console.log(result !== null ? result : -1);
}
