function mouthSize(animal) {
  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}
 
console.log(mouthSize('toucan'), 'wide');
console.log(mouthSize('ant bear'), 'wide');
console.log(mouthSize('alligator'), 'small');
