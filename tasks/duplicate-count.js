function duplicateCount(text) {
  const arr = text.toLowerCase().split('');
  return [...new Set(arr)].reduce((a, x) => a += (arr.filter((c) => x === c).length > 1) ? 1 : 0, 0);
}
 
console.log(duplicateCount(''), 0);
console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2,'should ignore case');
console.log(duplicateCount('Indivisibility'), 1)
console.log(duplicateCount('Indivisibilities'), 2, 'characters may not be adjacent')