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

function DFS(graph, start, colors, result) {
  const stack = [start];

  while (stack.length) {
    const v = stack.pop();

    if (colors[v] === 'white') {
      colors[v] = 'gray';
      result.push(v);
      stack.push(v);
      graph[v].sort((a, b) => b - a);

      for (let i = 0; i < graph[v].length; i++) {
        if (colors[graph[v][i]] === 'white') {
          stack.push(graph[v][i]);
        }
      }
    } else {
      colors[v] = 'black';
    }
  }
}

function solve() {
  const initData = new InitData();
  const [n, m] = initData.readLine().map((x) => Number(x));
  const edges = initData.readArray(m).map(([u, v]) => [+u, +v ]);
  const start = initData.readInt();
  const colors = new Array(n + 1).fill('white');
  const graph = new Array(n + 1).fill(null).map(() => []);
  const result = [];

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }

  DFS(graph, start, colors, result);
  console.log(result.join(' '))
}
