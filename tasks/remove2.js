function remove(s, n) {
  let result = '';
 
  for(let i = 0; i < s.length; i++) {
    if (s[i] === '!' && n > 0) {
      n -= 1;
    } else {
      result += s[i];
    }
  }
 
  return result;
}
 
// for (let i = 0; i < n; i++) {
//   s = s.replace('!', '');
// }
// return s;
 
console.log(remove('Hi!', 1), 'Hi');
console.log(remove('Hi!', 100), 'Hi');
console.log(remove('Hi!!!', 1), 'Hi!!');
console.log(remove('Hi!!!', 100), 'Hi');
console.log(remove('!Hi', 1), 'Hi');
console.log(remove('!Hi!', 1), 'Hi!');
console.log(remove('!Hi!', 100), 'Hi');
console.log(remove('!!!Hi !!hi!!! !hi', 1), '!!Hi !!hi!!! !hi');
console.log(remove('!!!Hi !!hi!!! !hi', 3), 'Hi !!hi!!! !hi');
console.log(remove('!!!Hi !!hi!!! !hi', 5), 'Hi hi!!! !hi');
console.log(remove('!!!Hi !!hi!!! !hi', 100), 'Hi hi hi');