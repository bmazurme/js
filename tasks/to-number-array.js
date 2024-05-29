function toNumberArray(stringarray) {
  return stringarray.map((x) => Number(x));
}
// return stringarray.map(parseFloat);
 
console.log(toNumberArray(['1.1', '2.2', '3.3']), [1.1, 2.2, 3.3]);
