function humanYearsCatYearsDogYears(humanYears) {
  const result = [humanYears, 0, 0];
  let i = 0;
  const dict = {
    cats: [15, 9, 4],
    dogs: [15, 9, 5],
  };
 
  while(humanYears > 0) {
    result[1] += dict.cats[i];
    result[2] += dict.dogs[i];
  
    if (i < 2) {
      i += 1;
    }
 
    humanYears -= 1;
  }
 
  return result;
}
 
console.log(humanYearsCatYearsDogYears(1), [1,15,15]);
console.log(humanYearsCatYearsDogYears(2), [2,24,24]);
console.log(humanYearsCatYearsDogYears(10), [10,56,64]);
 
// if (y === 1) return [1, 15, 15];
// if (y === 2) return [2, 24, 24];
// return [y, (y-2) * 4 + 24, (y-2) * 5 + 24];
 
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
 
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that