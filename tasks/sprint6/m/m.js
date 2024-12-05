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
 
  buildGraph(rows, graph) {
    for (let i = 0; i < rows; i++) {
      const [u, v] = _inputLines[this._curLine].trim(' ').split(' ');
      graph[u - 1].push(v - 1);
      graph[v - 1].push(u - 1);
      this._curLine++;
    }
  }
}

function isDicotyledonous(graph) {
  const colors = Array.from({ length: graph.length }, () => 0);
  let color = 1;
  let result = true;

  for (let i = 0; i < graph.length; i++) {
    const stack = [[i, color]];

    while (stack.length > 0) {
      const [idx, clr] = stack.pop();

      if (colors[idx] === 0) {
        colors[idx] = clr;

        for (let j = 0; j < graph[idx].length; j++) {
          const u = graph[idx][j];

          if (colors[u] === clr) {
            result = false;
          }

          if (colors[u] === 0) {
            stack.push([u, clr === 1 ? 2 : 1]);
          }
        }
      }
    }
  }

  return result;
}

function solve() {
  const initData = new InitData();
  const [n, m] = initData.readLine().map((x) => Number(x));
  const graph = Array.from({ length: n }, () => []);
  initData.buildGraph(m, graph);
  console.log(isDicotyledonous(graph) ? 'YES' : 'NO');
}
