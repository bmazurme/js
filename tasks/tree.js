function tree(obj) {
  let val = `${obj.name}`;
  
  if (obj.value) {
    val += tree(obj.value);
  }
 
  return val;
}
 
const obj = {
  name: 0,
  value: {
    name: 1,
    value: {
      name: 2,
      value: null,
    },
  },
};
 
console.log(tree(obj));
