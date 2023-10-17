function longestCommonPrefix(strs) {
  let tmp = strs[0];
  let prefix = '';
 
  for (let i = 0; i < tmp.length; i++) {
    if (strs.every((y) => y[i] === tmp[i])) {
      prefix += tmp[i];
    } else {
      return prefix;
    }
  }
 
  return prefix;
}
 
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['cir', 'car']));