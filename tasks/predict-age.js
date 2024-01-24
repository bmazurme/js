function predictAge(...ages) {
  // your code
  // return Math.floor(Math.sqrt(age1 * age1 + age2 * age2 + age3 * age3 + age4 * age4 + age5 * age5 + age6 * age6 + age7 * age7 + age8 * age8) / 2);
  return Math.floor(Math.sqrt(ages.reduce((a, x) => a + x ** 2, 0)) / 2);
}
 
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);
