function dashatize(num) {
  const str = num.toString();
  const result =     str.split('')
  .map((x) => !(Number(x) % 2) ? x : ` ${x} `)
  .join('')
  .trim('')
  .replaceAll(' ', '-')
  .replaceAll('--', '-');
 
  return str[0] === '-'
  ? result.replace('-', '')
  : result;
}
 
console.log(dashatize(274), '2-7-4');
console.log(dashatize(5311), '5-3-1-1');
console.log(dashatize(86320), '86-3-20');
console.log(dashatize(974302), '9-7-4-3-02');
console.log(dashatize(-1), '-1');
 
// function dashatize(num) {
//   return String(num)
//     .replace(/([13579])/g, "-$1-")
//     .replace(/--+/g, "-")
//     .replace(/(^-|-$)/g, "")
// }
