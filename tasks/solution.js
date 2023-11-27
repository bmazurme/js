function solution(string) {
  return string.split('').reduce((a, x) => a += x === x.toLowerCase() ? x : ` ${x}`, '');
}
 
// return(string.replace(/([A-Z])/g, ' $1'));
 
console.log(solution('camelCasing'), 'camel Casing', 'Unexpected result');
console.log(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result');
