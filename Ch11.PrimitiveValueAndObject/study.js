/**
 *
 *  # 원시 값과 객체의 비교
 *    - 원시 타입
 *      -> 변경 불가능한 값
 *    - 객체(참조) 타입
 *      -> 변경 가능한 값
 *
 *    - 원시 값을 변수에 할당하면 메모리 공간에 실제 값이 저장된다
 *      변수를 다른 변수에 할당하면
 *      -> 복사되어 저장(값에 의한 전달 - pass by value)
 *    - 객체를 변수에 할당하면 변수에는 참조 값이 저장된다
 *      객체를 다른 변수에 할당하면
 *      -> 참조 값이 복사되어 전달(참조에 의한 전달 - pass by reference)
 */

// 상수 - 원시 타입
const o = {};
o.name = 'Jin';

o.name = 'Jin jeong woo';

console.log(o); // Jin jeong woo

/* 문자열과 불변성 */
// 값의 재할당은 가능하다
//    -> 재할당 이전의 값을 삭제하고 그 메모리 공간 안에 재할당 값이 저장되는 것이 아니라
//    -> 메모리 공간에 재할당 값을 담을 공간을 할당을 하고 그 메모리 공간을 참조하는 것
//      -> 즉, 값의 변화가 아니라 변수가 참조하던 메모리 주소의 변화가 있는 것
var str = 'hello';
str = 'jin'; // 'hello'를 담고있는 메모리 주소를 할당 -> 재할당 가능
console.log(str);

str[0] = 'X'; // 값을 바꾸는 것이기 때문에 할당 X
console.log(str);

// 값에 의한 전달 -> 다른 메모리 공간에 저장된 별개의 값
var score = 80;
var copy = score;

console.log(score);
console.log(copy);
console.log(score === copy);

score = 100;

console.log(score);
console.log(copy);
console.log(score === copy);

var obj = {
  name: 'Jin',
};

obj.add = '+';
console.log(obj);

// 참조에 의한 전달 -> 하나의 객체를 두개의 변수가 참조를 할 수 있음
// = pass by reference
// = pass by share
var person = {
  name: 'Jin',
  age: 28,
};
var copy = person;
console.log(copy === person);

copy.name = 'SSIBAL';
person.location = 'Incheon';

console.log(copy);
console.log(person);

// practice
var person1 = {
  name: 'Jin',
};

var person2 = {
  name: 'Jin',
};

console.log(person1 === person2);
console.log(person1.name === person2.name);
