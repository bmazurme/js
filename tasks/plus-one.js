
function plusOne(digits) {
  let shift = 1;

  for (let i = digits.length - 1; i >= 0 ; i--) {
    let sum = digits[i] + shift;
    let val = sum % 10;
    shift = (sum - val) / 10;
    digits[i] = val;
  }

  if (shift > 0) {
    digits.unshift(shift);
  }

  return digits;
};

console.log(plusOne([4,3,2,1]));
console.log(plusOne([9]));