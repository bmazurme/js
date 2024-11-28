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

function getTime(graph) {
  const color = Array.from({ length: graph.length }, () => -1);
  const start = Array.from({ length: graph.length }, () => 0);
  const end = Array.from({ length: graph.length }, () => 0);
  const stack = [0];
  let counter = 0;

  while (stack.length) {
    let v = stack.pop();

    if (color[v] === -1) {
      start[v] = counter++;
      color[v] = 0;
      stack.push(v);
      
      for (let i = 0; i < graph[v].length; i++) {
        const index = graph[v][i] - 1;

        if (color[index] === -1) {
          stack.push(index);
        }
      }
    } else {
      if (color[v] === 0) {
        color[v] = 1;
        end[v] = counter++;
      }
    }
  }

  return [start, end];
}

function solve() {
  const initData = new InitData();
  const [n, m] = initData.readLine().map((x) => Number(x));
  const graph = new Array(n).fill(null).map(() => []);
  initData.readArray(m).forEach(([u, v]) => {
    graph[u - 1].push(v);
    graph[u - 1].sort((a, b) => b - a);
  });

  const [start, end] = getTime(graph);
  start.forEach((s, i) => console.log(`${s} ${end[i]}`));
}
