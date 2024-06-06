function defineSuit(card) {
  const dict = {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades',
  };
 
  return dict[card[card.length - 1]];
}
 
console.log(defineSuit('Q♠'), 'spades');
console.log(defineSuit('9♦'), 'diamonds');
console.log(defineSuit('J♥'), 'hearts');
