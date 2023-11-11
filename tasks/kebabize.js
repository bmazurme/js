function kebabize(str) {
  let result = '';
  const re =  /[^a-z]+/gi;
  const tmp = str.replaceAll(re, '');
  
  for(let i = 0; i < tmp.length; i++) {
    result += tmp[i] === tmp[i].toLowerCase() 
      ? tmp[i] : i === 0 
        ? tmp[i].toLowerCase() 
        : `-${tmp[i].toLowerCase()}`;
  }
 
  return result;
}
// function kebabize(str) {
//   return str.replace(/[^a-z]/ig, '').
//     replace(/^[A-Z]/, c => c.toLowerCase()).
//     replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
// }
 
console.log(kebabize('camelsHaveThreeHumps'), 'camels-have-three-humps');
console.log(kebabize('camelsHave3Humps'), 'camels-have-humps');
console.log(kebabize('CAMEL'), 'c-a-m-e-l');
