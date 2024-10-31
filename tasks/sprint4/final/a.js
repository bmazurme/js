// https://contest.yandex.ru/contest/24414/problems/A/?success=123083657#51450/2021_01_14/vpped1t2Rn

// ПРИНЦИП РАБОТЫ
// строится индекс по документам перебором слов/ключей [документ][ключ][повторение]
// переберются документы -> извлекаются ключи -> считаются повторения
// далее извлекаются из запроса уникальные ключи и сопоставляются с индексом перебором на пересечение
// найденные пересечения сортируем и форматируем по SEARCH_RANGE
// возвращаем результат

// ВРЕМЕННАЯ СЛОЖНОСТЬ
// построение индекса - перебор слов по документам 
// - зависит от количества документов и слов в них O(n x m) -> O(n^2) при данных одного порядка
// поиск связей - перебор ключей по документам и O(k x n x m) 
// -> O(k x n^2) при условии подачи документа в запросе
// форматирование O(f log f) в среднем случае на и O(f^2) в худшем на сортировку, также
// выборка O(f)
// - сложность составляет худшем случае - O(n^2) + O(k x n^2) + O(f^2) + O(f) -> O(n + 2n^2 + n^3)
// -> O(n + n^2 + n^3) - при условии количество документов равно количеству запросов и сами запросы
// равны документам

// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ
// Так как пространственная сложность зависит от размера данных индексов и документов n и m
// - составляет O(n) + O(m) -> O(n + m)

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

const SEARCH_RANGE = 5;
 
function getArrayFromText(line,) {
  return line.split(' ');
}

function buildIndex(documents) {
  const indexes = {};
 
  for (let i = 1; i <= documents.length; i++) {
    const document = getArrayFromText(documents[i - 1]);
 
    for (key of document) {
      if (key in indexes) {
        indexes[key][i] = i in indexes[key] ? indexes[key][i] += 1 : 1;
      } else {
        indexes[key] = { [i]: 1 };
      }
    }
  }
 
  return indexes;
}

function findLinks(indexes, query) {
  const result = {};
  const keys = new Set(getArrayFromText(query));

  keys.forEach((key) => {
    if (key in indexes) {
      for (const value in indexes[key]) {
        if (value in result) {
          result[value] += indexes[key][value];
        } else {
          result[value] = indexes[key][value];
        }
      }
    }
  });
  
  return result;
}

function convertQueryResult(dataResult) {
  const fnSort = ([sourceA, linkA], [sourceB, linkB]) => linkB - linkA || sourceA - sourceB;
  return Object.entries(dataResult).sort(fnSort);
}

function getResult(resultPath, arr) {
  for (let i = 0; i < SEARCH_RANGE; i++) {
    if (arr[i]) {
      resultPath.push(arr[i][0]);
    }
  }
}
 
function searchMain(documents, queries) {
  const indexes = buildIndex(documents);
  const result = [];
  let index = 0;
 
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const queryResult = findLinks(indexes, query);
    const resultArray = convertQueryResult(queryResult);
 
    if (resultArray.length) {
      getResult(result[index] = [], resultArray);
      result[index] = result[index++].join(' ');
    }
  }
 
  return result.join('\n');
}
 
function solve() {
  const initData = new InitData();
  const documentRows = initData.readInt();
  const documents = initData.readArray(documentRows);
  const queryRows = initData.readInt();
  const queries = initData.readArray(queryRows);
  const result = searchMain(documents, queries);
  console.log(result);
}
