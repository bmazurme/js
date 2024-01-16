function getNumberFromString(s) {
  return Number(s.replace(/\D/g, ''));
}

// return +s.replace(/\D/g, "");
 
console.log(getNumberFromString('1'), 1);
console.log(getNumberFromString('123'), 123);
console.log(getNumberFromString('this is number: 7'), 7);
