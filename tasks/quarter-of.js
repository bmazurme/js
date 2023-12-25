const quarterOf = (month) => {
  let result = 1;
 
  while (month > 3) {
    month -= 3;
    result +=1;
  }
 
  return result;
}
 
// return Math.ceil(month / 3);
 
console.log(quarterOf(3), 1)
console.log(quarterOf(8), 3)
console.log(quarterOf(11), 4)
