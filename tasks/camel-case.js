String.prototype.camelCase = function() {
  return this.split(' ').map((x) => `${x.substring(0, 1).toUpperCase()}${x.substring(1).toLowerCase()}`).join('');
}
 
console.log('test case'.camelCase(), 'TestCase');
console.log('camel Case method'.camelCase(), 'CamelCaseMethod');
console.log('say hello'.camelCase(), 'SayHello');
console.log('camel case word'.camelCase(), 'CamelCaseWord');
console.log(''.camelCase(), '');
