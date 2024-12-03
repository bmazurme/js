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

function relax(dist, u, v, weight) {
  if (dist[v - 1] > dist[u] + weight(u, v - 1)) {
    dist[v - 1] = dist[u] + weight(u, v - 1);
  }
}

function getMinDistNotVisitedVertex(graph, visited, dist) {
  let currentMinimum = Number.MAX_VALUE;
  let currentMinimumVertex = null;

  for (let i = 0; i < graph.length; i++) {
    if (!visited[i] && dist[i] < currentMinimum) {
      currentMinimum = dist[i];
      currentMinimumVertex = i;
    }
  }

  return currentMinimumVertex;
}

function dijkstra(graph, s, weight) {
  const dist = Array.from({ length: graph.length }, () => Number.MAX_VALUE);
  const visited = Array.from({ length: graph.length }, () => false);
  dist[s] = 0;

  while (true) {
    let u = getMinDistNotVisitedVertex(graph, visited, dist);

    if (u === null || dist[u] === Number.MAX_VALUE) {
      break;
    }

    visited[u] = true;

    for (let i = 0; i < graph[u].length; i++) {
      relax(dist, u, graph[u][i], weight);
    }
  }

  return dist.map((x) => x === Number.MAX_VALUE ? -1 : x);
}

function Weight() {
  const state = {};
  const getKey = (u, v) => `${u < v ? u : v}-${u > v ? u : v}`;

  function get(u, v) {
    return state[getKey(u, v)];
  }

  get.add = function (u, v, d) {
    const key = getKey(u, v);

    if (!state[key]) {
      state[key] = d;
    } else if (state[key] > d) {
      state[key] = d;
    }
  }

  return get;
}

function solve() {
  const initData = new InitData();
  const [n, m] = initData.readLine().map((x) => Number(x));
  const graph = new Array(n).fill(null).map(() => []);
  const weight = new Weight();
  initData.readArray(m).forEach(([u, v, d]) => {
    graph[Number(u) - 1].push(Number(v));
    graph[Number(v) - 1].push(Number(u));
    weight.add(u - 1, v - 1, Number(d));
    // weight.add(v - 1, u - 1, Number(d));
  });

  for (let i = 0; i < n; i++) {
    console.log(dijkstra(graph, i, weight).join(' '));
  }
}
