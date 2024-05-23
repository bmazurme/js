function checkExam(array1, array2) {
  const array = array2.map((x, i) => x === array1[i] ? 4 : x === '' ? 0 : -1);
  const result = array.reduce((a, x) => a + x);
 
  return  result > 0 ? result : 0;
}
 
console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']), 6);
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b',  '']), 7);
console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']), 16);
console.log(checkExam(['b', 'c', 'b', 'a'], ['',  'a', 'a', 'c']), 0); 
