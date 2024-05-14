function evaporator(content, evap_per_day, threshold) { 
  let days = 0;
  const limit = threshold / 100 * content;
  const delta = evap_per_day / 100;
  
  while(content >= limit) {
    content -= delta * content;
    days += 1;
  }
 
  return days;
}
 
console.log(evaporator(10, 10, 10), 22);
