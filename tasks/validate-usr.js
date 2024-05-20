function validateUsr(username) {
  const res =  /^[0-9a-z_]{4,16}$/.test(username);
  return res;
}
 
console.log(validateUsr('asddsa'), true);
console.log(validateUsr('a'), false);
console.log(validateUsr('Hass'), false);
console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
console.log(validateUsr(''), false);
console.log(validateUsr('____'), true);
console.log(validateUsr('012'), false);
console.log(validateUsr('0123'), true);
console.log(validateUsr('1234567890abcdefg'), false);
console.log(validateUsr('p1pp1'), true);
console.log(validateUsr('asd43 34'), false);
console.log(validateUsr('asd43_34'), true);
console.log(validateUsr('abcd'), true);
