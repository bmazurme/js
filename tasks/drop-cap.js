function dropCap(n) {
  return n.split(' ').map((x) => x.length <= 2 
  ? x 
  : `${x.substr(0, 1).toUpperCase()}${x.substr(1).toLowerCase()}`).join(' ');
}
 
console.log(dropCap('Apple Banana'),'Apple Banana');
console.log(dropCap('Apple'),'Apple');
console.log(dropCap(''),'');
console.log(dropCap('of'),'of');
console.log(dropCap('Revelation of the contents outraged American public opinion, and helped generate'),'Revelation of The Contents Outraged American Public Opinion, And Helped Generate');
console.log(dropCap('more  than    one space between words'),'More  Than    One Space Between Words');
console.log(dropCap('  leading spaces'),'  Leading Spaces');
console.log(dropCap('trailing spaces   '),'Trailing Spaces   ');
console.log(dropCap('ALL CAPS CRAZINESS'),'All Caps Craziness');
console.log(dropCap('rAnDoM CaPs CrAzInEsS'),'Random Caps Craziness');
