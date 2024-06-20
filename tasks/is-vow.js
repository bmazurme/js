function isVow(a) {
  const dict = {
    97: 'a', 101: 'e', 105: 'i', 111: 'o', 117: 'u',
  };
  
  return a.map((x) => dict[x] || x);
}
 
// for (let i = 0, l = a.length; i < l; ++i) {
//   const char = String.fromCharCode(a[i]);
//   if ('aeiou'.indexOf(char) !== -1) {
//     a[i] = char;
//   }
// }
// return a;
 
console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,'u',120,121,'u',98,122,'a',120,106,104,116,113,114,113,120,106]);
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]),['e',121,110,113,113,103,121,121,'e',107,103]);
