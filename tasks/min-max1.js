function minMax(numbers) {
  let min = numbers[0];
  let max = numbers[0];
  
  for (let i = 1; i < numbers.length; i++) {
    const n = numbers[i];

    if (n < min) {
      min = n;
    }

    if (n > max) {
      max = n;
    }
  }

  return {min, max};
}
