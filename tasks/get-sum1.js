function getSum(listNumber, number) {
  let len = listNumber.length;
  
  while (len < 10000) {
    listNumber.unshift(0);
    len++;
  }

  for (let i = 9999; i >= 0; i--) {
    let x = listNumber[i] + number;
    let value = x % 10;
    listNumber[i] = value; 
    number = number > 0 ? (x - value) / 10 : 0;
  }

  let j = 0;
  let flag = true;
  while (j < listNumber.length) {
    if (listNumber[j] === 0) {
      j++;
    } else {
      break;
    }
  }

  return listNumber.slice(j);
}


// console.log(getSum([1, 2, 0, 0], 34), '1 2 3 4');
// console.log(getSum([9, 5], 17), '1 1 2');
// console.log(getSum([9, 5], 10005), '');
// console.log(getSum([9, 5], 0), '');
console.log(getSum('2 0 4 3 3 2 1 8 1 9 6 0 0 1 3 3 8 9 0 8 3 8 6 3 7 9 4 0 2 6'.split(' ').map((x) => Number(x)), 349).join(' '));
console.log('2 0 4 3 3 2 1 8 1 9 6 0 0 1 3 3 8 9 0 8 3 8 6 3 7 9 4 3 7 5');

