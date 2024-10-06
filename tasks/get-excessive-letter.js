function getExcessiveLetter(firstLine, secondLine) {
  let firstArr = firstLine.split('').sort();
  let secondArr = secondLine.split('').sort();
  let firstLen = firstArr.length;
  let secondLen = secondArr.length;
  let large = firstLen > secondLen ? firstArr : secondArr;
  let small = firstLen < secondLen ? firstArr : secondArr;

  while (large.length > 1) {
    if (large[0] === small[0]) {
      large = large.slice(1);
      small = small.slice(1);
    } else {
      const item = large[0];
      const items = large.slice(1);
      large = [...items, item]
    }
  }

  return large[0];
}

console.log(getExcessiveLetter('abcd', 'abcde'), 'e');
console.log(getExcessiveLetter('go', 'ogg'), 'g');
console.log(getExcessiveLetter('xtkpx', 'xkctpx'), 'c');
