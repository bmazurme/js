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

function getConnectedComponents(graph) {
  let result = [];
  let color = Array.from({ length: graph.length }, () => 'white');

  for (let i = 0; i < graph.length; i++) {
    const block = [];
    let planned = [];
    planned.push(i + 1);

    if (color[i] === 'white') {
      block.push(i + 1);
    }
    
    color[i] = 'gray';
  
    while (planned.length > 0) {
      let u = planned.shift() - 1;
      graph[u];
  
      graph[u].forEach((v) => {
        if (color[v - 1] === 'white') {
          block.push(v);
          color[v - 1] = 'gray';
          planned.push(v);
        }
      });
  
      color[u] = 'black';
    }

    if (block.length) {
      result.push(block.sort((a, b) => a - b));
    }
  }

  return result;
}

function solve() {
  const initData = new InitData();
  const [n, m] = initData.readLine().map((x) => Number(x));
  const edges = initData.readArray(m).map(([u, v]) => [+u, +v]);
  graph = new Array(n).fill(null).map(() => []);

  edges.forEach(([u, v]) => {
    graph[u - 1].push(v);
    graph[v - 1].push(u);
  });
  const result = getConnectedComponents(graph);
  console.log(result.length);
  result.forEach((x) => console.log(x.join(' ')))
}
