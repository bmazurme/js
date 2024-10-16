function getWeatherRandomness(temperatures) {
  let count = 0;
  const len = temperatures.length;

  if (len === 1) {
    return 1;
  }

  for (let i = 0; i < len; i++) {
    const leftItem = temperatures[i - 1];
    const rightItem = temperatures[i + 1];
    const leftResult = temperatures[i] > leftItem;
    const rightResult = temperatures[i] > rightItem;

    if (leftResult && rightResult) {
      count++;
    }
    if (leftResult && rightItem === undefined) {
      count++;
    }
    if (rightResult && leftItem === undefined) {
      count++;
    }  
  }

  return count;
}

console.log(getWeatherRandomness([-1, -10, -8, 0, 2, 0, 5]), 3);
console.log(getWeatherRandomness([1, 2, 5, 4, 8]), 2);
