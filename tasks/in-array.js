function inArray(array1, array2) {
  return array1.filter((x) => array2.some((y) => y.includes(x))).sort();
}
 
    
a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
a1 = ['xyz', 'live', 'strong'];
 
console.log(inArray(a1, a2), ['live', 'strong']);
