const arr = Array.of(1, 2, 3);
console.log(arr);

const arr2 = Array.from({ length: 2, 0: "a", 1: "b" });
console.log(arr2);

const iterable = Array.from("hello");
console.log(iterable);

const arr3 = Array.from({ length: 3 }, (_, i) => i);
arr3["foo"] = 3;
arr3.bar = 4;
arr3["1.1"] = 5;
console.log(arr3);
console.log(arr3.length);

arr.splice(1, 1);
console.log(arr);
console.log(arr.length);
