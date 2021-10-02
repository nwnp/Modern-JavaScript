function add(x, y) {
  return x + y;
}

result = add(2, 5);
console.log(result);
console.log(typeof add);

// function literal
var result = function add(x, y) {
  return x + y;
};

// ES6 - Function literal
var resultAdd = (x, y) => x + y;
console.log(resultAdd(3, 6));
console.log(typeof resultAdd);

console.dir(result);
console.dir(resultAdd);

const plus = (x, y) => x + y;
console.log(add(34, 6));

// 매개변수가 파라미터보다 더 많을 때 -> arguments에 보관된다
function func(x, y) {
  console.log(x, y);
  console.log(arguments);
  console.log(arguments[2]);
}

func(3, 4, 5);

// 매개변수의 타입
function example(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('인수는 모두 숫자 값이어야 함');
  }

  return x + y;
}

console.log(add('2', '3'));
console.log(add(2, 3));

// ES6 - 매개변수의 타입
function example2(x = 0, y = 0) {
  return x + y;
}

console.log(example2(3, 4));
