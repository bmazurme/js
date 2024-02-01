const greet = function(name) {
  
  return `Hello ${name[0].toUpperCase()}${name.substring(1).toLowerCase()}!`;
};

console.log(greet('riley'), 'Hello Riley!');
