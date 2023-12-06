function oddCount(n) {
  return n % 2 ? (n - 1) / 2 : n / 2;
}

// Math.floor(n/2)

console.log(oddCount(15), 7);
console.log(oddCount(15023), 7511);

