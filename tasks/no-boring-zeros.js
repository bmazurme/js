function noBoringZeros(n) {
  while(!(n % 10) && n !== 0) {
    n /= 10;
  }

  return n;
}

// return +`${n}`.replace(/0*$/, "");

console.log(noBoringZeros(1450), 145);
console.log(noBoringZeros(960000), 96);
console.log(noBoringZeros(1050), 105);
console.log(noBoringZeros(-1050), -105);
console.log(noBoringZeros(-105), -105);
console.log(noBoringZeros(0), 0);
