function numberToPower(number, power) {
  let result = number;

  if (power === 0) {
    return 1;
  }

  for(let i = 0; i < power - 1; i++) {
    result *= number
  }

  return result;
}

// let total = 1;
// for (let i = 1; i <= power; i++) { 
//   total = total * number;
// }
// return total;

console.log(numberToPower(4, 2), 16);
console.log(numberToPower(10, 4), 10000);
console.log(numberToPower(10, 0), 1);
