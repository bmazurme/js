function permutations(str) {
  return (str.length <= 1) ? [str] :
  [...(new Set(
    str.split('')
      .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
      .flat()
  ))];
}

console.log(permutations('a'), ['a']);
console.log(permutations('ab'), ['ab', 'ba']);
console.log(permutations('aabb'), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
