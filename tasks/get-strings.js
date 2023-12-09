function getStrings(city) {
  const arr = city.toLowerCase().split('');
  const str = [...new Set(arr)].filter((x) => x.match(/^[a-z]*$/));
 
  return str.map((x) => `${x}:${'*'.repeat(arr.filter((c) => c === x).length)}`).join(',');
}
 
console.log(getStrings('Chicago'), 'c:**,h:*,i:*,a:*,g:*,o:*');
console.log(getStrings('Bangkok'), 'b:*,a:*,n:*,g:*,k:**,o:*');
console.log(getStrings('Las Vegas'), 'l:*,a:**,s:**,v:*,e:*,g:*');
