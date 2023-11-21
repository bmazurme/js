function uniTotal (string) {
  return string.split('').reduce((a, x) => a + x.charCodeAt(0), 0);
}
 
console.log(uniTotal('c'), 99);
console.log(uniTotal('Mary Had A Little Lamb'), 1873);
