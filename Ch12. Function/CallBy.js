// primitive는 원시 값을 obj는 객체를 전달받음
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'kim';

  console.log('primitive', primitive);
  console.log('obj', obj);
}

var num = 100;
var person = {
  name: 'jin',
};

console.log(num);
console.log(person);

changeVal(num, person);

console.log(num); // 원시 값은 변경불가능한 값이기 때문에 함수에 의해서 값이 변하지 않음
console.log(person); // 객체는 변경가능한 값이기 때문에 함수에 의해서 프로퍼티 값에 재할당 가능

// recursive function
function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);
}
countdown(10);

function factorial(n) {
  if (n <= 1) return 1;
  else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4));

// nested function & inner function
function outer(a, b) {
  var result = 0;
  function inner() {
    console.log('inner() 함수 호출됨');
    result = a ** b;
    console.log(result);
  }
  if (a >= 2) {
    inner();
    return result;
  } else {
    return 1;
  }
}

console.log(outer(1, 4));

// callback function
console.log('--------------------------------------');
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}
// 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백함수라고 한다

var logAll = function (i) {
  console.log(i);
};

repeat(5, logAll);

var logOdds = function (i) {
  if (i % 2) console.log(i);
};
// 함수의 매개변수를 ㅗㅌㅇ해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차함수라고 한다
repeat(5, logOdds);
