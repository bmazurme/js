function alphabetWar(fight) {
  const [left, right] = fight.split('').reduce((a, x) => [a[0] += 'sbpw'.indexOf(x) + 1, a[1] += 'zdqm'.indexOf(x) + 1], [0, 0]);
 
  return left - right ? `${left - right > 0 ? 'Left' : 'Right'} side wins!` : `Let's fight again!`;
}
 
// let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
// let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
// return result ? (result < 0 ? 'Left' : 'Right') + ' side wins!' : 'Let's fight again!';
 
console.log( alphabetWar('z') , 'Right side wins!');
console.log( alphabetWar('zdqmwpbs') , `Let's fight again!`);
console.log( alphabetWar('zzzzs'), 'Right side wins!');
console.log( alphabetWar('wwwwww'), 'Left side wins!');
