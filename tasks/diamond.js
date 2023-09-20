function diamond(n) {
  if (n < 1 || n % 2 === 0) {
    return null;
  }

  let j = 1;
  let str = '';
  let mid = ((n + 1) / 2) - 1;

  for (let i = 0; i < n; i++) {
    str += `${' '.repeat((n - j) / 2)}${'*'.repeat(j)}\n`;

    j += i < mid ? 2 : -2;
  }
   
  return str;
}

console.log(diamond(-3))
console.log(diamond(0))
console.log(diamond(1))
console.log(diamond(2))
console.log(diamond(3))
console.log(diamond(4))
console.log(diamond(5))
