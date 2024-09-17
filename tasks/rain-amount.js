function rainAmount(rainAmount) {
  return rainAmount >= 40
    ? 'Your plant has had more than enough water for today!'
    : `You need to give your plant ${40 - rainAmount} mm of water`;
}
 
console.log(rainAmount(100), 'Your plant has had more than enough water for today!');
console.log(rainAmount(39), 'You need to give your plant 1mm of water');
