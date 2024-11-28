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

function topSort(v, order, graph, color) {
  color[v] = 'gray';

  for (let i = 0; i < graph[v].length; i++) {
    const index = graph[v][i] - 1;

    if (color[index] === 'white') {
      topSort(index, order, graph, color);
    }
  }

  color[v] = 'black';
  order.push(v + 1);
}

function mainTopSort(graph) {
  let order = [];
  const color = Array.from({ length: graph.length }, () => 'white');

  for (let i = 0; i < graph.length; i++) {
    if (color[i] === 'white') {
      topSort(i, order, graph, color);
    }
  }

  // console.log(order);
  return order;
}

function solve() {
  const initData = new InitData();
  const [n, m] = initData.readLine().map((x) => Number(x));
  const graph = new Array(n).fill(null).map(() => []);
  initData.readArray(m).forEach(([u, v]) => {
    graph[Number(u) - 1].push(Number(v));
    // graph[Number(u) - 1].sort((a, b) => b - a);
  });
  // console.log(graph);

  const result = mainTopSort(graph);
  console.log(result.reverse().join(' '));
}
// 1 3 2 4 5
