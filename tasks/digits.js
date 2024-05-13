 
function digits(n) {
  return `${n}`.length;
  // return n.toString().length;
}
 
console.log(digits(0), 1);
console.log(digits(9), 1);
console.log(digits(66), 2);
console.log(digits(12345), 5);
console.log(digits(128685), 6);
console.log(digits(9876543210), 10);
console.log(digits(9007199254740991), 16);
