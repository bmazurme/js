// https://contest.yandex.ru/contest/24414/problems/B/?success=123071408#51450/2021_01_16/huiC0I7PuM

// ПРИНЦИП РАБОТЫ
// Основные сущности выносим в классы: HashTable и вспомогательные List, Node
// для формирования ключей используем алгоритм вычисления полиномиального хеша
// ключ – индекс в массиве
// для разрешения коллизий используется связанный список (List)
// для хранения в HashTable используется массив с размером по дефолтному состоянию SIZE = 10 ** 6 / 2
// половина от размера исходных данных тестов

// ВРЕМЕННАЯ СЛОЖНОСТЬ
// запись и получение данных - в массиве O(1) так как присвоение по ключу и получение по индексу,
// удаление также O(1) так как по факту происходит присвоение null по индексу
// операции в связанном списке в среднем случае O(1) и O(n) в худшем
// итоговая О(1) + O(n) -> O(n)

// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ
// Так как пространственная сложность зависит от размера массива - составляет O(n)
 
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
}
 
const SIZE = 10 ** 6 / 2;
const HASH_A = 127;
const HASH_M = 10 ** 6 + 7;
 
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
 
class List {
  constructor(head = null) {
    this._head = head;
    this._tail = null;
  }
 
  add(key, value) {
    const node = new Node(key, value);
 
    if (!this._head || !this._tail) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }
  }
 
  get(key) {
    if (this._head) {
      let current = this._head;
 
      while (current) {
        if (current.key === key) {
          return current;
        }
  
        current = current.next;
      }
    }
 
    return null;
  }
 
  remove(key) {
    if (this._head) {
      let result = null;
      let current = this._head;
  
      if (this._head.key === key) {
        result = this._head;
        this._head = this._head.next;
      }
  
      while (current.next) {
        if (current.next.key === key) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
  
      if (this._tail.key === key) {
        result = this._tail;
        this._tail = current;
      }
  
      return result;
    }
 
    return null;
  }
}
 
class HashTable {
  constructor (size = SIZE, a = HASH_A, m = HASH_M) {
    this.size = size;
    this._store = new Array(size);
    this._a = a;
    this._m = m;
  }
 
  _getHash(str) {
    let hash = 0;
 
    for (let i = 0; i < str.length; i++) {
      const charCode = str[i].charCodeAt();
      hash = i !== str.length - 1
        ? hash + charCode * this._a % this._m
        : hash + charCode % this._m;
    }
 
    return hash;
  }
 
  put(key, value) {
    const hash = this._getHash(key);
 
    if (hash in this._store) {
      const list = this._store[hash];
      const item = list.get(key);
 
      if (item) {
        item.value = value;
      } else {
        list.add(key, value);
      }
    } else {
      const list = new List();
      list.add(key, value);
      this._store[hash] = list;
    }
  }
 
  get(key) {
    const hash = this._getHash(key);
 
    if (hash in this._store) {
      const list = this._store[hash];
      const item = list.get(key);
 
      if (item) {
        return item.value;
      }
    }
 
    return 'None';
  }
 
  delete(key) {
    const hash = this._getHash(key);
 
    if (hash in this._store) {
      const list = this._store[hash];
      const item = list.get(key);
 
      if (item) {
        let result = item.value;
        list.remove(key);
 
        if (list.head === null) {
          this._store[hash] = null;
        }
        
        return result;
      }
    }
 
    return 'None';
  }
}
 
function solve() {
  const initData = new InitData();
  const hashTable = new HashTable();
 
  let result = [];
  const requestsLength = initData.readInt();
  const rawRequests = initData.readArray(requestsLength);
 
  for (let i = 0; i < rawRequests.length; i++) {
    const [ action, key, val ] = rawRequests[i].split(' ');
    const value = hashTable[action](key, val);
    
    if (value) {
      result.push(value);
    }
  }
 
  console.log(result.join('\n'));
}
