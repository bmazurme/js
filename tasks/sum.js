function sum(prop) {
  let result = prop ?? 0;

  if (!prop) {
    return result;
  }
  
  function slave(prop) {
    if (!prop) {
      return result;
    }
    result += prop;

    return slave;
  }

  return slave;
}

console.log(sum(1)(2)(3)());
console.log(sum());
