function remove(string) {  
  let i = string.length - 1;
 
  while(string[i] === '!') {
    string = string.substring(0, i);
    i -= 1;
  }
 
  return string;
}
 
// const remove = s => s.replace(/!+$/, '');
 
console.log(remove('Hi!'), 'Hi');
console.log(remove('Hi!!!'), 'Hi');
console.log(remove('!Hi'), '!Hi');
console.log(remove('!Hi!'), '!Hi');
console.log(remove('Hi! Hi!'), 'Hi! Hi');
console.log(remove('Hi'), 'Hi');
