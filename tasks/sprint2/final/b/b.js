// ПРИНЦИП РАБОТЫ

// Проходим массив в цикле,
// - если встречаем число заносим в стек,
// - если встречаем оператор выбираем из стека 2 элемента и выполняем действие - результат заносим в стек
// Возвращаем верхний элемент стека

// ВРЕМЕННАЯ СЛОЖНОСТЬ
// Так как выполняются за один цикл - составляет O(т)

// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ
// Зависит от размера данных - составляет O(n)

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

class Calculate {
  constructor () {

  }

  '+' (a, b) {
    return a + b;
  }
  
  '*' (a, b) {
    return a * b;
  }

  '-' (a, b) {
    return a - b;
  }

  '/' (a, b) {
    if (b === 0) {
      throw new Error('b === 0');
    }

    return Math.floor(a / b);
  }

  do(array) {
    const stack = [];
  
    for (let i = 0; i < array.length; i++) {
      if (/[\d]/.test(array[i])) {
        stack.push(+array[i]);
      } else {
        const b = stack.pop();
        const a = stack.pop();
        const result = this[array[i]](a, b);
        stack.push(result);
      }
    }
  
    return stack[stack.length - 1];
  }
}

function solve() {
  const array = readArray();
  const calculate = new Calculate();
  const result = calculate.do(array);
  console.log(result);
}

function readArray() {
  const line = _inputLines[_curLine];
  const arr = line.trim(' ').split(' ');
  _curLine++;

  return arr;
}
