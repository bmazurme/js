function isPalindrome(line) {
  const str = line.replace(/[\s.,%:';_-`~()*!<>@-]/g, '').toLowerCase();
  const len = str.length;

  let left = 0;
  let right = len - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'), true);
console.log(isPalindrome('zo'), false);

console.log(isPalindrome('ThiS_String-is-@-PALIND0m3```~3m0DNILAP-()-si*!gnirts>>>siht'), true);
console.log(isPalindrome(`-Luke, I'm your Father! -N00Oo! -oo00n -rehTAFruoymiekul`), true);
console.log(isPalindrome(`12321!`), true);
