function toBinary(n) {
  return Number((n >>> 0).toString(2));
}

// let toBinary = n => +n.toString(2)

console.log(toBinary(1), 1);
console.log(toBinary(2), 10);
console.log(toBinary(3), 11);
console.log(toBinary(5), 101);  
