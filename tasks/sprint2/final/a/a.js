// https://contest.yandex.ru/contest/22781/run-report/120563027/

// ПРИНЦИП РАБОТЫ

// Реализуем класс-контейнер заданного размера size, данные храним в массиве items,
// если значение массива по индексу равно null – считаем его пустым, пустым считаем
// контейнер – если у него все элементы массива равны null. Добавляем индексы для 
// указания начала и конца записываемых данных – head и tail, еще два поля добавляем
// для хранения максимального размера контейнера size и текущего размера currentSize.
// Индекс head движется слева направо при добавлении в начало и справа налево
// при удалении в начале.
// Индекс tail движется справа налево при добавлении в конец и слева направо
// при удалении в конце.
// Если контейнер заполнен индексы не меняются (size === размера currentSize).
// Смещение индексов – например если в заполненном контейнере - был удален элемент
// слева или справа скидываем индекс для head -  head + 1 mod size (зацикливаем)
// или для tail - size – 1 (зацикливаем)
// Класс реализует следующие методы:
// push_front - добавляем в контейнер, осуществляется по индексу - head,
// если контейнер заполнен (size === currentSize) - возвращаем error
// (добавление новых элементов останавливаем) иначе добавляем элемент увеличиваем currentSize
// pop_front - удаление из контейнера по индексу - head, если контейнер пустой
// - возвращаем error. Если по индексу head есть элемент возвращаем его и по
// адресу приравниваем к null, уменьшаем currentSize
// push_back - добавление в контейнер, осуществляется по индексу - tail, если контейнер
// заполнен (size === currentSize) - возвращаем error (добавление новых элементов
// останавливаем) иначе добавляем элемент увеличиваем currentSize
// pop_back - удаление из контейнера по индексу - tail, если контейнер пустой
// - возвращаем error.
// Если по индексу tail есть элемент возвращаем его и по адресу приравниваем
// к null, уменьшаем currentSize

// ВРЕМЕННАЯ СЛОЖНОСТЬ
// Так как выполняются операции получение значения по индексу или перезапись значения
// по индексу в массиве фиксированной длинны – каждая из операций выполняется за O(1)

// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ
// Так как пространственная сложность зависит от размера дека - составляет O(n)

const _readline = require('readline');
const fileStream = require('fs').createReadStream('input.txt');

const _reader = _readline.createInterface({
  // input: process.stdin
  input: fileStream
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
  _inputLines.push(line);
});

// process.stdin.on('end', solve);
fileStream.on('end', solve);

class Deque  {
  constructor(size) {
    this.items = Array(size).fill(null);
    this.size = size;
    this.head = 0;
    this.tail = size - 1;
    this.currentSize = 0;
  }
  
  push_front(value) {
    if (this.size === this.currentSize) {
      throw new Error('Deque size exceeded. Item was not added.');
    }

    this.items[this.head] = value;
    this.head = (this.head + 1) % this.size;
    this.currentSize += 1;
  }

  pop_back() {
    if (this.currentSize === 0) {
      throw new Error('Deck is empty. Deletion was not performed.');
    }

    const index = (this.tail + 1) % this.size;
    const item = this.items[index];
    this.items[index] = null;
    this.tail = index;
    this.currentSize -= 1;

    return item;
  }

  pop_front() {
    if (this.currentSize === 0) {
      throw new Error('Deck is empty. Deletion was not performed.');
    }

    let index = this.head - 1;

    if (index < 0) {
      index = this.size - 1;;
    }
    const item = this.items[index];
    this.items[index] = null;
    this.head = index;
    this.currentSize -= 1;

    return item;
  }

  push_back(value) {
    if (this.currentSize === this.size) {
      throw new Error('Deque size exceeded. Item was not added.');
    }

    this.items[this.tail] = value;
    this.tail = this.tail - 1;
    if (this.tail < 0) {
      this.tail = this.size - 1;
    }
    this.currentSize += 1;
  }
}

function solve() {
  const rows = readInt();
  const maxSize = readInt();
  const array = readArray(rows);
  const deque = new Deque(maxSize);

  // console.time('time');
  array.map((x) => {
    const [action, arg] = x.split(' ');
    let result;
    try {
      result = deque[action](Number(arg));
    } catch (e) {
      // console.log(e);
      result = 'error';
    }
    return result;
  }).filter((x) => x !== undefined).forEach((x) => console.log(x));
  // console.timeEnd('time');
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;

  return n;
}

function readArray(rows) {
  const array = [];

  for (let i = 0; i < rows; i++) {
    array.push(_inputLines[_curLine].trim(' '));
    _curLine++;
  }

  return array;
}
