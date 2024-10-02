// Необходимо реализовать метод groupBy, расширяющий стандартные методы массивов.
// Метод должен возвращать сгруппированную версию массива – объект,
// в котором каждый ключ является результатом выполнения переданной функции fn(arr[i]),
// а каждое значение - массивом, содержащим все элементы исходного массива с этим ключом.

const array1 = [
  { id: 1 },
  { id: 1 },
  { id: 2 }
 ];
const array2 = [1, 2, 5];

Array.prototype.groupBy = function(fn) {
  const arr = this.map(fn);
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = result[arr[i]]
      ? [...result[arr[i]], this[i]]
      : [this[i]]; 
  }

  return result;
}

const fn = (item) => item.id;

console.log(array1.groupBy(fn));
console.log(array2.groupBy(String));
