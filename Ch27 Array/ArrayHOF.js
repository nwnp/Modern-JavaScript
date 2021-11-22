const { unsortedSegmentSum } = require("@tensorflow/tfjs-core");

const fruits = ["apple", "banana", "orange"];
const numbers = [40, 100, 1, 5, 2, 25, 10];

fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

numbers.sort((a, b) => a - b);
console.log(numbers);

console.clear();

const numbers2 = [1, 2, 3];
const pows = [];

numbers2.forEach((item) => pows.push(item));

console.log(pows);
const numbers3 = [1, 4, 9];

const roots = numbers3.map((item) => Math.sqrt(item));
console.log(roots);

const odds = numbers2.filter((item) => item % 2);
console.log(odds);

console.clear();
const sum = [1, 2, 3, 4].reduce(
  (previousValue, currentValue) => previousValue + currentValue
);

console.log(sum);

// some
console.log([5, 10, 15].some((item) => item > 10));
console.log([5, 10, 15].some((item) => item > 15));

// every
console.log([5, 10, 15].every((item) => item >= 5));
console.log([5, 10, 15].every((item) => item > 15));

// find
const users = [
  { id: 1, name: "jin" },
  { id: 2, name: "hi" },
  { id: 3, name: "hello" },
];

console.log(users.find((user) => user.id === 1));

// findIndex
console.log(users.findIndex((user) => user.id === 1));

// flatMap
const arr = ["hello", "world"];

let resultArr = arr.map((x) => x.split("")).flat();
console.log(resultArr);

resultArr = arr.flatMap((x) => x.split(""));
console.log(resultArr);
