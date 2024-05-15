function calculator(a, b, sign) {
  if (sign === '+' && typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (sign === '-' && typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else if (sign === '*' && typeof a === 'number' && typeof b === 'number') {
    return a * b;
  } else if (sign === '/' && typeof a === 'number' && typeof b === 'number') {
    return a / b;
  } else {
    return 'unknown value';
  }
}
 
// try {
//   return eval(a + sign + b);
// } catch(e) {
//   return 'unknown value';
// }
 
console.log(calculator(1, 2, '+'), 3, 'calculate');
console.log(calculator(1, 2, '-'), -1, 'calculate');
console.log(calculator(3, 5, '*'), 15, 'calculate');
console.log(calculator(6, 2, '/'), 3, 'calculate');
console.log(calculator(6, 2, '$'), 'unknown value', 'calculate'); 
console.log(calculator(6, 'h', '*'), 'unknown value', 'calculate');
