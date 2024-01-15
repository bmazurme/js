function solve(s){
  const length = s.length;
  let j = 0;

  for (let i = 0; i < length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      j += 1;
    }
  }

  return j <= length - j ? s.toLowerCase() : s.toUpperCase();
}

console.log(solve('code'),'code');
console.log(solve('CODe'),'CODE');
console.log(solve('COde'),'code');
console.log(solve('Code'),'code');
  