const arr = [5, 6, 7, 8];

console.log(arr.length);

console.log(typeof arr);

function linearSearch(array, target) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] == target) return i;
  }

  return -1;
}

console.log(linearSearch(arr, 8));
console.log(linearSearch([1, 2, 3, 4, 5], 8));
