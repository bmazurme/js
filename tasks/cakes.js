function cakes(recipe, available) {
  const counts = [];
 
  for (let key in recipe) {
    if (!available[key]) {
      return 0;
    }
    const val = Math.floor(available[key] / recipe[key]);
    counts.push(val);
  }
 
  return Math.min(...counts);
}
 
let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available), 2);
