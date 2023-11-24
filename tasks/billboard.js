function billboard(name, price = 30) {
  return name.split('').reduce((a, x) => a += price, 0);
} 
 
console.log(billboard('Jeong-Ho Aristotelis'), 600);
console.log(billboard('Abishai Charalampos'), 570);
console.log(billboard('Idwal Augustin'), 420);
console.log(billboard('Hadufuns John',20), 260);
