function buildRowText(index, character) {
  const arr = [...new Array(9)].map((x, i) => i === index ? character : ' ');
 
  return `|${arr.join('|')}|`
}
 
// let str = '| | | | | | | | | | |';
// return str.substr(0, 2 * (index + 2) - 3) + character + str.substr(2 * (index + 2))
 
console.log(buildRowText(2, 'A'), buildRowText(2, 'A') === '| | |A| | | | | | |');
console.log(buildRowText(0, 'A'), '|A| | | | | | | | |');
console.log(buildRowText(8, 'A'), '| | | | | | | | |A|');
