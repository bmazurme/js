function isPythagoreanTriple(integers) {
  integers.sort((a, b) => a - b);
  return (integers[0] ** 2 + integers[1] ** 2) === integers[2] ** 2; 
}

// const [a, b, c] = integers.sort((a, b) => a - b);
// return (a ** 2 + b ** 2) === c ** 2; 
 
console.log(isPythagoreanTriple([3, 4, 5]), true);
console.log(isPythagoreanTriple([3, 5, 9]), false);
