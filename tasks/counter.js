function counter() {
  let count = 0;

  function increment() {
    return ++count;
  }

  increment.clear = function() {
    count = 0;
    return count;
  }

  return increment;
}

const cnt = counter();

console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt.clear());
console.log(cnt());
console.log(cnt());
console.log(cnt());
