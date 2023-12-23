function capitalize(s) {
  const result = ['', ''];
 
  for(let i = 0; i < s.length; i++) {
    result[0] += !(i % 2) ? s[i].toUpperCase() : s[i].toLowerCase();
    result[1] += i % 2 ? s[i].toUpperCase() : s[i].toLowerCase();
  }
 
  return result;
};
 
console.log(capitalize('abcdef'), ['AbCdEf', 'aBcDeF']);
console.log(capitalize('codewars'), ['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize('abracadabra'), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize('codewarriors'), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
