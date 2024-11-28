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

class Queue {
  constructor() {
    this.queue = [];
    this.queueSize = 0;
    this.head = 0;
    this.tail = 0;
  }

  put(x) {
    this.queue[this.tail] = x;
    this.tail = (this.tail + 1);
    this.queueSize += 1;
  }

  isEmpty() {
    return this.queueSize === 0;
  }

  get() {
    if (this.isEmpty()) {
      return 'error';
    }

    let x = this.queue[this.head];
    this.queue[this.head] = null;
    this.head = (this.head + 1);
    this.queueSize -= 1;

    return x;
  }

  size() {
    return this.queueSize;
  }
}


function BFS(graph, s, e) {
  const planned = new Queue();
  let color = Array.from({ length: graph.length }, () => 'white');
  let distance = Array.from({ length: graph.length }, () => null);

  let route = [];
  // let planned = [];
  // planned.push(s);
  planned.put(s);
  route.push(s);
  color[s - 1] = 'gray';
  distance[s - 1] = 0;
  let result = 0;

  while (planned.queueSize > 0) {
    // let u = planned.shift() - 1;
    let u = planned.get() - 1;
    graph[u];

    graph[u].forEach((v) => {
      if (color[v - 1] === 'white') {
        distance[v - 1] = distance[u] + 1;
        if (distance[v - 1] > result) {
          result = distance[v - 1];
        }
        color[v - 1] = 'gray';
        // planned.push(v);
        planned.put(v);
        route.push(v);
      }
    });

    color[u] = 'black';
  }

  return result;
}

function solve() {
  const initData = new InitData();
  const [n, m] = initData.readLine().map((x) => Number(x));
  const edges = initData.readArray(m).map(([u, v]) => [+u, +v]);
  const [start] = initData.readLine().map((x) => Number(x));
  graph = new Array(n).fill(null).map(() => []);

  edges.forEach(([u, v]) => {
    graph[u - 1].push(v);
    graph[v - 1].push(u);
  });

  const result = BFS(graph, start);
  console.log(result);
}
