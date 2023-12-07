const number = function(busStops) {
  const { i, o } = busStops.reduce((a, x) => ({ i: a.i += x[0], o: a.o += x[1] }), { i: 0, o: 0 });
  
  return i - o;
}
 
console.log(number([[10,0],[3,5],[5,8]]),5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
console.log(number([[0,0]]),0);
