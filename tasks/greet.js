function greet(name) {
  return name === 'Johnny' ? 'Hello, my love!' : 'Hello, ' + name + '!';
}
 
console.log(greet('Jim'), '"Hello, Jim!');
console.log(greet('Jane'), 'Hello, Jane!');
console.log(greet('Simon'), 'Hello, Simon!');
console.log(greet('Johnny'), 'Hello, my love!');
