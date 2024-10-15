function sumOfBinaries(firstNumber, secondNumber) {
  let result = '';
  const firstString = firstNumber.toString();
  const secondString = secondNumber.toString();
  const firstLength = firstString.length;
  const secondLength = secondString.length;
  let counter = Math.max(firstString.length, secondString.length);
  const dict = {
    '00': '0',
    '01': '1',
    '10': '1',
    '11': '10',
  };
  let pre = {};


  for (let i = 0; i < counter; i++) {
    const a = firstString[firstLength - i - 1];
    const b = secondString[secondLength - i - 1];
    let x = dict[`${a}${b}`];

    if (x === '10') {
      x = '0';
      pre[i + 1] = '1';
    } else {
      pre[i + 1] = '0';
    }

    if (x === '0' && pre[i] === '1') {
      x = '1';
    } else if (x === '1' && pre[i] === '1') {
      x = '0';
      pre[i + 1] = '1';
    }

    result = x + result;
  }
  if (pre[counter] === '1') {
    result = '1' + result;
  }

  return result;
}

console.log(sumOfBinaries(1010, 1011), 10101);
console.log(sumOfBinaries(1, 1), 10);

