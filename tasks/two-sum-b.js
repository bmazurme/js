function twoSum(array, targetSum) {
  // Ваше решение
  const len = array.length;
 
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
 
  return [];
}
 
function solve() {
    // const n = readInt();
    const array = readArray();
    const targetSum = readInt();
    const ans = twoSum(array, targetSum);
 
    if (ans.length === 0) {
        console.log('None');  
    } else {
        // process.stdout.write(`${ans.join(' ')}`);
        console.log(`${ans.join(' ')}`);
    }
}
 
function readInt() {
    // const n = Number(_inputLines[_curLine]);
    // _curLine++;
    // return n;
    return 2;
}
 
function readArray() {
    // var arr = _inputLines[_curLine].trim(' ').split(' ').map(num => Number(num));
    // _curLine++;
    // return arr;
    return [-1, -1, -9, -7, 3, -6];
}
 
// -1 -1 -9 -7 3 -6
// 2
solve();
