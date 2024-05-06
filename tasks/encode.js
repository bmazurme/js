// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
 
function encode(str) {
  const dict = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5,
  };
 
  return str.split('').map((x) => dict[x] ? dict[x] : x).join('');
}
 
function decode(str) {
  const dict = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
 
  return str.split('').map((x) => dict[x] ? dict[x] : x).join('');
}
 
// function encode(string) {
//   return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
// }
// function decode(string) {
//   return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
// }
 
console.log(encode('hello'), 'h2ll4');
console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');