function lowercaseCount(str) {
  return str.split('').reduce((a, x) => a += /[a-z]/g.test(x) ? 1 : 0, 0);
}
 
// return (str.match(/[a-z]/g) || []).length
// return str.replace(/[^a-z]/g, '').length;
 
console.log(lowercaseCount('abc'), 3);
console.log(lowercaseCount('abcABC123'), 3);
console.log(lowercaseCount('abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~'), 3);
console.log(lowercaseCount(''), 0)
console.log(lowercaseCount('ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~'), 0)
console.log(lowercaseCount('abcdefghijklmnopqrstuvwxyz'), 26);
