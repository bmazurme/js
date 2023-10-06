function divisors(integer) {
  const counts = [];
 
  for (let i = integer - 1; i > 1; i--) {
    if (integer % i === 0) {
      counts.push(integer / i);
    }    
  }
 
  return counts.length === 0 ? `${integer} is prime` : counts;
};
 
console.log(divisors(12)); // should return [2,3,4,6]
console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return '13 is prime'