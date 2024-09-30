function permutations(arr, perm = [], result = []) {
  if (arr.length === 0) {
    result.push(perm);
  } else {
    for (let i = 0; i < arr.length; i++) {
      const copy = arr.slice();
      const elem = copy.splice(i, 1);
      // console.log('>', copy, elem, perm.concat(elem), result);
      // return;
      permutations(copy, perm.concat(elem), result);
    }
  }

  return result;
}

// console.log(permutations(['a']));
console.log(permutations(['a', 'b', 'c', 'd']));
// console.log(permutations(['a', 'b', 'c', 'd', 'e']));
