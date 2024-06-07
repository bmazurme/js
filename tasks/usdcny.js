function usdcny(usd) {
  return `${(6.75 * usd).toFixed(2)} Chinese Yuan`;
}
 
console.log(usdcny(15), '101.25 Chinese Yuan');
console.log(usdcny(465), '3138.75 Chinese Yuan');
console.log(usdcny(5006), '33790.50 Chinese Yuan');
