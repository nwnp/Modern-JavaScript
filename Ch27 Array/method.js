const arr = [1, 2, 3];

const result = arr.concat(4);
console.log(arr);
console.log(result);

const foods = ["apple", "banana", "orange"];
console.log(foods);
if (!foods.includes("chicken")) {
  foods.push("chicken");
}

console.log(foods);

let arrShift = arr.shift();
console.log(arrShift);
console.log(arr);

const arr4 = [1, 2, 3, 4];

const result2 = arr4.splice(1, 2, 20, 30);
console.log(result2);
console.log(arr4);
