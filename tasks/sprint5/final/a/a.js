// https://contest.yandex.ru/contest/24810/run-report/125115823/

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
 
  readArray(rows) {
    const array = [];
  
    for (let i = 0; i < rows; i++) {
      array.push(_inputLines[this._curLine].trim(' '));
      this._curLine++;
    }
  
    return array;
  }

  convert(rawData, entity) {
    return rawData.map((x) => new entity(...x.trim(' ').split(' ')))
  }
}

class Player {
  constructor(name, solutions, fine) {
    this.name = name;
    this.solutions = Number(solutions);
    this.fines = Number(fine);
  }
}

function compare(a, b) {
  if (a.solutions === b.solutions) {
    if (a.fines === b.fines) {
      return a.name < b.name;
    }

    return a.fines < b.fines;
  }

  return (a.solutions > b.solutions);
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && compare(arr[largest], arr[left])) {
    largest = left;
  }

  if (right < n && compare(arr[largest], arr[right])) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

function heapSort(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let j = n - 1; j >= 0; j--) {
    [arr[0], arr[j]] = [arr[j], arr[0]];
    heapify(arr, j, 0);
  }

  return arr;
}

function solve() {
  const initData = new InitData();
  const rows = initData.readInt();
  const rawArray = initData.readArray(rows);
  const players = initData.convert(rawArray, Player);
  const result = heapSort(players);
  result.forEach(({ name }) => console.log(name));
}
