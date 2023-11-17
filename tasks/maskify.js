function maskify(cc) {
  return cc.split('').reduce((a, x, i) => a += i >= cc.length - 4 ? x : '#', '');
}
 
console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');
