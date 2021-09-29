/**
 *  # 객체 리터럴
 *    - 원시 값은 변경 불가능한 값이지만 객체 타입의 값은 변경 가능한 값이다
 *    - 객체는 0개 이상의 프로퍼티로 구성되어 있다
 *      -> 프로퍼티: key와 value로 구성되어짐
 *    - 프로퍼티에는 모든 값을 넣을 수 있다
 *    - 자바스크립트는 일급객체 이므로 값으로 취급할 수 있음
 *      -> 함수도 프로퍼티 값으로 사용할 수 있음
 *      -> 프로퍼티로 사용된 함수는 메서드(method)라고 부른다
 */

var person = {
  name: 'Jin',
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}`);
  },
};

console.log(typeof person);
console.log(person);
person.sayHello();

var person2 = {
  name: 'Jin',
  age: 28,
};

// 프로퍼티 키를 동적으로 생성
var obj = {};
var key = 'hello';

obj[key] = 'world';

console.log(obj);

// 키에 심벌 값 외의 값을 사용하면 암묵적 타입 변환을 통해 문자열이 됨
// 숫자 리털을을 사용하면 따옴표는 붙지 않지만 내부적으로는 문자열로 변환됨
var foo = {
  0: 1,
  1: 2,
  2: 3,
};

console.log(foo);

// method
var circle = {
  radius: 5,
  PI: 3.14,
  getDiameter: function () {
    return 2 * this.radius;
  },
  getArea: function () {
    return this.PI * this.radius ** 2;
  },
};

console.log(circle.getDiameter());
console.log(circle.getArea());

// 프로퍼티 접근
const R = circle.radius;
const result = circle.getArea();
console.log(result);

// 프로퍼티 값 갱신
person.name = 'Jin jeong woo';
console.log(person);

// 프로퍼티 동적 생성
// 존재하지 않는 프로퍼티 값을 할당하면 프로퍼티가 동적으로 생성되어 추가된다
person.location = 'Inchoen';
console.log(person);

/* ES6에서 추가된 객체 리터럴의 확장 기능 */
// 프로퍼티 축약
var x = 10;
var y = 20;

var ex_obj = {
  X: x,
  Y: y,
};

console.log(ex_obj);
// ES6에서는 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티를 생략할 수 있다
var ex_obj2 = { x, y };
console.log(ex_obj2);

// 메서드 축약 표현
const f_obj = {
  name: 'Jin',
  sayHello() {
    console.log('Hello');
  },
};

f_obj.sayHello();
