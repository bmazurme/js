function validBraces(braces) {
  const tracer = [];
 
  for(let i = 0; i < braces.length; i++) {
    if (braces[i] === '(' || braces[i] === '{' || braces[i] === '[') {
      tracer.push(braces[i]);
    } else {
      if (tracer.length === 0) {
        return false;
      }
      const lastValue = tracer[tracer.length - 1];
 
      if ((braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '(')) {
        tracer.pop();
      } else {
        break;
      }
    }
  }
 
  return tracer.length === 0;
}
 
console.log(validBraces('()', true));
console.log(validBraces('[]', true));
console.log(validBraces('{}', true));
console.log(validBraces('(){}[]', true));
console.log(validBraces('([{}])', true));
console.log(validBraces('(}', false));
console.log(validBraces('[(])', false));
console.log(validBraces('({})[({})]', true));
console.log(validBraces('(})', false));
console.log(validBraces('(({{[[]]}}))', true));
console.log(validBraces('{}({})[]', true));
console.log(validBraces(')(}{][', false));
console.log(validBraces('())({}}{()][][', false));
console.log(validBraces('(((({{', false));
console.log(validBraces('}}]]))}])', false));
