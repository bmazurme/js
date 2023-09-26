function isPangram(string) {
  const arr = string.split('').filter((x) => /([abcdefghijklmnopqrstuvwxyz])/gi.test(x)).map((x) => x.toLowerCase(x));
 
  return new Set(arr).size === 'abcdefghijklmnopqrstuvwxyz'.length;
}
 
let string = 'The quick brown fox jumps over the lazy dog.';
console.log(isPangram(string), true);
