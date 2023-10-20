function count(string) {
  const uniq = new Set(string.split(''));
  return [...uniq].reduce((a, x, i) => ({ ...a, [x]: string.split('').filter((f) => f === x).length }), {});
}
 
console.log(count(''), {});
console.log(count('a'), {'a': 1});
console.log(count('ab'), {'a': 1, 'b': 1});
console.log(count('aba'), {'a': 2, 'b': 1});
console.log(count('ABC'), {'A': 1, 'B': 1, 'C': 1});
