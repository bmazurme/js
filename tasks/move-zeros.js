function moveZeros(arr) {
  // let array = arr;

  // for (let i = array.length; i >= 0 ; i--) {
  //   if (array[i] === 0) {
  //     array = [...array.slice(0, i), ...array.slice(i + 1), array[i]]
  //   }
  // }

  return arr.filter((x) => x !== 0).concat(arr.filter((x) => x === 0));
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
console.log(moveZeros([false,1,0,1,2,0,1,3,'a']), [false,1,1,2,1,3,'a',0,0]);
console.log(moveZeros([null,1,0,1,2,0,1,3,'a']), [null,1,1,2,1,3,'a',0,0]);
console.log(moveZeros([{},1,0,1,2,0,1,3,'a']), [{},1,1,2,1,3,'a',0,0]);


