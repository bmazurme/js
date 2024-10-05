function join(key, ...arr) {
  console.log(arguments);
  return arr.join(key);
}

console.log(join('.', '1', '2', '3'));
console.log(join('-', 'a', 'b', 'c'));
