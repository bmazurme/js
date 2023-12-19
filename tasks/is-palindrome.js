function isPalindrome(x) {
  const str = x.toLowerCase();
  let left = 0;
  let right = str.length - 1;
 
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
 
    left += 1;
    right -= 1;
  }
 
  return true;
}
 
// return x.split('').reverse().join('').toLowerCase() === x.toLowerCase() ? true : false
 
console.log(isPalindrome('a'), true);
console.log(isPalindrome('aba'), true);
console.log(isPalindrome('Abba'), true);
console.log(isPalindrome('hello'), false);
console.log(isPalindrome('Bob'), true);
console.log(isPalindrome('Madam'), true);
console.log(isPalindrome('AbBa'), true);
console.log(isPalindrome(''), true);
