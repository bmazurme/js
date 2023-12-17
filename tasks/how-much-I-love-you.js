function howMuchILoveYou(nbPetals) {
  const dict = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
];

  while (nbPetals > 6) {
    nbPetals -= 6;
  }

  return dict[nbPetals - 1];
}

// phrase[nbPetals%6]

console.log(howMuchILoveYou(7), 'I love you');
console.log(howMuchILoveYou(3), 'a lot');
console.log(howMuchILoveYou(6), 'not at all');
