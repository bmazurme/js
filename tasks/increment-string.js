function incrementString (strng) {
  const tmp = /(\d+)(?!.*\d)/;
  const data = strng.match(tmp);
 
  return !data
    ? `${strng}1`
    : strng.replace(tmp, `${Number(++strng.match(tmp)[0])}`.padStart(data[0].length, '0'));
}
 
// let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)
 
console.log(incrementString('foobar000'), 'foobar001');
console.log(incrementString('foobar000'), 'foobar001');
console.log(incrementString('foobar999'), 'foobar1000');
console.log(incrementString('foobar00999'), 'foobar01000');
console.log(incrementString('foo'), 'foo1');
console.log(incrementString('foobar001'), 'foobar002');
console.log(incrementString('foobar1'), 'foobar2');
console.log(incrementString('1'), '2');
console.log(incrementString('009'), '010');
console.log(incrementString('fo99obar99'), 'fo99obar100')
