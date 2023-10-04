function solution(str, ending){
  // TODO: complete
  console.log(str.substring(ending.length), ending.length);
  return str.substring(str.length - ending.length) === ending;
}

// 'samurai', 'ai'
console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)
console.log(solution('samurai', 'ai'), true)