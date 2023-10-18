const first = 'abccba';
const second = 'abcxa';
const third = 'abcdcba';

function check(str) {
  let left = 0;
  let right = str.length - 1;
  
  while(left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(check(first));
console.log(check(second));
console.log(check(third));