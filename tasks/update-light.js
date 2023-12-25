function updateLight(current) {
  const list = ['green', 'yellow', 'red'];
  const index = list.findIndex((x) => current === x);
  const len = list.length;
 
  return index >= list.length - 1 ? list[index - len + 1] : list[index + 1];
}
 
// const updateLight = current => ({
//   green: 'yellow',
//   yellow: 'red',
//   red: 'green',
// })[current];
 
console.log(updateLight('green'), 'yellow');
console.log(updateLight('yellow'), 'red');
console.log(updateLight('red'), 'green');
