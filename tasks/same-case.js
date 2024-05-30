function sameCase(a, b) {
  if (!/^[a-z]/i.test(a) || !/^[a-z]/i.test(b)) {
    return -1;
  }
 
  return /^[a-z]/.test(a) && /^[a-z]/.test(b) || /^[A-Z]/.test(a) && /^[A-Z]/.test(b) ? 1 : 0;
}
 
console.log(sameCase('C', 'B'), 1);
console.log(sameCase('b', 'a'), 1);
console.log(sameCase('d', 'd'), 1);
console.log(sameCase('A', 's'), 0);
console.log(sameCase('c', 'B'), 0);
console.log(sameCase('b', 'Z'), 0);
console.log(sameCase('\t', 'Z'), -1);
console.log(sameCase('H', ':'), -1);
